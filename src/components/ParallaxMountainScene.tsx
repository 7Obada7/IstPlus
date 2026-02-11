"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ParallaxMountainScene() {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-sky-300">
            {/* Realistic Background Image with Ken Burns Effect */}
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=2600&auto=format&fit=crop"
                    alt="Dramatic aerial view of clouds and sky"
                    className="object-cover w-full h-full opacity-90"
                />
            </motion.div>

            {/* Atmospheric Overlay - Gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

            {/* Subtle Mist/Cloud Overlay for depth */}
            <motion.div
                animate={{ x: ["5%", "-5%"] }}
                transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="absolute bottom-0 w-[120%] h-1/2 bg-gradient-to-t from-white/10 to-transparent blur-3xl z-10 pointer-events-none"
            />

            {/* Floating Particles/Dust motes for atmosphere */}
            <ParticleLayer />

            {/* White gradient blend at the bottom */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white via-white/50 to-transparent z-20 pointer-events-none" />
        </div>
    );
}

function ParticleLayer() {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate random particles only on client-side to avoid hydration mismatch
        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        y: [0, -100],
                        x: [0, (Math.random() - 0.5) * 50] // Animation values can be random on client without issue if keyframes
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                />
            ))}
        </div>
    )
}
