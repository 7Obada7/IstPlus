"use client";

// Direct import for SVG/CSS component is fine, or dynamic with ssr: true if beneficial
// But simple components are better standard imported to avoid flicker
import { ParallaxMountainScene } from "@/components/ParallaxMountainScene";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] w-full overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[#87CEEB]">
                    <ParallaxMountainScene />
                </div>

                {/* Overlay for text readability */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-background/90" />

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-wide drop-shadow-md"
                    >
                        {t("home.hero_title_1")} <span className="text-primary-foreground">{t("home.hero_title_2")}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-white max-w-2xl mb-8 drop-shadow-md font-medium"
                    >
                        {t("home.hero_subtitle")}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex gap-4 pointer-events-auto"
                    >
                        <Link href="/reservations">
                            <Button variant="premium" size="lg" className="text-lg px-8 shadow-lg">
                                {t("home.start_journey")}
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg">
                                {t("home.learn_more")}
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services / About Teaser */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-bold mb-4 font-serif"
                        >
                            {t("home.why_choose_title")}
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 bg-primary mx-auto"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
                        >
                            {t("home.why_choose_subtitle")}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: t("home.feature_1_title"),
                                description: t("home.feature_1_desc"),
                                icon: "🌍"
                            },
                            {
                                title: t("home.feature_2_title"),
                                description: t("home.feature_2_desc"),
                                icon: "✈️"
                            },
                            {
                                title: t("home.feature_3_title"),
                                description: t("home.feature_3_desc"),
                                icon: "🛎️"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-card border border-border/50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:border-primary/50 group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
