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
                            <h2 className="text-2xl font-bold text-foreground">1. Protocol Agreement</h2>
                            <p>
                                Accessing InstaSave signifies your voluntary agreement to these stipulations. If you dissent from any portion of these terms, you are advised to discontinue use immediately.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">2. Grant of License</h2>
                            <p>
                                We extend a revocable, non-exclusive license for you to utilize InstaSave for private, non-commercial archiving. This privilege is limited to content sourced from publicly accessible profiles.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">3. Prohibited Conduct</h2>
                            <p>Users are strictly forbidden from:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Exploiting the service for commercial gain or revenue generation</li>
                                <li>Circumventing privacy controls to access restricted content</li>
                                <li>Distributing copyrighted material without explicit authorization</li>
                                <li>Engaging in reverse engineering or infrastructure attacks</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">4. Intellectual Rights</h2>
                            <p>
                                InstaSave acts solely as a conduit. We claim no ownership over the media processed. The original creators retain full copyright and ownership. Users maintain the burden of ensuring their usage aligns with intellectual property laws.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">5. Service Warranty</h2>
                            <p>
                                This tool is offered on an "as-available" basis. We disclaim all warranties, express or implied, regarding uptime, speed, or specific fitness for a particular purpose.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">6. Liability Limitations</h2>
                            <p>
                                Under no circumstances shall InstaSave be held accountable for incidental or consequential damages arising from the utilization or inability to utilize our platform.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">7. Terms Modification</h2>
                            <p>
                                We retain the authority to revise these terms at our discretion. Continued interaction with the site post-modification implies acceptance of the revised protocols.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

