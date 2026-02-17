"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Check, Users, Clock, Shield } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-500 flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/5 blur-[120px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/5 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
            </div>

            <Header />

            <main className="flex-grow flex flex-col items-center justify-start w-full relative z-10 px-4 md:px-6 py-12 md:py-20">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Hero Section */}
                    <section className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            About InstaSave
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                            Simplifying Content <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Access</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We believe that saving content for offline viewing should be simple, fast, and free. No hidden fees, no annoying ads, just pure utility.
                        </p>
                    </section>

                    {/* Mission Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1 space-y-6">
                            <h2 className="text-3xl font-bold">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                InstaSave was built with a single goal: to provide the most reliable and user-friendly tool for downloading Instagram content. We understand the frustration of limited connectivity or simply wanting to keep a personal archive of inspiring content.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our team is dedicated to maintaining high-speed servers and constantly updating our algorithms to adapt to platform changes, ensuring you always have access when you need it.
                            </p>

                            <ul className="space-y-3">
                                {["100% Free Forever", "No Registration Needed", "Unlimited Downloads"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 rounded-3xl p-8 border border-white/5 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="bg-background/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center space-y-2 hover:border-pink-500/30 transition-colors">
                                    <Users className="w-8 h-8 mx-auto text-pink-500" />
                                    <div className="text-2xl font-bold">1M+</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Users</div>
                                </div>
                                <div className="bg-background/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center space-y-2 hover:border-purple-500/30 transition-colors">
                                    <Clock className="w-8 h-8 mx-auto text-purple-500" />
                                    <div className="text-2xl font-bold">0.5s</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Avg Speed</div>
                                </div>
                                <div className="col-span-2 bg-background/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center space-y-2 hover:border-indigo-500/30 transition-colors">
                                    <Shield className="w-8 h-8 mx-auto text-indigo-500" />
                                    <div className="text-2xl font-bold">100% Secure</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Privacy First</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-secondary/20 rounded-3xl p-8 md:p-12 text-center space-y-6 border border-white/5">
                        <h2 className="text-3xl font-bold">Get In Touch</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Have questions, suggestions, or encountered a bug? We'd love to hear from you. Our support team is always ready to help.
                        </p>
                        <a href="mailto:support@instasave.com" className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-6 py-3 rounded-full font-bold transition-transform hover:scale-105">
                            <Mail className="w-4 h-4" />
                            Contact Support
                        </a>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

