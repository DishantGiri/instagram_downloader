import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const url = searchParams.get('url');

        if (!url) {
            return new NextResponse('URL is required', { status: 400 });
        }

        const apiHost = process.env.API_HOST;
        const downloadUrl = apiHost + "/api/video/download";

        const response = await fetch(downloadUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoUrl: url }),
        });

        if (!response.ok) {
            return new NextResponse('Failed to fetch file from remote server', { status: response.status });
        }

        const blob = await response.blob();
        const headers = new Headers();
        headers.set('Content-Type', response.headers.get('content-type') || 'video/mp4');
        headers.set('Content-Disposition', response.headers.get('content-disposition') || 'attachment');

        return new NextResponse(blob, { headers });
    } catch (error: any) {
        return new NextResponse(error.message || 'Server error', { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        const apiHost = process.env.API_HOST;
        const downloadUrl = apiHost + "/api/video/download";

        const response = await fetch(downloadUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoUrl: url }),
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Failed to fetch file from remote server' }, { status: response.status });
        }

        const blob = await response.blob();
        const headers = new Headers();
        headers.set('Content-Type', response.headers.get('content-type') || 'video/mp4');
        headers.set('Content-Disposition', response.headers.get('content-disposition') || 'attachment');

        return new NextResponse(blob, { headers });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}
