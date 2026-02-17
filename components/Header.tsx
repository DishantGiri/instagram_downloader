"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/guide", label: "How to Use" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/#faq", label: "FAQ" },
    ];

    return (
        <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/5 backdrop-blur-md sticky top-0 bg-background/40 z-50">
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
                <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    <Image
                        src="/logo.png"
                        alt="InstaSave Logo"
                        width={56}
                        height={56}
                        className="object-contain"
                    />
                </div>
                <div className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-1 select-none">
                    <span className="text-foreground">Insta</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">Save</span>
                </div>
            </Link>

            <div className="flex items-center gap-4 md:gap-8">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground/80">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-foreground transition-colors hover:scale-105 transform duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
                    <nav className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
