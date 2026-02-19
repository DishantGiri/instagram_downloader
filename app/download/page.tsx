import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Download - InstaSave',
    description: 'Download your Instagram media.',
};

import DownloadClient from './DownloadClient'; // Client Component
import { Suspense } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-500 overflow-x-hidden flex flex-col">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute inset-0 z-0 opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/10 blur-[120px] rounded-full animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
                </div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Header removed for custom download page layout - handled in DownloadClient or intentionally omitted */}
                <Suspense fallback={<div className="flex-grow flex items-center justify-center p-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
                    <DownloadClient />
                </Suspense>
            </div>
        </div>
    );
}

