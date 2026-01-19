"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function PlaneDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        width,
        height,
        widthSegments,
        heightSegments,
        color,
        wireframeColor,
        rotate
    } = useControls({
        width: { value: 2, min: 0.1, max: 10 },
        height: { value: 2, min: 0.1, max: 10 },
        widthSegments: { value: 1, min: 1, max: 128, step: 1 },
        heightSegments: { value: 1, min: 1, max: 128, step: 1 },
        color: "#696969",
        wireframeColor: "#ffff00",
        rotate: true,
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
            <mesh castShadow>
                <planeGeometry args={[width, height, widthSegments, heightSegments]} />
                <meshPhongMaterial color={color} side={THREE.DoubleSide} />
            </mesh>
            <mesh>
                <planeGeometry args={[width, height, widthSegments, heightSegments]} />
                <meshBasicMaterial color={wireframeColor} wireframe />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
