import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-white">IstPlus Tourism</h3>
                        <p className="text-sm leading-relaxed">
                            Crafting unforgettable visual journeys and premium travel experiences for the discerning explorer.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/reservations" className="hover:text-white transition-colors">Reservations</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Our Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services#tours" className="hover:text-white transition-colors">City Tours</Link></li>
                            <li><Link href="/services#transfers" className="hover:text-white transition-colors">VIP Transfers</Link></li>
                            <li><Link href="/services#hotels" className="hover:text-white transition-colors">Hotel Booking</Link></li>
                            <li><Link href="/services#guides" className="hover:text-white transition-colors">Private Guides</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3">
                                <MapPin size={18} />
                                <span>Istanbul, Turkey</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} />
                                <span>+90 555 123 4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} />
                                <span>info@istplustourism.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} IstPlus Tourism. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
