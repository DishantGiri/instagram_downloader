"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { InputArea } from "@/components/InputArea";
import { MediaTabs } from "@/components/MediaTabs";
import { HowToUse } from "@/components/HowToUse";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { DescriptionSection } from "@/components/DescriptionSection";
import { FAQ } from "@/components/FAQ";

// Define the shape of the media data
interface MediaData {
  thumbnail: string;
  title: string;
  author: string;
  likes: string;
  views: string;
  downloadUrl: string;
  type: string;
}

export default function Home() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("video");

  const handleAnalyze = (url: string) => {
    // Encode the URL to ensure special characters don't break the query parameter
    const encodedUrl = encodeURIComponent(url);
    router.push(`/download?url=${encodedUrl}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-500 overflow-x-hidden">

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0 z-0 opacity-100 transition-opacity duration-1000">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/10 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/10 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow flex flex-col items-center justify-start w-full">

          {/* Hero Section - Fits in viewport */}
          <div className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl px-6 md:px-12 flex flex-col items-center space-y-6">
              <MediaTabs activeTab={activeTab} onTabChange={setActiveTab} />
              <InputArea onAnalyze={handleAnalyze} loading={false} activeTab={activeTab} />
            </div>
          </div>

          <DescriptionSection />

          <HowToUse />
          <Features />
          <FAQ />

        </main>

        <Footer />
      </div>
    </div>
  );
}

