import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-background mt-auto relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-14 h-14 flex items-center justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="InstaSave Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-xl font-bold tracking-tighter flex items-center gap-1">
                                <span className="text-foreground">Insta</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">Save</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Fast, free, and easy way to download Instagram videos without watermarks.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                            <li><Link href="/guide" className="hover:text-orange-400 transition-colors">How to Download (Guide)</Link></li>
                            <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                            <li><Link href="/#faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-orange-400 transition-colors">Disclaimer</Link></li>
                            <li><Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Support</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/#faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
                            <li><Link href="/guide" className="hover:text-orange-400 transition-colors">How It Works</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Get Help</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Report a Problem / Report Abuse</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Disclaimer */}
                <div className="pt-8 border-t border-white/5">
                    <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-5xl mx-auto">
                        InstaSave is a public, link-based downloader for publicly accessible content. We do not host videos. No login required. Download only content you own or have permission to use. Not affiliated with Instagram or Meta Platforms Ltd.
                    </p>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                        &copy; {new Date().getFullYear()} InstaSave. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
