import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { imageUrl } = await request.json();

        if (!imageUrl) {
            return NextResponse.json({ error: 'Image URL is required' }, { status: 400 });
        }

        const apiHost = process.env.API_HOST;
        if (!apiHost) {
            return NextResponse.json({ error: 'API_HOST environment variable is not configured' }, { status: 500 });
        }

        const response = await fetch(`${apiHost}/api/image/download`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json({ error: errorText || 'Failed to download image' }, { status: response.status });
        }

        const blob = await response.blob();
        const headers = new Headers();
        headers.set('Content-Type', response.headers.get('Content-Type') || 'image/jpeg');
        headers.set('Content-Disposition', response.headers.get('Content-Disposition') || 'attachment; filename="instagram_image.jpg"');

        return new NextResponse(blob, { headers });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
    }
}
