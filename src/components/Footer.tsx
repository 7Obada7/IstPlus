"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-white">IstPlus Tourism</h3>
                        <p className="text-sm leading-relaxed">
                            {t("footer.brand_desc")}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">{t("footer.quick_links")}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-white transition-colors">{t("nav.home")}</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">{t("nav.about")}</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">{t("nav.services")}</Link></li>
                            <li><Link href="/packages" className="hover:text-white transition-colors">{t("nav.packages")}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">{t("footer.our_services")}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="hover:text-white transition-colors">{t("services.flight_title")}</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">{t("services.hotel_title")}</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">{t("services.insurance_title")}</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">{t("services.transfer_title")}</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">{t("services.tour_title")}</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">{t("services.conference_title")}</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">{t("services.visa_title")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">{t("footer.contact_us")}</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <MapPin size={18} className="shrink-0" />
                                <span>Balabanağa, Büyük Reşitpaşa Cd, 34000 Laleli/İstanbul</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="shrink-0" />
                                <span>+90 542 146 15 21 / +90 507 167 15 21</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} />
                                <span>info@istplustourism.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
                </div>
            </div>
        </footer>
    );
}
