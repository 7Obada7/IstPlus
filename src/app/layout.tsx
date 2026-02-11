import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "IstPlus Tourism | Premium Travel Experiences",
    description: "Experience the world with IstPlus Tourism. Luxury travel, seamless reservations, and unforgettable journeys.",
};

import { Footer } from "@/components/Footer";

// ... existing imports

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, playfair.variable)}>
                <Navbar />
                <main className="pt-16 min-h-[calc(100vh-64px)]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
