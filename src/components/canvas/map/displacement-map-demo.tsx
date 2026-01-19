"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export function DisplacementMapDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const { displacementScale, displacementBias, wireframe, rotate } = useControls({
        displacementScale: { value: 0.2, min: 0, max: 2 },
        displacementBias: { value: -0.15, min: -1, max: 1 },
        wireframe: false,
        rotate: true
    })

    const textures = useTexture({
        map: "/textures/Glass_Window_002_basecolor.jpg",
        displacementMap: "/textures/Glass_Window_002_height.png",
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
                <boxGeometry args={[1.5, 1.5, 1.5, 128, 128, 128]} />
                <meshStandardMaterial
                    {...textures}
                    displacementScale={displacementScale}
                    displacementBias={displacementBias}
                    wireframe={wireframe}
                />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 256, 256]} />
                <meshStandardMaterial
                    {...textures}
                    displacementScale={displacementScale}
                    displacementBias={displacementBias}
                    wireframe={wireframe}
                />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
