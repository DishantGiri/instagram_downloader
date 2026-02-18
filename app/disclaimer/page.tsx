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
                            <h2 className="text-2xl font-bold text-foreground">Platform Independence</h2>
                            <p>
                                InstaSave operates as an autonomous utility. We maintain no affiliation, sponsorship, or partnership with Instagram, Meta Platforms, Inc., or their associated entities. Use of "Instagram" is solely for descriptive purposes.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Intellectual Property Rights</h2>
                            <p>
                                We fundamentally respect the rights of creators. InstaSave does not host, mirror, or claim rights to any media processed. Ownership resides exclusively with the original content publishers.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Fair Use Policy</h2>
                            <p>
                                Our platform is engineered for personal, archival use. By using this tool, you accept full liability for compliance with:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>International intellectual property regulations</li>
                                <li>Platform-specific Terms of Service</li>
                                <li>Creative Commons licenses</li>
                                <li>Jurisdictional legal statutes</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Copyright Adherence</h2>
                            <p>
                                Redistribution of downloaded material without explicit consent from the copyright holder is strictly discouraged. We condemn any form of digital piracy or copyright infringement.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">No Representations</h2>
                            <p>
                                Services are delivered on an "as-is" basis. We offer no guarantees regarding:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Continuous uptime or availability</li>
                                <li>Fidelity of downloaded assets</li>
                                <li>Cross-platform interoperability</li>
                                <li>Permanence of specific features</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Indemnification</h2>
                            <p>
                                Neither InstaSave nor its developers shall be liable for legal repercussions, data loss, or damages resulting from the use of this utility. User discretion is advised.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Usage Acknowledgment</h2>
                            <p>
                                Continuing to use InstaSave indicates your understanding that you bear sole responsibility for the ethical and legal usage of downloaded content.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">DMCA Protocol</h2>
                            <p>
                                We respond promptly to valid copyright complaints. If you represent a rights holder and believe your content is being mishandled, please direct formal notices to legal@instasave.com.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Updates</h2>
                            <p>
                                This legal text is subject to revision. Please review periodically to stay informed of our liability stances.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

