"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export function AlphaMapDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const { opacity, rotate } = useControls({
        opacity: { value: 1, min: 0, max: 1 },
        rotate: true
    })

    const textures = useTexture({
        map: "/textures/Glass_Window_002_basecolor.jpg",
        alphaMap: "/textures/Glass_Window_002_opacity.jpg",
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
                    transparent={true}
                    opacity={opacity}
                    side={THREE.DoubleSide}
                />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    {...textures}
                    transparent={true}
                    opacity={opacity}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
