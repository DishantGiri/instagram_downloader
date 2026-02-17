"use client";

import { useState } from "react";
import { Loader2, ClipboardPaste, Search, Shield } from "lucide-react";

interface InputAreaProps {
    onAnalyze: (url: string) => void;
    loading: boolean;
    activeTab: string;
}

export function InputArea({ onAnalyze, loading, activeTab }: InputAreaProps) {
    const [url, setUrl] = useState("");
    const [pasteError, setPasteError] = useState(false);

    const handlePaste = async () => {
        setPasteError(false);
        try {
            const text = await navigator.clipboard.readText();
            setUrl(text);
        } catch (err) {
            console.error("Failed to read clipboard contents: ", err);
            setPasteError(true);
            setTimeout(() => setPasteError(false), 3000);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (url.trim()) {
            onAnalyze(url);
        }
    };

    return (
        <section className="w-full max-w-4xl mx-auto px-4 py-6 flex flex-col items-center justify-center text-center">
            <div className="space-y-6 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                    Download Instagram <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-purple-500 animate-gradient-x capitalize">
                        {activeTab === 'video' ? 'Reels & Videos' : activeTab === 'photo' ? 'Photos & Posts' : activeTab === 'story' ? 'Stories & Highlights' : 'Reels & Videos'}
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-normal leading-relaxed">
                    Save high-quality content instantly. No watermarks, no login, completely free.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="relative w-full max-w-2xl group z-10">

                <div className="relative flex flex-col sm:flex-row items-center gap-2 bg-background/60 backdrop-blur-2xl rounded-xl p-2.5 shadow-2xl border border-white/5 ring-1 ring-white/10 dark:ring-white/5">
                    <div className="flex-1 flex items-center w-full px-4 h-14">
                        <Search className="w-5 h-5 text-muted-foreground/50 mr-3" />
                        <input
                            type="text"
                            placeholder="Paste Instagram link here..."
                            className="flex-1 bg-transparent border-none outline-none text-lg placeholder:text-muted-foreground/40 text-foreground w-full font-medium"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        {url && (
                            <button
                                type="button"
                                onClick={() => setUrl("")}
                                className="p-1 hover:bg-white/10 rounded-full text-muted-foreground/50 hover:text-foreground transition-colors cursor-pointer"
                                aria-label="Clear input"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto px-2 sm:px-0 pb-2 sm:pb-0">
                        <button
                            type="button"
                            onClick={handlePaste}
                            className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors w-full sm:w-auto cursor-pointer"
                            title="Paste from clipboard"
                        >
                            <ClipboardPaste className="w-4 h-4" />
                            <span className="sm:hidden">Paste</span>
                        </button>
                        <button
                            type="submit"
                            disabled={loading || !url}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-purple-400 hover:from-orange-300 hover:to-purple-300 text-white font-bold py-3.5 px-8 rounded-lg transition-all shadow-lg shadow-purple-400/25 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto min-w-[120px] active:scale-95 cursor-pointer"
                        >
                            {loading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                "Proceed"
                            )}
                        </button>
                    </div>
                </div>

                {pasteError && (
                    <div className="absolute -bottom-8 left-0 right-0 text-center animate-in fade-in slide-in-from-top-1 duration-200">
                        <span className="text-red-500 text-sm font-medium bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full border border-red-200 dark:border-red-800">
                            Clipboard permission denied. Please paste manually.
                        </span>
                    </div>
                )}
            </form>

            {/* Feature Cards */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                    <div className="text-sm font-semibold text-foreground">Lossless Export</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                    <div className="text-sm font-semibold text-foreground">No Watermarks</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                    <div className="text-sm font-semibold text-foreground">Secure Fetch</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                    <div className="text-sm font-semibold text-foreground">Instant</div>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground max-w-2xl">
                <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <p className="text-center">
                    We only support downloading publicly available content. Please respect copyright laws.
                </p>
            </div>
        </section>
    );
}
