"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./button";
import { useLanguage, SupportedLanguage } from "@/context/LanguageContext";

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Logo />
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                        {t("nav.home")}
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                        {t("nav.about")}
                    </Link>
                    <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
                        {t("nav.services")}
                    </Link>
                    
                    <select 
                        value={language} 
                        onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                        className="bg-transparent text-sm font-medium border-none outline-none cursor-pointer focus:ring-0"
                    >
                        <option value="en">English</option>
                        <option value="tr">Türkçe</option>
                        <option value="ar">العربية</option>
                    </select>

                    <Link href="/reservations">
                        <Button variant="premium" size="sm">
                            {t("nav.packages")}
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
