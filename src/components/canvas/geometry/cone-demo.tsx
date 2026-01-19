"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function ConeDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        radius,
        height,
        radialSegments,
        heightSegments,
        openEnded,
        thetaStart,
        thetaLength,
        color,
        wireframeColor,
        rotate
    } = useControls({
        radius: { value: 1, min: 0.1, max: 5 },
        height: { value: 2, min: 0.1, max: 10 },
        radialSegments: { value: 16, min: 3, max: 128, step: 1 },
        heightSegments: { value: 2, min: 1, max: 128, step: 1 },
        openEnded: false,
        thetaStart: { value: 0, min: 0, max: Math.PI * 2 },
        thetaLength: { value: Math.PI * 2, min: 0, max: Math.PI * 2 },
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
                <coneGeometry args={[radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength]} />
                <meshPhongMaterial color={color} side={THREE.DoubleSide} />
            </mesh>
            <mesh>
                <coneGeometry args={[radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength]} />
                <meshBasicMaterial color={wireframeColor} wireframe />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
