import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground transition-colors duration-500 flex flex-col">
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-400/5 blur-[120px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/5 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
            </div>

            <Header />

            <main className="flex-grow flex flex-col items-center justify-start w-full relative z-10 px-6 md:px-12 py-12 md:py-20">
                <div className="max-w-4xl mx-auto w-full space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                            Terms of <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">Service</span>
                        </h1>
                        <p className="text-muted-foreground">Last updated: February 2026</p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using InstaSave, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">2. Use License</h2>
                            <p>
                                InstaSave grants you a personal, non-exclusive, non-transferable license to use our service for personal, non-commercial purposes only. You may download content from public Instagram accounts for your own personal use.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">3. Restrictions</h2>
                            <p>You are specifically restricted from:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Using our service for any commercial purpose</li>
                                <li>Downloading content from private accounts without authorization</li>
                                <li>Redistributing downloaded content without proper attribution</li>
                                <li>Using downloaded content in violation of copyright laws</li>
                                <li>Attempting to reverse engineer or compromise our service</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
                            <p>
                                All content downloaded through InstaSave remains the property of the original creators. We do not claim ownership of any content. Users are responsible for respecting intellectual property rights and obtaining necessary permissions.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">5. Disclaimer</h2>
                            <p>
                                InstaSave is provided "as is" without any warranties. We do not guarantee uninterrupted service or error-free operation. We are not responsible for any damages arising from the use of our service.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
                            <p>
                                InstaSave shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">7. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

