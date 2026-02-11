import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./button";

export function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Logo />
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                        About Us
                    </Link>
                    <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
                        Services
                    </Link>
                    <Link href="/reservations">
                        <Button variant="premium" size="sm">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
