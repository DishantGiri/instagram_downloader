import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const imageUrl = searchParams.get('url');

        if (!imageUrl) {
            return new NextResponse('URL is required', { status: 400 });
        }

        const apiHost = process.env.API_HOST;
        if (!apiHost) {
            return new NextResponse('API_HOST not configured', { status: 500 });
        }

        const response = await fetch(`${apiHost}/api/image/proxy?url=${encodeURIComponent(imageUrl)}`);

        if (!response.ok) {
            return new NextResponse('Failed to fetch image', { status: response.status });
        }

        const blob = await response.blob();
        const headers = new Headers();
        headers.set('Content-Type', response.headers.get('Content-Type') || 'image/jpeg');
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');

        return new NextResponse(blob, { headers });
    } catch (error: any) {
        return new NextResponse(error.message || 'Server error', { status: 500 });
    }
}
