"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export function AOMapDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const { aoMapIntensity, rotate } = useControls({
        aoMapIntensity: { value: 1, min: 0, max: 5 },
        rotate: true
    })

    const textures = useTexture({
        map: "/textures/Glass_Window_002_basecolor.jpg",
        aoMap: "/textures/Glass_Window_002_ambientOcclusion.jpg",
        normalMap: "/textures/Glass_Window_002_normal.jpg",
        roughnessMap: "/textures/Glass_Window_002_roughness.jpg",
    })

    // Set the second UV channel for AO map if needed
    // In modern Three.js, aoMap often uses the second UV channel (uv2)
    React.useEffect(() => {
        if (groupRef.current) {
            groupRef.current.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    const geometry = child.geometry
                    if (!geometry.attributes.uv2) {
                        geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2))
                    }
                }
            })
        }
    }, [textures])

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
                    aoMapIntensity={aoMapIntensity}
                />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    {...textures}
                    aoMapIntensity={aoMapIntensity}
                />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
