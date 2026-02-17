"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden mb-4 transition-all duration-300 hover:border-orange-400/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg font-medium text-foreground group-hover:text-orange-400 transition-colors">
                    {question}
                </span>
                <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-orange-400/10 text-orange-400' : 'bg-white/5 text-muted-foreground group-hover:bg-orange-400/10 group-hover:text-orange-400'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export function FAQ() {
    const faqs = [
        {
            question: "Is InstaSave completely free?",
            answer: "Yes! InstaSave is 100% free to use. You can download as many Instagram videos, reels, and photos as you like without any hidden charges or subscription fees."
        },
        {
            question: "Do I need to log in to my Instagram account?",
            answer: "No, you do not need to log in. We value your privacy and security. Simply paste the link to the public Instagram post you want to download, and our tool handles the rest anonymously."
        },
        {
            question: "Can I download from private accounts?",
            answer: "Currently, InstaSave supports downloading content only from public Instagram accounts. We respect user privacy settings on the platform."
        },
        {
            question: "Is it safe to use this downloader?",
            answer: "Absolutely. Our service is clean, secure, and does not require you to install any software or extensions. We do not store your download history or personal data."
        },
        {
            question: "Where are the videos saved on my device?",
            answer: "Downloads are usually saved in the 'Downloads' folder on your PC or Mac. On mobile devices (Android/iOS), they will appear in your 'Files' app or directly in your Gallery/Photos app depending on your browser settings."
        },
        {
            question: "What file formats do you support?",
            answer: "We support high-quality MP4 for videos and reels, and high-resolution JPG for photos. We always aim to provide the original quality uploaded by the creator."
        }
    ];

    return (
        <section id="faq" className="w-full max-w-6xl mx-auto px-6 md:px-12 py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black mb-6">
                    Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">Questions</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Everything you need to know about downloading content with InstaSave.
                </p>
            </div>

            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
}
