"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export function PointsDemo() {
    const pointsRef = React.useRef<THREE.Points>(null)

    const { count, size, color, sizeAttenuation, rotate } = useControls({
        count: { value: 5000, min: 100, max: 20000, step: 100 },
        size: { value: 0.1, min: 0.01, max: 1 },
        color: "#ffff00",
        sizeAttenuation: true,
        rotate: true
    })

    const discTexture = useTexture("/textures/disc.png")

    const positions = React.useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count * 3; i++) {
            pos[i] = (Math.random() - 0.5) * 10
        }
        return pos
    }, [count])

    useFrame(({ clock }) => {
        if (rotate && pointsRef.current) {
            const time = clock.getElapsedTime()
            pointsRef.current.rotation.y = time * 0.1
            pointsRef.current.rotation.x = time * 0.05
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={size}
                color={color}
                map={discTexture}
                transparent={true}
                alphaTest={0.5}
                sizeAttenuation={sizeAttenuation}
            />
        </points>
    )
}
