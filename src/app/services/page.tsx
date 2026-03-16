"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plane, Hotel, Map, Car, ShieldPlus, Briefcase, FileCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
    const { t } = useLanguage();

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
                        {t("services.title")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        {t("services.subtitle")}
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
                                <h3 className="text-2xl font-bold mb-4 font-serif">{t("services.flight_title")}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {t("services.flight_desc")}
                                </p>
                                <Button variant="outline" className="w-full mt-auto">{t("services.book_btn")}</Button>
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
                                <h3 className="text-2xl font-bold mb-4 font-serif">{t("services.hotel_title")}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {t("services.hotel_desc")}
                                </p>
                                <Button variant="outline" className="w-full mt-auto">{t("services.book_btn")}</Button>
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
                                    <ShieldPlus className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">{t("services.insurance_title")}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {t("services.insurance_desc")}
                                </p>
                                <Button variant="outline" className="w-full mt-auto">{t("services.book_btn")}</Button>
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
                                <h3 className="text-2xl font-bold mb-4 font-serif">{t("services.transfer_title")}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {t("services.transfer_desc")}
                                </p>
                                <Button variant="outline" className="w-full mt-auto">{t("services.book_btn")}</Button>
                            </div>
                        </motion.div>

                        {/* Service Item 5 */}
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
                                <h3 className="text-2xl font-bold mb-4 font-serif">{t("services.tour_title")}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {t("services.tour_desc")}
                                </p>
                                <Button variant="outline" className="w-full mt-auto">{t("services.book_btn")}</Button>
                            </div>
                        </motion.div>

                        {/* Service Item 6 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">{t("services.conference_title")}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {t("services.conference_desc")}
                                </p>
                            </div>
                        </motion.div>

                         {/* Service Item 7 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <FileCheck className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">{t("services.visa_title")}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    {t("services.visa_desc")}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-20 text-center">
                        <div className="p-8 bg-primary/5 rounded-2xl border border-primary/20 inline-block max-w-3xl">
                            <h3 className="text-2xl font-bold mb-4 font-serif">{t("services.ready_title")}</h3>
                            <p className="text-muted-foreground mb-6">
                                {t("services.ready_desc")}
                            </p>
                            <Link href="/reservations">
                                <Button variant="premium" size="lg">{t("services.book_btn")}</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
