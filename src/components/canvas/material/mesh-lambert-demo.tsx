"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function MeshLambertDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        color,
        emissive,
        emissiveIntensity,
        wireframe,
        rotate
    } = useControls({
        color: "#008080",
        emissive: "#000000",
        emissiveIntensity: { value: 0.5, min: 0, max: 1 },
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
                <meshLambertMaterial
                    color={color}
                    emissive={emissive}
                    emissiveIntensity={emissiveIntensity}
                    wireframe={wireframe}
                />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 32, 32]} />
                <meshLambertMaterial
                    color={color}
                    emissive={emissive}
                    emissiveIntensity={emissiveIntensity}
                    wireframe={wireframe}
                />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
