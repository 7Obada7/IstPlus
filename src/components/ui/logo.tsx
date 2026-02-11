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
                IST<span className="text-primary">PLUS</span>
            </span>
        </Link>
    );
}
