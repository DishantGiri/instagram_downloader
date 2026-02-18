"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MediaDisplay } from "@/components/MediaDisplay";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

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

export default function DownloadClient() {
    const searchParams = useSearchParams();
    const url = searchParams.get("url");
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<MediaData | null>(null);
    const [error, setError] = useState("");

    const fetchMedia = async (mediaUrl: string) => {
        setLoading(true);
        setError("");
        setData(null);

        try {
            const response = await fetch("/api/fetch-media", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: mediaUrl }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to fetch media");
            }

            setData(result);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url) {
            fetchMedia(url);
        }
    }, [url]);


    return (
        <div className="flex-grow flex flex-col items-center justify-start w-full relative z-10 min-h-[60vh] pt-12 md:pt-20">

            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
                {data?.thumbnail ? (
                    <div className="absolute inset-0 z-0 animate-in fade-in duration-1000">
                        <div className="absolute inset-0 bg-background/40 z-10" />
                        <Image
                            src={data.thumbnail}
                            alt="Background Ambience"
                            fill
                            className="object-cover opacity-60 blur-[100px] scale-125 saturate-150"
                            priority
                            unoptimized
                        />
                    </div>
                ) : (
                    <div className="absolute inset-0 z-0 opacity-100 transition-opacity duration-1000">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/10 blur-[120px] rounded-full animate-pulse-slow"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
                    </div>
                )}
            </div>

            <div className="w-full max-w-4xl mx-auto px-4 z-20 mb-6">
                <button
                    onClick={() => router.push('/')}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group bg-background/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5 hover:bg-white/10"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </button>
            </div>

            {loading && (
                <div className="relative z-20 flex flex-col items-center mt-20">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-muted-foreground animate-pulse">Analyzing media...</p>
                </div>
            )}

            {error && (
                <div className="w-full max-w-md px-4 mt-8 animate-in fade-in slide-in-from-top-2 duration-300 relative z-20">
                    <div className="bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-center font-medium">
                        {error}
                    </div>
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => window.location.reload()}
                            className="text-primary hover:underline text-sm"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}

            {/* Only show display if we have data and not loading */}
            {!loading && data && (
                <div className="relative z-20 w-full mb-12 flex justify-center px-4">
                    <div className="w-full max-w-lg bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 dark:border-white/10 ring-1 ring-white/20">
                        <MediaDisplay data={data} loading={false} />
                    </div>
                </div>
            )}

        </div>
    );
}

