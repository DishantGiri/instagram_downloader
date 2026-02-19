"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Heart, FileVideo } from "lucide-react";
import { Footer } from "@/components/Footer";

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
    imageUrls?: string[];
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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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




    const handleDownloadAll = async () => {
        if (!url) return;
        setIsDownloading(true);

        // If it's a single image, just download that one image
        if (data?.imageUrls && data.imageUrls.length === 1) {
            handleDownloadSingle(data.imageUrls[0]);
            return;
        }

        try {
            const response = await fetch("/api/download-all", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ postUrl: url }),
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || "Failed to download from server");
            }
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = `instagram_all_images.zip`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(downloadUrl);
            document.body.removeChild(a);
        } catch (err: any) {
            setError(err.message || "Failed to download all images");
        } finally {
            setIsDownloading(false);
        }
    };

    const handleDownloadSingle = async (imageUrl: string) => {
        setIsDownloading(true);
        try {
            const response = await fetch("/api/download-single", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ imageUrl }),
            });
            if (!response.ok) throw new Error("Failed to download image");
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = `instagram_image.jpg`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(downloadUrl);
            document.body.removeChild(a);
        } catch (err: any) {
            setError(err.message || "Failed to download image");
        } finally {
            setIsDownloading(false);
        }
    };



    return (
        <div
            className="flex-grow flex flex-col w-full relative z-10 text-foreground selection:bg-purple-500 selection:text-white"
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


            </header>

            <main className="flex-grow flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-7xl mx-auto px-6 py-12 gap-12 md:gap-24">

                {/* Left Column - Details & Actions */}
                <div className="flex-1 w-full max-w-2xl space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-700 order-2 md:order-1">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-pink-500/10 border border-pink-500/20 text-pink-500 text-xs font-bold uppercase tracking-wider">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                        Video Verified
                    </div>

                    {/* Heading */}
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.85]">
                            Save<br />
                            <span className="text-purple-500">Media</span>
                        </h1>
                        {data?.title && (
                            <p className="text-muted-foreground text-sm md:text-base font-medium line-clamp-3 max-w-lg leading-relaxed">
                                {data.title}
                            </p>
                        )}
                    </div>



                    {/* Note */}
                    <div className="bg-muted/50 border border-border p-3 rounded-lg">
                        <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
                            <span className="font-bold text-foreground">NOTE:</span> For personal use only. We do not host content. Respect creator rights and copyright laws.
                        </p>
                    </div>

                    {/* Main Download Button */}

                    {/* Main Download Buttons */}
                    <div className="flex flex-col gap-4">
                        {data?.type === 'video' ? (
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
                                className={`group w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white text-lg font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transform hover:scale-[1.01] ${isDownloading ? 'opacity-80 cursor-wait' : ''}`}
                            >
                                {isDownloading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                        ) : (
                            <>
                                <button
                                    disabled={isDownloading}
                                    onClick={handleDownloadAll}
                                    className="group w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white text-lg font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transform hover:scale-[1.01] disabled:opacity-50"
                                >
                                    {isDownloading ? "DOWNLOADING..." :
                                        data?.type === 'video' ? "DOWNLOAD VIDEO" :
                                            data?.imageUrls && data.imageUrls.length > 1 ? "DOWNLOAD ALL IMAGES" :
                                                "DOWNLOAD IMAGE"}
                                </button>
                            </>
                        )}
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded">{error}</p>
                    )}
                </div>

                {/* Right Column - Phone Mockup */}
                <div className="relative flex-shrink-0 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200 shadow-2xl shadow-purple-500/10 order-1 md:order-2">
                    {/* Shadow/Glow */}
                    <div className="absolute inset-0 bg-purple-500/10 blur-[80px] rounded-full opacity-40"></div>

                    {/* Phone Frame */}
                    <div className="relative w-[285px] h-[600px] bg-black rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-inner overflow-hidden ring-1 ring-white/5">

                        {/* Screen Content */}
                        <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
                            {loading ? (
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">Loading...</span>
                                </div>
                            ) : data ? (
                                <div className="relative w-full h-full group">
                                    {data.type === 'video' ? (
                                        <>
                                            <video
                                                ref={videoRef}
                                                src={data.downloadUrl}
                                                poster={data.thumbnail}
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
                                                        <FileVideo className="w-3 h-3 text-purple-400" />
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
                                                        className="h-full bg-purple-500 rounded-full relative"
                                                        style={{ width: `${progress}%` }}
                                                    >
                                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7] scale-0 group-hover:scale-100 transition-transform"></div>
                                                    </div>
                                                </div>

                                                {/* Buttons Row */}
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            onClick={togglePlay}
                                                            className="text-white hover:text-purple-400 transition-colors"
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
                                        <div className="relative w-full h-full group">
                                            {data.imageUrls && data.imageUrls.length > 1 ? (
                                                <>
                                                    <img
                                                        src={`/api/image/proxy?url=${encodeURIComponent(data.imageUrls[currentImageIndex])}`}
                                                        alt={`Image ${currentImageIndex + 1}`}
                                                        className="w-full h-full object-cover transition-opacity duration-300"
                                                    />

                                                    {/* Slider Controls */}
                                                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setCurrentImageIndex(prev => prev > 0 ? prev - 1 : data.imageUrls!.length - 1);
                                                            }}
                                                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setCurrentImageIndex(prev => prev < data.imageUrls!.length - 1 ? prev + 1 : 0);
                                                            }}
                                                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                                        </button>
                                                    </div>

                                                    {/* Dots Indicator */}
                                                    <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5">
                                                        {data.imageUrls.map((_, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/40'}`}
                                                            />
                                                        ))}
                                                    </div>

                                                    {/* Download Button Overlay */}
                                                    <div className="absolute bottom-12 inset-x-0 flex justify-center z-20">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleDownloadSingle(data.imageUrls![currentImageIndex]);
                                                            }}
                                                            className="bg-white/90 hover:bg-white text-black text-xs font-bold py-2 px-4 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm transition-transform active:scale-95 cursor-pointer"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                                            Download Image
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <img
                                                    src={data.thumbnail}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-gray-700 text-xs font-medium">Preview</div>
                            )}
                        </div>
                    </div>
                </div>
            </main >

            <Footer />
        </div >
    );
}

