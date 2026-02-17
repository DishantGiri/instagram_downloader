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
                <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4" />
                {/* Skeleton Content */}
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-10 bg-gray-200 rounded w-full" />
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
                        src={data.url}
                        poster={data.thumbnail}
                        controls
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
                            <div className="flex items-center justify-center w-full h-full bg-gray-100">
                                <ImageIcon className="w-12 h-12 text-gray-400" />
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
                    <p className="text-sm text-gray-500 mb-1">Ready to Download</p>

                    {/* Type badge */}
                    <span className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
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
                    <p className="text-sm text-gray-800 line-clamp-2">{data.title}</p>
                )}

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="font-medium">{data.author}</span>

                    {data.likes && (
                        <span className="flex items-center gap-1">
                            <Heart className="w-3.5 h-3.5 text-red-500" />
                            {data.likes}
                        </span>
                    )}

                    {data.views && (
                        <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-blue-500" />
                            {data.views}
                        </span>
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