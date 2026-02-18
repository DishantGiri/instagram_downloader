import React from 'react';

export const DescriptionSection = () => {
    return (
        <section className="w-full max-w-6xl mx-auto py-12 px-6 md:px-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-left tracking-tight">
                <span className="text-foreground">How Instagram Downloader </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-orange-400 to-orange-500">
                    Downloads Work
                </span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                    Whether you're looking to archive a memorable reel, secure a copy of an inspiring tutorial, or keep a
                    collection of your favorite moments, our tool provides a seamless solution. InstaSave acts as your
                    personal media archivist, enabling you to extract high-definition content directly to your device
                    for offline viewing, editing, or sharing on your own terms.
                </p>

                <p>
                    While the Instagram app allows for basic bookmarking, it doesn't offer true ownership of the file.
                    Our platform bridges that gap by delivering studio-quality downloads. Perfect for creators building
                    mood boards, educators saving reference material, or anyone who simply wants to keep their favorite
                    visuals accessible without an internet connection. Experience the freedom of having your digital
                    inspiration at your fingertips.
                </p>
            </div>
        </section>
    );
};
