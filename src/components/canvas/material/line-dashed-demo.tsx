"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

const Line = "line" as any

export function LineDashedDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const { color, dashSize, gapSize, scale, rotate } = useControls({
        color: "#ffff00",
        dashSize: { value: 0.5, min: 0.1, max: 2 },
        gapSize: { value: 0.2, min: 0.1, max: 2 },
        scale: { value: 1, min: 0.1, max: 10 },
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
            <Line onUpdate={(line: any) => line.computeLineDistances()}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <lineDashedMaterial
                    color={color}
                    dashSize={dashSize}
                    gapSize={gapSize}
                    scale={scale}
                />
            </Line>

            <lineLoop position={[3, 0, 0]} onUpdate={(line) => line.computeLineDistances()}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <lineDashedMaterial
                    color={color}
                    dashSize={dashSize}
                    gapSize={gapSize}
                    scale={scale}
                />
            </lineLoop>

            <lineSegments position={[-3, 0, 0]} onUpdate={(line) => line.computeLineDistances()}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <lineDashedMaterial
                    color={color}
                    dashSize={dashSize}
                    gapSize={gapSize}
                    scale={scale}
                />
            </lineSegments>

            <axesHelper args={[5]} />
        </group>
    )
}
