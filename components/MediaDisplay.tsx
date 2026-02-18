"use client";

import {
    Download,
    Instagram,
    Film,
    Image as ImageIcon,
    Heart,
    Eye,
    Loader2,
    WifiOff,
} from "lucide-react";
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
    const [error, setError] = useState<string | null>(null);

    const handleDownload = async () => {
        if (!data?.url || downloading) return;

        setDownloading(true);
        setError(null);

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
                throw new Error(
                    errorData.error || "Download failed. Please check your connection."
                );
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            const filename = `instasave_${data.author.replace("@", "")}_${Date.now()}.mp4`;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (err) {
            console.error("Download error:", err);
            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to download video. Please try again."
            );
        } finally {
            setDownloading(false);
        }
    };

    if (loading) {
        return (
            <div className="animate-pulse">
                {/* Skeleton Thumbnail */}
                <div className="w-full aspect-square bg-muted rounded-lg mb-4" />
                {/* Skeleton Content */}
                <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-10 bg-secondary rounded w-full" />
                </div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="space-y-4">
            {/* Media Preview */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-black">
                {data.type === "video" ? (
                    <video
                        src={data.downloadUrl}
                        poster={data.thumbnail}
                        controls
                        controlsList="nodownload"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <>
                        {data.thumbnail ? (
                            <Image
                                src={data.thumbnail}
                                alt={data.title || "Instagram media"}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full bg-muted">
                                <ImageIcon className="w-12 h-12 text-muted-foreground" />
                            </div>
                        )}
                    </>
                )}

                {/* Instagram badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    <Instagram className="w-3 h-3" />
                    <span>Instagram</span>
                </div>
            </div>

            {/* Media Details & Actions */}
            <div className="space-y-3">
                <div>
                    <p className="text-sm text-muted-foreground mb-1">Ready to Download</p>

                    {/* Type badge */}
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        {data.type === "video" ? (
                            <>
                                <Film className="w-3 h-3" />
                                Video
                            </>
                        ) : (
                            <>
                                <ImageIcon className="w-3 h-3" />
                                Photo
                            </>
                        )}
                    </span>
                </div>

                {data.title && (
                    <div className="bg-secondary/30 p-3 rounded-lg max-h-48 overflow-y-auto border border-white/5">
                        <p className="text-sm text-foreground whitespace-pre-wrap break-words">{data.title}</p>
                    </div>
                )}

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-y border-white/10 py-3">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
                            {data.author.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-semibold text-foreground">@{data.author}</span>
                    </div>

                    {data.likes && (
                        <div className="flex items-center gap-1.5 ml-auto bg-red-500/10 text-red-500 px-2 py-1 rounded-md">
                            <Heart className="w-4 h-4 fill-current" />
                            <span className="font-medium">{data.likes}</span>
                        </div>
                    )}

                    {data.views && (
                        <div className="flex items-center gap-1.5 bg-blue-500/10 text-blue-500 px-2 py-1 rounded-md">
                            <Eye className="w-4 h-4" />
                            <span className="font-medium">{data.views}</span>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleDownload}
                    disabled={downloading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                >
                    {downloading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Downloading...
                        </>
                    ) : (
                        <>
                            <Download className="w-4 h-4" />
                            Download Now
                        </>
                    )}
                </button>

                {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-3 py-2 rounded-lg">
                        <WifiOff className="w-4 h-4 mt-0.5 shrink-0" />
                        <div>
                            <p className="font-semibold">Connection Error</p>
                            <p>{error}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}