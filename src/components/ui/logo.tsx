import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <Link href="/" className={cn("flex items-center gap-2", className)}>
            <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                <Image
                    src="/logo.jpg"
                    alt="IstPlus Tourism"
                    fill
                    className="object-cover"
                />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
                IST<span style={{ background: "linear-gradient(180deg, #e8e8e8 0%, #a8a8a8 40%, #d0d0d0 60%, #888 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "drop-shadow(0 0 2px rgba(200,200,200,0.4))" }}>PLUS</span>
            </span>
        </Link>
    );
}
