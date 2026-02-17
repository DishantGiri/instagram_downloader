import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function DisclaimerPage() {
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
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">Disclaimer</span>
                        </h1>
                        <p className="text-muted-foreground">Important Legal Information</p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">General Disclaimer</h2>
                            <p>
                                InstaSave is an independent third-party tool and is not affiliated with, endorsed by, or sponsored by Instagram, Meta Platforms, Inc., or any of their subsidiaries or affiliates.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Content Ownership</h2>
                            <p>
                                All content downloaded through InstaSave remains the intellectual property of the original creators and copyright holders. We do not host, store, or claim ownership of any content processed through our service.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Personal Use Only</h2>
                            <p>
                                This service is intended for personal, non-commercial use only. Users are solely responsible for ensuring their use of downloaded content complies with:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Copyright laws and intellectual property rights</li>
                                <li>Instagram's Terms of Service</li>
                                <li>Creator rights and permissions</li>
                                <li>Applicable local, national, and international laws</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Copyright Compliance</h2>
                            <p>
                                Users must respect creator rights and copyright laws. Downloading and redistributing content without proper authorization may violate copyright laws. InstaSave does not encourage or condone copyright infringement.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">No Warranty</h2>
                            <p>
                                InstaSave is provided "as is" without warranties of any kind, either express or implied. We do not guarantee:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Uninterrupted or error-free service</li>
                                <li>Accuracy or reliability of downloaded content</li>
                                <li>Compatibility with all devices or browsers</li>
                                <li>Availability of specific content or features</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
                            <p>
                                InstaSave and its operators shall not be held liable for any damages, losses, or legal consequences arising from:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Use or misuse of our service</li>
                                <li>Copyright infringement by users</li>
                                <li>Technical errors or service interruptions</li>
                                <li>Loss of data or content</li>
                                <li>Any legal action taken against users</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">User Responsibility</h2>
                            <p>
                                By using InstaSave, you acknowledge that you are solely responsible for your actions and any consequences that may arise from downloading and using content through our service.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">DMCA Compliance</h2>
                            <p>
                                We respect intellectual property rights and respond to valid DMCA takedown notices. If you believe your copyrighted work has been infringed, please contact us at support@instasave.com with detailed information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Changes to Disclaimer</h2>
                            <p>
                                We reserve the right to modify this disclaimer at any time. Continued use of the service after changes constitutes acceptance of the updated disclaimer.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

