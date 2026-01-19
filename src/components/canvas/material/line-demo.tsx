"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

const Line = "line" as any

export function LineDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const { color, rotate } = useControls({
        color: "#ffff00",
        rotate: true
    })

    const positions = React.useMemo(() => {
        return new Float32Array([-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0])
    }, [])

    useFrame(({ clock }) => {
        if (rotate && groupRef.current) {
            const time = clock.getElapsedTime()
            groupRef.current.rotation.y = time * 0.3
        }
    })

    return (
        <group ref={groupRef}>
            {/* Basic Line */}
            <Line position={[0, 0, 0]}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color={color} />
            </Line>

            {/* Line Loop */}
            <lineLoop position={[3, 0, 0]}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color={color} />
            </lineLoop>

            {/* Line Segments */}
            <lineSegments position={[-3, 0, 0]}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color={color} />
            </lineSegments>

            <axesHelper args={[5]} />
        </group>
    )
}
