import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
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
                            Privacy <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">Policy</span>
                        </h1>
                        <p className="text-muted-foreground">Last updated: February 2026</p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">1. Data Minimization</h2>
                            <p>
                                At InstaSave, privacy isn't an afterthought—it's our foundation. We operate on a strict "no-knowledge" basis, meaning we do not mandate accounts, login credentials, or personal identifiers. Your interaction with our tool remains completely anonymous.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">2. Analytics & Improvement</h2>
                            <p>
                                To enhance platform performance, we may aggregate non-identifiable technical data. This helps us optimize load times and server response. This includes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Browser environment specs</li>
                                <li>Device operating system</li>
                                <li>Regional usage patterns (non-specific)</li>
                                <li>Interaction metrics</li>
                            </ul>
                            <p>This information is purely statistical and cannot re-identify any individual user.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">3. Zero-Retention Policy</h2>
                            <p>
                                We do not archive your activity. Once your download is processed and delivered, the link between our server and your session dissolves. We maintain no logs of the content you access.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">4. Local Storage</h2>
                            <p>
                                We utilize local storage (cookies) sparingly, solely to remember your interface preferences (such as light/dark mode). These are stored locally on your device and are never transmitted to external servers.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">5. External Interactions</h2>
                            <p>
                                While we strive for independence, certain analytical tools may be employed to gauge site traffic. These third-party providers operate under their own independent privacy frameworks.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">6. Security Protocols</h2>
                            <p>
                                We deploy industry-standard encryption and security practices to safeguard data transmission. While the digital landscape dictates that absolute security is theoretical, we aggressively mitigate risks to protect your experience.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">7. Age Usage Restrictions</h2>
                            <p>
                                InstaSave is intended for a general audience and is not designed for individuals under the age of 13. We do not knowingly facilitate interaction with minors.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">8. Policy Evolution</h2>
                            <p>
                                As digital standards conform, this policy may adapt. Significant modifications will be transparently communicated via this portal.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">9. Reach Out</h2>
                            <p>
                                For clarifications regarding your privacy rights, please direct inquiries to legal@instasave.com.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

