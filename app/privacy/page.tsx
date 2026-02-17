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
                            <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
                            <p>
                                InstaSave is designed with privacy in mind. We do not require user registration or login. We do not collect, store, or track personal information about our users.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">2. Usage Data</h2>
                            <p>
                                We may collect anonymous usage statistics to improve our service, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>General geographic location (country level)</li>
                                <li>Pages visited and features used</li>
                            </ul>
                            <p>This data is aggregated and cannot be used to identify individual users.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">3. Download History</h2>
                            <p>
                                We do not store your download history. All downloads are processed in real-time and no record is kept on our servers.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">4. Cookies</h2>
                            <p>
                                We use minimal cookies necessary for the website to function properly. These cookies do not track personal information and are used solely for technical purposes such as maintaining your theme preference.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">5. Third-Party Services</h2>
                            <p>
                                Our service may use third-party analytics tools to understand usage patterns. These services have their own privacy policies governing the use of your information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">6. Data Security</h2>
                            <p>
                                We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of data. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">7. Children's Privacy</h2>
                            <p>
                                Our service is not directed to children under 13. We do not knowingly collect information from children under 13.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">8. Changes to Privacy Policy</h2>
                            <p>
                                We may update this privacy policy from time to time. We will notify users of any material changes by posting the new policy on this page.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">9. Contact Us</h2>
                            <p>
                                If you have questions about this privacy policy, please contact us at support@instasave.com
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

