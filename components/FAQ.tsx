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
            question: "Is using InstaSave actually free?",
            answer: "Completely. We believe in open access. There are no paywalls, hidden subscriptions, or premium tiers. Enjoy unlimited downloads for free, forever."
        },
        {
            question: "Is an Instagram account required?",
            answer: "Not at all. We operate independently. You simply need the public link to the content you wish to save. No login credentials are ever requested or stored."
        },
        {
            question: "Can I save content from private profiles?",
            answer: "Our tool maintains strict compliance with privacy standards. Therefore, we can only process content that has been publicly shared by the creator."
        },
        {
            question: "How secure is this platform?",
            answer: "Your security is paramount. Our architecture runs entirely on the client-side for the safest experience. We do not track your IP or maintain a history of your downloads."
        },
        {
            question: "Where do my files go after downloading?",
            answer: "Files usually land in your device's default 'Downloads' directory. On mobile, check your 'Files' app or Photo Gallery depending on your system configuration."
        },
        {
            question: "Which media formats are supported?",
            answer: "We ensure top-tier compatibility, delivering MP4 files for video content and maintaining the highest available resolution for images (JPG/PNG), exactly as they were uploaded."
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
