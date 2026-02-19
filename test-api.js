
async function testEndpoints() {
    const urls = [
        "http://209.126.86.149:8086/api/video/download",
        "http://209.126.86.149:8086/api/video/info"
    ];

    // Video URL for testing - random one or provided in example
    const videoPayload = { videoUrl: "https://www.instagram.com/reel/CmNKkyBDvVx/" };

    for (const url of urls) {
        console.log(`Testing: ${url}`);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(videoPayload)
            });

            const contentType = response.headers.get('content-type');
            console.log(`Status: ${response.status}`);
            console.log(`Content-Type: ${contentType}`);

            if (contentType && contentType.includes('json')) {
                const data = await response.json();
                console.log("JSON Response (Success)");
            } else {
                console.log("Non-JSON Response (Likely Binary)");
            }
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
        console.log('------------------');
    }
}

testEndpoints();
