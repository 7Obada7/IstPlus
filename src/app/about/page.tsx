"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Star, Shield, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-zinc-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white font-serif mb-4"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Redefining the art of travel through meticulous planning and unparalleled service.
                    </motion.p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-foreground">
                                We Are <span className="text-primary">IstPlus Tourism</span>
                            </h2>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                Founded with a passion for excellence, IstPlus Tourism has established itself as a premier provider of luxury travel experiences. We believe that travel is not just about moving from one place to another, but about the moments, the discoveries, and the memories created along the way.
                            </p>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Our team of dedicated concierges and travel experts work tirelessly to ensure that every aspect of your journey is flawless, from the moment you step out your door until you return home.
                            </p>
                            <Link href="/services">
                                <Button variant="outline" className="gap-2">
                                    Explore Our Services <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                                    alt="Luxury Hotel Interior" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border/50 max-w-xs hidden md:block">
                                <p className="text-primary text-4xl font-bold font-serif mb-1">10+</p>
                                <p className="text-sm text-foreground font-medium">Years of Excellence in Luxury Tourism</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Core Values</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Star,
                                title: "Excellence",
                                description: "We accept nothing less than the best, partnering with the world's finest hotels and airlines."
                            },
                            {
                                icon: Users,
                                title: "Personalization",
                                description: "Every journey is tailored to your unique preferences, creating a truly bespoke experience."
                            },
                            {
                                icon: Shield,
                                title: "Integrity",
                                description: "Transparent, honest, and reliable. We build trust through every interaction and booking."
                            }
                        ].map((value, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-background p-8 rounded-xl shadow-sm border border-border/50 text-center hover:border-primary/50 transition-colors"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
