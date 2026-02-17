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

        const downloadUrl = process.env.API_DOWNLOAD_URL;

        if (!downloadUrl) {
            return NextResponse.json(
                { error: 'Download API configuration missing' },
                { status: 500 }
            );
        }

        const response = await fetch(downloadUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoUrl: url }),
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch file from remote server' },
                { status: response.status }
            );
        }

        // Get the blob from the response
        const blob = await response.blob();

        // Return the blob with appropriate headers
        const headers = new Headers();
        const contentType = response.headers.get('content-type') || 'video/mp4';
        const contentDisposition = response.headers.get('content-disposition');

        headers.set('Content-Type', contentType);
        if (contentDisposition) {
            headers.set('Content-Disposition', contentDisposition);
        }

        return new NextResponse(blob, { headers });

    } catch (error: any) {
        console.error('Download Proxy Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to process download' },
            { status: 500 }
        );
    }
}
