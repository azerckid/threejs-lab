"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function MeshPhysicalDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        color,
        emissive,
        roughness,
        metalness,
        clearcoat,
        clearcoatRoughness,
        transmission,
        thickness,
        ior,
        flatShading,
        wireframe,
        rotate
    } = useControls({
        color: "#008080",
        emissive: "#000000",
        roughness: { value: 0.1, min: 0, max: 1 },
        metalness: { value: 0.1, min: 0, max: 1 },
        clearcoat: { value: 1, min: 0, max: 1 },
        clearcoatRoughness: { value: 0, min: 0, max: 1 },
        transmission: { value: 0, min: 0, max: 1 },
        thickness: { value: 0, min: 0, max: 5 },
        ior: { value: 1.5, min: 1, max: 2.33 },
        flatShading: false,
        wireframe: false,
        rotate: true
    })

    useFrame(({ clock }) => {
        if (rotate && groupRef.current) {
            const time = clock.getElapsedTime()
            groupRef.current.rotation.x = time * 0.3
            groupRef.current.rotation.y = time * 0.3
        }
    })

    return (
        <group ref={groupRef}>
            <mesh position={[-1.2, 0, 0]} castShadow>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshPhysicalMaterial
                    color={color}
                    emissive={emissive}
                    roughness={roughness}
                    metalness={metalness}
                    clearcoat={clearcoat}
                    clearcoatRoughness={clearcoatRoughness}
                    transmission={transmission}
                    thickness={thickness}
                    ior={ior}
                    flatShading={flatShading}
                    wireframe={wireframe}
                />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhysicalMaterial
                    color={color}
                    emissive={emissive}
                    roughness={roughness}
                    metalness={metalness}
                    clearcoat={clearcoat}
                    clearcoatRoughness={clearcoatRoughness}
                    transmission={transmission}
                    thickness={thickness}
                    ior={ior}
                    flatShading={flatShading}
                    wireframe={wireframe}
                />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
