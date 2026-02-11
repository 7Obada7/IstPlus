"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plane, Hotel, Map, Car, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-zinc-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white font-serif mb-4"
                    >
                        Premium Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Comprehensive travel solutions designed for the discerning traveler.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Service Item 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Plane className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">Flight Reservations</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    Experience seamless connectivity with our premium flight booking service. We handle everything from first-class commercial tickets to private jet charters, ensuring your journey is as comfortable as it is efficient.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Private Jet Charter
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> First & Business Class
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Global Lounge Access
                                    </li>
                                </ul>
                                <Button variant="outline" className="w-full">Book a Flight</Button>
                            </div>
                        </motion.div>

                        {/* Service Item 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Hotel className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">Luxury Accommodation</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    Unlock the doors to the world's most exclusive hotels, resorts, and private villas. Our partnership with leading hospitality brands guarantees VIP treatment, room upgrades, and special amenities.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> 5-Star Hotels & Resorts
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Private Villas
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Exclusive Upgrades
                                    </li>
                                </ul>
                                <Button variant="outline" className="w-full">Find a Hotel</Button>
                            </div>
                        </motion.div>

                        {/* Service Item 3 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Map className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">Bespoke Tours</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    Discover destinations like never before with our curated tours. Whether you seek cultural immersion, culinary delights, or adrenaline-pumping adventures, we design itineraries that match your passions.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Private Guides
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Yacht Charters
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Cultural Experiences
                                    </li>
                                </ul>
                                <Button variant="outline" className="w-full">Plan a Tour</Button>
                            </div>
                        </motion.div>

                        {/* Service Item 4 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Car className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">VIP Transfers</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    Arrive in style with our network of luxury vehicles and chauffeurs. From airport pickups to city transfers, we ensure smooth and secure transportation throughout your trip.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Luxury Sedans & SUVs
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> Helicopter Transfers
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-4 h-4 text-primary" /> 24/7 Availability
                                    </li>
                                </ul>
                                <Button variant="outline" className="w-full">Book a Transfer</Button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-20 text-center">
                        <div className="p-8 bg-primary/5 rounded-2xl border border-primary/20 inline-block max-w-3xl">
                            <h3 className="text-2xl font-bold mb-4 font-serif">Ready to start your journey?</h3>
                            <p className="text-muted-foreground mb-6">
                                Contact our specialized reservation team to discuss your travel plans.
                            </p>
                            <Link href="/reservations">
                                <Button variant="premium" size="lg">Contact Concierge</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
