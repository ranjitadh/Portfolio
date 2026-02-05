'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingParticles() {
    const particlesRef = useRef<THREE.Points>(null);

    const [positions, colors] = useMemo(() => {
        const positionsArray = new Float32Array(6000);
        const colorsArray = new Float32Array(6000);

        for (let i = 0; i < 2000; i++) {
            const i3 = i * 3;
            positionsArray[i3] = (Math.random() - 0.5) * 20;
            positionsArray[i3 + 1] = (Math.random() - 0.5) * 20;
            positionsArray[i3 + 2] = (Math.random() - 0.5) * 20;

            const color = new THREE.Color();
            color.setHSL(Math.random() * 0.2 + 0.7, 1, 0.5);
            colorsArray[i3] = color.r;
            colorsArray[i3 + 1] = color.g;
            colorsArray[i3 + 2] = color.b;
        }

        return [positionsArray, colorsArray];
    }, []);

    useFrame((state) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
            particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={2000}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={2000}
                    array={colors}
                    itemSize={3}
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}
