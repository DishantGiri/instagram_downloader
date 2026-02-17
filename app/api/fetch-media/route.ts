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

        const apiUrl = process.env.API_BASE_URL;

        if (!apiUrl) {
            return NextResponse.json(
                { error: 'API configuration missing' },
                { status: 500 }
            );
        }

        const response = await fetch(`${apiUrl}/api/video/info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoUrl: url }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', errorText);
            return NextResponse.json(
                { error: 'Failed to fetch media from server' },
                { status: response.status }
            );
        }

        const data = await response.json();

        // Map the API response to the format expected by the frontend
        const mappedData = {
            thumbnail: data.thumbnailUrl || "",
            title: data.description || data.title || "Instagram Post",
            author: data.authorName?.split('|')[0]?.trim() || "Instagram User",
            likes: data.description?.match(/([\d.]+[KMB]?)\s+likes/i)?.[1] || "",
            views: "", // Views aren't clearly present in this response
            downloadUrl: data.videoUrl || "",
            type: data.videoUrl ? "video" : "photo",
            url: url // Store original URL for the download method
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
