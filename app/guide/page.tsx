"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link2, Play, ArrowRight, Download, Smartphone, Monitor, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
    const steps = [
        {
            id: 1,
            title: "Copy Instagram Link",
            description: "Open the Instagram app or website, find the video, reel, or story you want to download, and tap the 'Share' (paper plane) button. Then select 'Copy Link'.",
            icon: <Link2 className="w-5 h-5" />,
            color: "from-pink-500 to-rose-500"
        },
        {
            id: 2,
            title: "Paste the Link",
            description: "Go to InstaSave.com and paste the copied link into the input box at the top of the page.",
            icon: <Play className="w-5 h-5" />,
            color: "from-rose-500 to-orange-500"
        },
        {
            id: 3,
            title: "Process Video",
            description: "Click the 'Download' button. Our system will analyze the link and generate high-quality download options instantly.",
            icon: <ArrowRight className="w-5 h-5" />,
            color: "from-orange-500 to-amber-500"
        },
        {
            id: 4,
            title: "Download Now",
            description: "Choose your preferred quality and click the 'Download Video' button to save it to your device without watermark.",
            icon: <Download className="w-5 h-5" />,
            color: "from-amber-500 to-yellow-500"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-500 flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/5 blur-[120px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/5 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
            </div>

            <Header />

            <main className="flex-grow flex flex-col items-center justify-start w-full relative z-10 px-4 md:px-6 py-12 md:py-20">

                {/* Hero Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Step-by-Step Guide
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                        How to <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Download Instagrams</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Learn how to use InstaSave to save your favorite videos, reels, and stories in high quality without watermarks.
                    </p>
                </div>

                {/* Steps Section - Vertical Cards */}
                {/* Steps Section - Compact Grid */}
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                    {steps.map((step) => (
                        <div key={step.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 p-5 flex gap-4 items-start">

                            {/* Step Icon */}
                            <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-md`}>
                                {step.icon}
                                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-background flex items-center justify-center font-bold text-xs shadow-sm z-10">
                                    {step.id}
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="flex-grow space-y-1">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Platform Specific Cards */}
                {/* Platform Specific Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mb-16">

                    {/* Mobile Card */}
                    <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md p-6 flex flex-col gap-4 hover:border-pink-500/30 transition-colors duration-300">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                            <div className="w-10 h-10 rounded-lg bg-orange-400/10 text-pink-500 flex items-center justify-center">
                                <Smartphone className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">On Mobile</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "Open Instagram App and find the post.",
                                "Tap share icon and copy link.",
                                "Open Chrome or Safari and visit InstaSave.",
                                "Paste and download directly to Gallery."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="mt-1 w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop Card */}
                    <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md p-6 flex flex-col gap-4 hover:border-purple-500/30 transition-colors duration-300">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-400/10 text-purple-500 flex items-center justify-center">
                                <Monitor className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold">On Desktop</h3>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "Right click on any post to copy link.",
                                "Or copy URL from browser address bar.",
                                "Open InstaSave and paste the URL.",
                                "Save high-quality MP4 files to your drive."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <div className="mt-1 w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* CTA Section */}
                <div className="w-full max-w-4xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-purple-900/50 mb-12 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500"></div>

                    <h2 className="text-3xl md:text-5xl font-black mb-4 relative z-10">Ready to try it out?</h2>
                    <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto relative z-10">
                        Experience the fastest Instagram downloader today. No registration required.
                    </p>

                    <Link href="/" className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 hover:bg-white/90 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl relative z-10">
                        START DOWNLOADING NOW
                        <Download className="w-5 h-5" />
                    </Link>
                </div>

            </main>

            <Footer />
        </div>
    );
}

