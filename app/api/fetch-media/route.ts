import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json(
                { error: 'URL is required' },
                { status: 400 }
            );
        }

        if (!url.includes('instagram.com')) {
            return NextResponse.json(
                { error: 'Please enter a valid Instagram URL' },
                { status: 400 }
            );
        }

        const apiHost = process.env.API_HOST;

        if (!apiHost) {
            return NextResponse.json(
                { error: 'API configuration missing' },
                { status: 500 }
            );
        }

        // Endpoint 4: Scrape Instagram Post (returns JSON metadata + image URLs)
        // Note: Using /api/video/info as /api/video/download returns binary data
        const apiUrl = `${apiHost}/api/video/info`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ videoUrl: url }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', errorText);

            // Try to extract specific error message from X-Error header if available
            const xError = response.headers.get('X-Error');
            const errorMessage = xError || 'Failed to fetch media from server';

            return NextResponse.json(
                { error: errorMessage },
                { status: response.status }
            );
        }

        const data = await response.json();

        // Determine type and download URL
        let type = data.mediaType || 'photo';
        let downloadUrl = '';
        let fileSize = "Unknown";

        if (data.videoUrl) {
            type = 'video';
            downloadUrl = data.videoUrl;

            // Fetch file size for video
            try {
                const headResponse = await fetch(data.videoUrl, { method: 'HEAD' });
                const bytes = headResponse.headers.get('content-length');
                if (bytes) {
                    const mb = (parseInt(bytes) / (1024 * 1024)).toFixed(1);
                    fileSize = `${mb} MB`;
                }
            } catch (e) {
                console.error("Failed to get file size", e);
            }
        } else if (data.imageUrls && data.imageUrls.length > 0) {
            // Use local proxy for images to avoid CORS
            const imageUrl = data.imageUrls[0];
            downloadUrl = `/api/image/proxy?url=${encodeURIComponent(imageUrl)}`;
        }

        // Map the API response to the format expected by the frontend
        const mappedData = {
            thumbnail: data.thumbnailUrl
                ? `/api/image/proxy?url=${encodeURIComponent(data.thumbnailUrl)}`
                : (data.imageUrls?.[0] ? `/api/image/proxy?url=${encodeURIComponent(data.imageUrls[0])}` : ""),
            title: data.description || data.title || "Instagram Post",
            author: data.authorName || "Instagram User",
            likes: data.description?.match(/([\d.]+[KMB]?)\s+likes/i)?.[1] || "",
            views: "",
            downloadUrl: downloadUrl,
            type: (data.mediaType?.toLowerCase() === 'video' || data.videoUrl) ? 'video' : 'photo',
            url: url,
            size: fileSize,
            imageUrls: data.imageUrls || []
        };

        return NextResponse.json(mappedData);

    } catch (error: any) {
        console.error('Fetch Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process request' },
            { status: 500 }
        );
    }
}
