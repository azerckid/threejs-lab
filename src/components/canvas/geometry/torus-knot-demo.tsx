"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function TorusKnotDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        radius,
        tube,
        tubularSegments,
        radialSegments,
        p,
        q,
        color,
        wireframeColor,
        rotate
    } = useControls({
        radius: { value: 1.5, min: 0.1, max: 5 },
        tube: { value: 0.5, min: 0.1, max: 2 },
        tubularSegments: { value: 64, min: 3, max: 256, step: 1 },
        radialSegments: { value: 32, min: 2, max: 128, step: 1 },
        p: { value: 2, min: 1, max: 20, step: 1 },
        q: { value: 3, min: 1, max: 20, step: 1 },
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
                <torusKnotGeometry args={[radius, tube, tubularSegments, radialSegments, p, q]} />
                <meshPhongMaterial color={color} />
            </mesh>
            <mesh>
                <torusKnotGeometry args={[radius, tube, tubularSegments, radialSegments, p, q]} />
                <meshBasicMaterial color={wireframeColor} wireframe />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
