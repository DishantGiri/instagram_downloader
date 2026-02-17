"use client";


import { Film, Image as ImageIcon, Clapperboard, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
    { id: "video", label: "Video", icon: Film },
    { id: "reels", label: "Reels", icon: Clapperboard },
    { id: "photo", label: "Photo", icon: ImageIcon },
    { id: "story", label: "Story", icon: Layers },
];

interface MediaTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function MediaTabs({ activeTab, onTabChange }: MediaTabsProps) {

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="flex flex-wrap justify-center p-1 bg-background/60 backdrop-blur-md border border-white/10 rounded-xl shadow-sm">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                                isActive
                                    ? "bg-gradient-to-r from-orange-400 to-purple-400 text-white shadow-md shadow-purple-400/20 scale-105"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                            )}
                        >
                            <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-muted-foreground")} />
                            {tab.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
