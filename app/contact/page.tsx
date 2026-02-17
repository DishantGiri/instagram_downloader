"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Clock, AlertCircle, Shield } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-500 flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/5 blur-[120px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/5 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
            </div>

            <Header />

            <main className="flex-grow flex flex-col items-center justify-start w-full relative z-10 px-4 md:px-6 py-12 md:py-20">
                <div className="max-w-4xl mx-auto w-full space-y-12">

                    {/* Hero Section */}
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            We're Here to Help
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Us</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a question, issue, or feature request? We'd love to hear from you.
                        </p>
                    </div>

                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Email Support Card */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 hover:border-pink-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-orange-400/10 text-pink-500 flex items-center justify-center">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Email Support</h3>
                            <a href="mailto:support@instasave.com" className="text-pink-500 hover:underline text-lg font-medium block">
                                support@instasave.com
                            </a>
                            <p className="text-muted-foreground">
                                For general inquiries and technical support
                            </p>
                        </div>

                        {/* Response Time Card */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 hover:border-purple-500/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-purple-400/10 text-purple-500 flex items-center justify-center">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Response Time</h3>
                            <p className="text-lg font-medium text-foreground">
                                Usually within 24–48 hours
                            </p>
                            <p className="text-muted-foreground">
                                We aim to respond to all inquiries as quickly as possible
                            </p>
                        </div>

                    </div>

                    {/* Report an Issue Section */}
                    <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/20 rounded-2xl p-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Report an Issue</h3>
                        </div>

                        <p className="text-muted-foreground">
                            If you encounter problems, please include the following information:
                        </p>

                        <ul className="space-y-3">
                            {[
                                "The link type (Instagram Video, Reel, Story, Photo, etc.)",
                                "Your device + browser (e.g., iPhone 15 - Safari, Windows 11 - Chrome)",
                                "Screenshot of the error (optional but helpful)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                    <span className="text-orange-500 font-bold mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="mailto:support@instasave.com?subject=Issue Report"
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Send Issue Report
                        </a>
                    </div>

                    {/* Copyright / Removal Requests */}
                    <div className="bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-blue-500/20 rounded-2xl p-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">Copyright / Removal Requests</h3>
                        </div>

                        <p className="text-muted-foreground">
                            We take copyright concerns seriously and respond promptly to all valid requests.
                        </p>

                        <a href="mailto:support@instasave.com" className="text-blue-500 hover:underline text-lg font-medium inline-block">
                            support@instasave.com
                        </a>

                        <p className="text-sm text-muted-foreground">
                            Please include the original content URL and proof of ownership in your request.
                        </p>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

