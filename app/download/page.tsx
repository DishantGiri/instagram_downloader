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
            <Header />
            <Suspense fallback={<div className="flex-grow flex items-center justify-center p-20"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
                <DownloadClient />
            </Suspense>
            <Footer />
        </div>
    );
}

