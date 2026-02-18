import { Copy, ClipboardPaste, Download } from "lucide-react";

export function HowToUse() {
    return (
        <section id="how-to-use" className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-24 text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent -z-10 h-64 w-full bottom-0"></div>

            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-16 inline-block">
                How to Download
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="group relative p-8 rounded-3xl bg-background/40 backdrop-blur-md border border-white/10 hover:bg-background/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-black text-primary select-none pointer-events-none">1</div>
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Copy className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Grab the Link</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Navigate to the Instagram post you want to keep. Tap the share options and select 'Copy Link'.
                    </p>
                </div>

                <div className="group relative p-8 rounded-3xl bg-background/40 backdrop-blur-md border border-white/10 hover:bg-background/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-400/5 delay-100">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-black text-purple-400 select-none pointer-events-none">2</div>
                    <div className="w-16 h-16 mx-auto bg-purple-400/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:bg-purple-400 group-hover:text-white transition-all duration-300">
                        <ClipboardPaste className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Insert & Analyze</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Paste the URL into our search bar above and let our engine instantly process the media details.
                    </p>
                </div>

                <div className="group relative p-8 rounded-3xl bg-background/40 backdrop-blur-md border border-white/10 hover:bg-background/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/5 delay-200">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-black text-blue-500 select-none pointer-events-none">3</div>
                    <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <Download className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Download & Keep</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Review the preview and hit 'Download' to secure the file in high definition on your device.
                    </p>
                </div>
            </div>
        </section>
    );
}
