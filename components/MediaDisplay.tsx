"use client";

import { Download, Instagram, Film, Image as ImageIcon, Heart, Eye, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface MediaData {
    thumbnail: string;
    title: string;
    author: string;
    likes: string;
    views: string;
    downloadUrl: string;
    type: string;
    url: string;
}

interface MediaDisplayProps {
    data: MediaData | null;
    loading: boolean;
}

export function MediaDisplay({ data, loading }: MediaDisplayProps) {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = async () => {
        if (!data?.url || downloading) return;

        setDownloading(true);
        try {
            const response = await fetch("/api/download", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: data.url }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || "Download failed. Please check your connection.");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;

            // Try to extract a filename or use a default
            const filename = `instasave_${data.author.replace("@", "")}_${Date.now()}.mp4`;
            a.download = filename;

            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error("Download error:", error);
            alert("Failed to download video. Please try again.");
        } finally {
            setDownloading(false);
        }
    };

    if (loading) {
        return (
            <div className="w-full max-w-4xl mx-auto px-4 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="bg-background/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:min-h-[600px]">
                    {/* Skeleton Thumbnail */}
                    <div className="md:w-[40%] w-full h-[450px] md:h-auto bg-muted/50 animate-pulse relative">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                            <Instagram className="w-24 h-24 opacity-20" />
                        </div>
                    </div>

                    {/* Skeleton Content */}
                    <div className="p-8 md:w-[60%] w-full flex flex-col justify-between space-y-6">
                        <div className="space-y-4 w-full">
                            <div className="h-4 bg-muted/50 rounded-full w-20 animate-pulse"></div>
                            <div className="h-8 bg-muted/50 rounded-lg w-full animate-pulse"></div>
                            <div className="h-8 bg-muted/50 rounded-lg w-3/4 animate-pulse delay-75"></div>
                            <div className="flex gap-4 pt-2">
                                <div className="h-4 bg-muted/50 rounded-full w-24 animate-pulse delay-100"></div>
                                <div className="h-4 bg-muted/50 rounded-full w-24 animate-pulse delay-150"></div>
                            </div>
                        </div>

                        <div className="space-y-3 w-full pt-4">
                            <div className="h-14 bg-muted/50 rounded-xl w-full animate-pulse delay-200"></div>
                            <div className="h-14 bg-muted/30 rounded-xl w-full animate-pulse delay-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-background/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:min-h-[600px] ring-1 ring-black/5 transaction-all hover:shadow-primary/10 hover:border-primary/20">

                {/* Media Preview */}
                <div className="md:w-[40%] w-full relative h-[450px] md:h-auto bg-black dark:bg-black/98 group overflow-hidden border-r border-white/5">
                    {data.type === 'video' ? (
                        <video
                            src={data.downloadUrl || undefined}
                            poster={data.thumbnail || undefined}
                            controls
                            playsInline
                            controlsList="nodownload"
                            className="w-full h-full object-contain relative z-10 [overflow:hidden] [&::-webkit-media-controls-enclosure]:overflow-hidden [&::-webkit-media-controls-panel]:overflow-hidden [&::-webkit-media-controls-overflow-button]:hidden"
                        />
                    ) : (
                        <>
                            {data.thumbnail ? (
                                <Image
                                    src={data.thumbnail}
                                    alt="Media Thumbnail"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                    <ImageIcon className="w-12 h-12" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                    <ImageIcon className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </>
                    )}

                    <div className="absolute top-4 left-4 pointer-events-none">
                        <span className="px-3 py-1 text-xs font-bold bg-black/60 text-white backdrop-blur-md rounded-full border border-white/10 flex items-center gap-1.5 uppercase tracking-wider shadow-sm">
                            <Instagram className="w-3 h-3" />
                            Instagram
                        </span>
                    </div>
                </div>

                {/* Media Details & Actions */}
                <div className="p-8 md:w-[60%] w-full flex flex-col justify-between text-left relative bg-gradient-to-br from-background/50 to-background/80">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                Ready to Download
                            </div>
                            {data.type === 'video' ? (
                                <span className="text-muted-foreground text-xs font-mono border border-input px-2 py-0.5 rounded-md text-orange-400">Video</span>
                            ) : (
                                <span className="text-muted-foreground text-xs font-mono border border-input px-2 py-0.5 rounded-md text-purple-400">Photo</span>
                            )}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 line-clamp-2 leading-tight tracking-tight">
                            {data.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="font-medium text-foreground flex items-center gap-1.5">
                                <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-400 to-purple-400 p-[1.5px]">
                                    <span className="block w-full h-full bg-background rounded-full overflow-hidden flex items-center justify-center">
                                        <Instagram className="w-3 h-3 text-muted-foreground" />
                                    </span>
                                </span>
                                {data.author}
                            </span>
                            {data.likes && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                                    <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> {data.likes}</span>
                                </>
                            )}
                            {data.views && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {data.views}</span>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={handleDownload}
                            disabled={downloading}
                            className="flex items-center justify-center w-full py-4 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 group/btn disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {downloading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Downloading...
                                </>
                            ) : (
                                <>
                                    <Download className="w-5 h-5 mr-2 transition-transform group-hover/btn:-translate-y-1 group-active/btn:translate-y-0" />
                                    Download Now
                                </>
                            )}
                        </button>
                        <button className="flex items-center justify-center w-full py-4 px-4 bg-background border-2 border-primary/20 hover:border-primary/50 text-foreground font-semibold rounded-xl hover:bg-accent/50 transition-colors">
                            Save to Device
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
