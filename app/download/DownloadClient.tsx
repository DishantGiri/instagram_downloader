"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Heart, FileVideo } from "lucide-react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
import { useTheme } from "next-themes";

interface MediaData {
    thumbnail: string;
    title: string;
    author: string;
    likes: string;
    views: string;
    downloadUrl: string;
    type: string;
    url: string;
    size: string;
}



export default function DownloadClient() {
    const searchParams = useSearchParams();
    const url = searchParams.get("url");
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<MediaData | null>(null);
    const [error, setError] = useState("");
    const [isDownloading, setIsDownloading] = useState(false);

    // Video Control State
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const { theme } = useTheme();

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            setProgress((current / duration) * 100);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

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


    const [quality, setQuality] = useState<'hd' | 'standard'>('hd');

    // Function to handle Enter key in search input
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const input = e.currentTarget;
            if (input.value) {
                router.push(`/download?url=${encodeURIComponent(input.value)}`);
            }
        }
    };

    const calculateStandardSize = (sizeStr: string) => {
        if (!sizeStr || sizeStr === "Unknown") return "Unknown";
        const num = parseFloat(sizeStr);
        if (isNaN(num)) return sizeStr;
        return `${(num * 0.6).toFixed(1)} MB`;
    };

    return (
        <div
            className="flex-grow flex flex-col w-full relative z-10 min-h-screen bg-background text-foreground selection:bg-green-500 selection:text-black transition-colors duration-500"
        >


            {/* Custom Header */}
            <header className="w-full p-6 flex flex-col md:flex-row items-center justify-between gap-4 z-50 relative">
                <button
                    onClick={() => router.push('/')}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-bold uppercase tracking-wider"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Search
                </button>

                <div className="relative w-full md:w-[500px] group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" /></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Paste another Instagram link here..."
                        className="w-full bg-secondary/50 border border-border rounded-full py-3 pl-12 pr-32 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-500 transition-colors"
                        onKeyDown={handleSearch}
                    />
                    <button className="absolute right-1 top-1 bottom-1 bg-green-500 hover:bg-green-400 text-black font-bold text-xs px-6 rounded-full transition-colors uppercase">
                        Download
                    </button>
                </div>
            </header>

            <main className="flex-grow flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 py-12 gap-12 md:gap-24">

                {/* Left Column - Details & Actions */}
                <div className="flex-1 w-full max-w-2xl space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-700 self-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-wider">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        Video Verified
                    </div>

                    {/* Heading */}
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.85]">
                            Ready to<br />
                            <span className="text-purple-500">Download?</span>
                        </h1>
                        {data?.title && (
                            <p className="text-muted-foreground text-sm md:text-base font-medium line-clamp-3 max-w-lg leading-relaxed">
                                {data.title}
                            </p>
                        )}
                    </div>

                    {/* Quality Selection */}
                    <div className="space-y-4">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Select Format & Quality</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Ultra HD Card */}
                            <button
                                onClick={() => setQuality('hd')}
                                className={`relative px-6 py-4 rounded-[2rem] border-2 text-left transition-all duration-300 group flex items-center gap-4 ${quality === 'hd'
                                    ? 'bg-card border-[#4ff0b7] shadow-[0_0_20px_rgba(79,240,183,0.15)] ring-1 ring-[#4ff0b7]'
                                    : 'bg-card border-border hover:bg-accent'
                                    }`}
                            >
                                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${quality === 'hd' ? 'bg-[#4ff0b7] text-black' : 'bg-muted text-muted-foreground'}`}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z" /></svg>
                                </div>
                                <div className="space-y-0.5">
                                    <h3 className="font-bold text-foreground text-lg">Ultra HD</h3>
                                    <p className="text-[10px] text-muted-foreground font-medium tracking-wide">HIGH QUALITY • MP4</p>
                                    <p className="text-xs text-[#4ff0b7] font-bold">{data?.size || "Unknown"}</p>
                                </div>
                            </button>

                            {/* Standard Card */}
                            <button
                                onClick={() => setQuality('standard')}
                                className={`relative px-6 py-4 rounded-[2rem] border-2 text-left transition-all duration-300 group flex items-center gap-4 ${quality === 'standard'
                                    ? 'bg-card border-[#4ff0b7] shadow-[0_0_20px_rgba(79,240,183,0.15)] ring-1 ring-[#4ff0b7]'
                                    : 'bg-card border-border hover:bg-accent'
                                    }`}
                            >
                                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${quality === 'standard' ? 'bg-[#4ff0b7] text-black' : 'bg-muted text-muted-foreground'}`}>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" /></svg>
                                </div>
                                <div className="space-y-0.5">
                                    <h3 className="font-bold text-foreground text-lg">Standard</h3>
                                    <p className="text-[10px] text-muted-foreground font-medium tracking-wide">FAST DOWNLOAD • MP4</p>
                                    <p className="text-xs text-[#4ff0b7] font-bold">{calculateStandardSize(data?.size || "")}</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Note */}
                    <div className="bg-muted/50 border border-border p-3 rounded-lg">
                        <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
                            <span className="font-bold text-foreground">NOTE:</span> For personal use only. We do not host content. Respect creator rights and copyright laws.
                        </p>
                    </div>

                    {/* Main Download Button */}

                    <button
                        disabled={isDownloading}
                        onClick={async () => {
                            if (!data?.downloadUrl) return;
                            setIsDownloading(true);
                            try {
                                const response = await fetch(data.downloadUrl);
                                const blob = await response.blob();
                                const url = window.URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.style.display = 'none';
                                a.href = url;
                                a.download = `instasave_${data.author || 'video'}.mp4`;
                                document.body.appendChild(a);
                                a.click();
                                window.URL.revokeObjectURL(url);
                                document.body.removeChild(a);
                            } catch (e) {
                                console.error("Download failed:", e);
                                window.open(data.downloadUrl, '_blank');
                            } finally {
                                setIsDownloading(false);
                            }
                        }}
                        className={`group w-full bg-green-500 hover:bg-green-400 text-black text-lg font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:scale-[1.01] ${isDownloading ? 'opacity-80 cursor-wait' : ''}`}
                    >
                        {isDownloading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                DOWNLOADING...
                            </>
                        ) : (
                            <>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                DOWNLOAD VIDEO
                            </>
                        )}
                    </button>

                    {error && (
                        <p className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded">{error}</p>
                    )}
                </div>

                {/* Right Column - Phone Mockup */}
                <div className="relative flex-shrink-0 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200 shadow-2xl shadow-green-500/10">
                    {/* Shadow/Glow */}
                    <div className="absolute inset-0 bg-purple-500/10 blur-[80px] rounded-full opacity-40"></div>

                    {/* Phone Frame */}
                    <div className="relative w-[285px] h-[600px] bg-black rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-inner overflow-hidden ring-1 ring-white/5">

                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
                            {loading ? (
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">Loading...</span>
                                </div>
                            ) : data ? (
                                <div className="relative w-full h-full group">
                                    {data.type === 'video' ? (
                                        <>
                                            <video
                                                ref={videoRef}
                                                src={data.downloadUrl}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                muted={isMuted}
                                                loop
                                                playsInline
                                                onTimeUpdate={handleTimeUpdate}
                                                onEnded={() => setIsPlaying(false)}
                                                onPlay={() => setIsPlaying(true)}
                                                onPause={() => setIsPlaying(false)}
                                            />

                                            {/* Top Controls Overlay */}
                                            <div className="absolute top-6 left-5 right-5 flex justify-between items-start z-30">
                                                <div className="flex gap-2">
                                                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                                        <FileVideo className="w-3 h-3 text-[#4ff0b7]" />
                                                        <span className="text-[10px] font-bold text-white tracking-wide">HD</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                                        <span className="text-[10px] font-bold text-white tracking-wide">{data?.size || "Unknown"}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={toggleMute}
                                                    className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/60 transition-colors"
                                                >
                                                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
                                                </button>
                                            </div>

                                            {/* Bottom Controls Overlay */}
                                            <div className="absolute bottom-6 left-5 right-5 z-30 flex flex-col gap-3">
                                                {/* Progress Bar */}
                                                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                                                    const rect = e.currentTarget.getBoundingClientRect();
                                                    const x = e.clientX - rect.left;
                                                    const percentage = x / rect.width;
                                                    if (videoRef.current) {
                                                        videoRef.current.currentTime = percentage * videoRef.current.duration;
                                                    }
                                                }}>
                                                    <div
                                                        className="h-full bg-[#4ff0b7] rounded-full relative"
                                                        style={{ width: `${progress}%` }}
                                                    >
                                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#4ff0b7] rounded-full shadow-[0_0_10px_#4ff0b7] scale-0 group-hover:scale-100 transition-transform"></div>
                                                    </div>
                                                </div>

                                                {/* Buttons Row */}
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            onClick={togglePlay}
                                                            className="text-white hover:text-[#4ff0b7] transition-colors"
                                                        >
                                                            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                                                        </button>
                                                        <span className="text-xs font-medium text-white/90 tabular-nums tracking-wide">
                                                            {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(videoRef.current?.duration || 0)}
                                                        </span>
                                                    </div>
                                                    <button className="text-pink-500 hover:scale-110 transition-transform">
                                                        <Heart className="w-5 h-5 fill-current" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Gradient for legibility */}
                                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-20"></div>
                                            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-20"></div>
                                        </>
                                    ) : (
                                        <Image src={data.thumbnail} alt="Preview" fill className="object-cover" />
                                    )}
                                </div>
                            ) : (
                                <div className="text-gray-700 text-xs font-medium">Preview</div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

