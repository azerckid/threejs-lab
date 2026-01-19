"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function MeshPhongDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        color,
        emissive,
        specular,
        shininess,
        flatShading,
        wireframe,
        rotate
    } = useControls({
        color: "#008080",
        emissive: "#000000",
        specular: "#ffff00",
        shininess: { value: 30, min: 0, max: 100 },
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
                <meshPhongMaterial
                    color={color}
                    emissive={emissive}
                    specular={specular}
                    shininess={shininess}
                    flatShading={flatShading}
                    wireframe={wireframe}
                />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial
                    color={color}
                    emissive={emissive}
                    specular={specular}
                    shininess={shininess}
                    flatShading={flatShading}
                    wireframe={wireframe}
                />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
