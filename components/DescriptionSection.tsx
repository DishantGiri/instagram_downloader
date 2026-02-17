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
                    When someone wants to save Instagram videos, they are usually looking for a quick way to save a funny reel,
                    or a tutorial or slideshow on their phone or computer. Instagram Downloader acts as a smart Instagram saver that
                    allows you to download high-quality content, so you are left with a clean video you can watch, edit, or share whenever you like.
                </p>

                <p>
                    You can still save specific posts within the Instagram app, but Instagram Downloader gives you an upgraded option:
                    a high-quality file saved directly to your device. This is perfect for building your own collection of
                    favorite clips—whether that is reels, stories, comedy skits, or educational content—while keeping visuals
                    crisp and accessible offline.
                </p>
            </div>
        </section>
    );
};
