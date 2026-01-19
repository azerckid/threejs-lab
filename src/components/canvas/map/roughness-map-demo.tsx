"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export function RoughnessMapDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const { roughness, rotate } = useControls({
        roughness: { value: 1, min: 0, max: 1 },
        rotate: true
    })

    const textures = useTexture({
        map: "/textures/Glass_Window_002_basecolor.jpg",
        roughnessMap: "/textures/Glass_Window_002_roughness.jpg",
        normalMap: "/textures/Glass_Window_002_normal.jpg",
    })

    useFrame(({ clock }) => {
        if (rotate && groupRef.current) {
            const time = clock.getElapsedTime()
            groupRef.current.rotation.y = time * 0.2
        }
    })

    return (
        <group ref={groupRef}>
            <mesh position={[-1.2, 0, 0]} castShadow>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial
                    {...textures}
                    roughness={roughness}
                />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    {...textures}
                    roughness={roughness}
                />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
