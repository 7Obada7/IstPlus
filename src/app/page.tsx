"use client";

// Direct import for SVG/CSS component is fine, or dynamic with ssr: true if beneficial
// But simple components are better standard imported to avoid flicker
import { ParallaxMountainScene } from "@/components/ParallaxMountainScene";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
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
                        Discover the <span className="text-primary-foreground">Extraordinary</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-white max-w-2xl mb-8 drop-shadow-md font-medium"
                    >
                        Your gateway to premium travel experiences. We craft unforgettable journeys for the discerning traveler.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex gap-4 pointer-events-auto"
                    >
                        <Link href="/reservations">
                            <Button variant="premium" size="lg" className="text-lg px-8 shadow-lg">
                                Start Your Journey
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg">
                                Learn More
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
                            Why Choose IstPlus?
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
                            We define excellence in tourism with our comprehensive services and attention to detail.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Global Destinations",
                                description: "Access to exclusive resorts and hidden gems worldwide.",
                                icon: "🌍"
                            },
                            {
                                title: "Premium Flights",
                                description: "Luxury air travel arrangements with top-tier airlines.",
                                icon: "✈️"
                            },
                            {
                                title: "24/7 Support",
                                description: "Dedicated concierge service throughout your journey.",
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
