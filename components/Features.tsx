import { Rocket, Shield, Video, Smartphone, Layers, UserCheck } from "lucide-react";

const features = [
    {
        icon: Rocket,
        title: "High Speed",
        description: "Our optimized servers ensure your downloads start instantly with maximum bandwidth.",
        color: "text-orange-400",
        bgColor: "bg-orange-400/10",
    },
    {
        icon: Shield,
        title: "Privacy Focused",
        description: "We don't store your history or collected data. Your activity is completely anonymous.",
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
    },
    {
        icon: UserCheck,
        title: "No Login Required",
        description: "Skip the hassle. Download public content without logging into your Instagram account.",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Video,
        title: "Original Quality",
        description: "Get the exact file quality uploaded by the creator. No re-encoding or compression.",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        icon: Smartphone,
        title: "Mobile Optimized",
        description: "Works perfectly on any device - iPhone, Android, Tablet, or Desktop.", // Updated from original prompt
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: Layers,
        title: "Multi-Format",
        description: "Support for Reels, Videos, Photos, and even IGTV content in a single tool.",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
    },
];

export function Features() {
    return (
        <section id="features" className="w-full max-w-6xl mx-auto px-6 md:px-12 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-purple-400 to-blue-500 mb-6">
                    Why Choose InstaSave?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    We combine cutting-edge technology with a seamless user experience to bring you the best downloader on the web.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group p-8 rounded-3xl bg-background/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
