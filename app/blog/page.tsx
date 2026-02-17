"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link2, Play, ArrowRight, Download, Smartphone, Monitor, ChevronRight } from "lucide-react";
import Link from "next/link";

interface BlogPost {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    color: string;
    slug: string;
}

const blogs: BlogPost[] = [];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-500 flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/5 blur-[120px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/5 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
            </div>

            <Header />

            <main className="flex-grow flex flex-col items-center justify-start w-full relative z-10 px-4 md:px-6 py-12 md:py-20">
                <div className="max-w-6xl mx-auto w-full space-y-12">

                    {/* Hero Section */}
                    <div className="text-center space-y-4 mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
                            Latest Updates
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                            InstaSave <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">Blog</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Tips, tricks, and insights for mastering your social media game.
                        </p>
                    </div>

                    {/* Blog Grid */}
                    {blogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {blogs.map((post, index) => (
                                <Link href={`#`} key={index} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm">
                                    <div className="aspect-video w-full overflow-hidden relative">
                                        <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-md bg-black/30 border border-white/20 uppercase tracking-wide`}>
                                            {post.category}
                                        </div>
                                        {/* Placeholder Image Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 space-y-4">
                                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                                            <span>{post.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/30"></span>
                                            <span>5 min read</span>
                                        </div>
                                        <h2 className="text-2xl font-bold leading-tight group-hover:text-orange-400 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="pt-4 flex items-center text-sm font-medium text-orange-400 group-hover:underline">
                                            Read Article <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <p className="text-muted-foreground text-lg italic">Articles coming soon. Stay tuned!</p>
                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </div>
    );
}

