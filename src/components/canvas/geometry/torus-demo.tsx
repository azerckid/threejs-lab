"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function TorusDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        radius,
        tube,
        radialSegments,
        tubularSegments,
        arc,
        color,
        wireframeColor,
        rotate
    } = useControls({
        radius: { value: 1, min: 0.1, max: 5 },
        tube: { value: 0.4, min: 0.1, max: 2 },
        radialSegments: { value: 16, min: 2, max: 128, step: 1 },
        tubularSegments: { value: 100, min: 3, max: 256, step: 1 },
        arc: { value: Math.PI * 2, min: 0, max: Math.PI * 2 },
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
                <torusGeometry args={[radius, tube, radialSegments, tubularSegments, arc]} />
                <meshPhongMaterial color={color} />
            </mesh>
            <mesh>
                <torusGeometry args={[radius, tube, radialSegments, tubularSegments, arc]} />
                <meshBasicMaterial color={wireframeColor} wireframe />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
