"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, Environment, Float, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Airplane() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            // Gentle floating motion is handled by Float, added extra subtle roll
            group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        }
    });

    return (
        <group ref={group}>
            {/* Fuselage */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <capsuleGeometry args={[0.8, 4, 4, 16]} />
                <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Cockpit Window */}
            <mesh position={[0.5, 0.5, 0]}>
                <boxGeometry args={[1.5, 0.7, 0.9]} />
                <meshStandardMaterial color="#222" roughness={0.1} metalness={0.9} />
            </mesh>

            {/* Main Wings */}
            <mesh position={[0.2, -0.2, 0]}>
                <boxGeometry args={[1.5, 0.1, 8]} />
                <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Tail Fin */}
            <mesh position={[-1.8, 0.8, 0]} rotation={[0, 0, -0.5]}>
                <boxGeometry args={[1.2, 0.1, 2]} />
                <meshStandardMaterial color="#D4AF37" roughness={0.3} metalness={0.5} />
            </mesh>

            {/* Tail Wings */}
            <mesh position={[-1.8, 0, 0]}>
                <boxGeometry args={[1, 0.1, 3]} />
                <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Propeller (Visual only, simple) */}
            <mesh position={[2.1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.1, 0.1, 0.5]} />
                <meshStandardMaterial color="#555" />
            </mesh>

        </group>
    );
}

function CloudLayer() {
    const clouds = useMemo(() => {
        return new Array(5).fill(0).map((_, i) => ({
            position: [
                Math.random() * 20 - 10,
                Math.random() * 5 - 2, // Keep them somewhat level with plane
                Math.random() * 20 - 10
            ] as [number, number, number],
            scale: 0.5 + Math.random() * 0.5,
            speed: 0.2 + Math.random() * 0.3
        }));
    }, []);

    const group = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (group.current) {
            // Move clouds backward to simulate forward flight
            group.current.children.forEach((cloud, i) => {
                cloud.position.x -= clouds[i].speed * delta * 10;
                if (cloud.position.x < -20) {
                    cloud.position.x = 20;
                }
            })
        }
    });

    return (
        <group ref={group}>
            {clouds.map((data, i) => (
                <group key={i} position={data.position}>
                    <Cloud opacity={0.5} speed={0.4} segments={20} bounds={[10, 2, 2]} />
                </group>
            ))}
        </group>
    );
}

export function PeacefulSkyScene() {
    return (
        <div className="h-full w-full absolute inset-0">
            <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                {/* Solid Sky Blue Background - Guaranteed to be visible */}
                <color attach="background" args={['#87CEEB']} />

                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* Stars for a bit of detail, but no Sky component which might be causing issues */}
                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={0.5} />

                {/* Airplane with gentle float */}
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <Airplane />
                </Float>

                {/* Moving Clouds */}
                <CloudLayer />
            </Canvas>
        </div>
    );
}
