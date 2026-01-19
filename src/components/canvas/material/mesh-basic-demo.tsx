"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function MeshBasicDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        color,
        wireframe,
        opacity,
        transparent,
        side,
        rotate
    } = useControls({
        color: "#008080",
        wireframe: false,
        opacity: { value: 1, min: 0, max: 1 },
        transparent: false,
        side: {
            options: {
                FrontSide: THREE.FrontSide,
                BackSide: THREE.BackSide,
                DoubleSide: THREE.DoubleSide
            }
        },
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
                <meshBasicMaterial
                    color={color}
                    wireframe={wireframe}
                    opacity={opacity}
                    transparent={transparent}
                    side={side as THREE.Side}
                />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial
                    color={color}
                    wireframe={wireframe}
                    opacity={opacity}
                    transparent={transparent}
                    side={side as THREE.Side}
                />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
