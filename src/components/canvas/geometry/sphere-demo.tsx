"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function SphereDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        radius,
        widthSegments,
        heightSegments,
        phiStart,
        phiLength,
        thetaStart,
        thetaLength,
        color,
        wireframeColor,
        rotate
    } = useControls({
        radius: { value: 1, min: 0.1, max: 5 },
        widthSegments: { value: 32, min: 3, max: 128, step: 1 },
        heightSegments: { value: 32, min: 2, max: 128, step: 1 },
        phiStart: { value: 0, min: 0, max: Math.PI * 2 },
        phiLength: { value: Math.PI * 2, min: 0, max: Math.PI * 2 },
        thetaStart: { value: 0, min: 0, max: Math.PI },
        thetaLength: { value: Math.PI, min: 0, max: Math.PI },
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
                <sphereGeometry args={[radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]} />
                <meshPhongMaterial color={color} />
            </mesh>
            <mesh>
                <sphereGeometry args={[radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]} />
                <meshBasicMaterial color={wireframeColor} wireframe />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
