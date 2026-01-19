"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function ExtrudeHeartDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        rotate,
        color,
        wireframeColor,
        depth,
        bevelEnabled,
        bevelThickness,
        bevelSize,
        bevelSegments
    } = useControls({
        rotate: true,
        color: "#ff0040",
        wireframeColor: "#ffff00",
        depth: { value: 1, min: 0.1, max: 10 },
        bevelEnabled: true,
        bevelThickness: { value: 0.5, min: 0.1, max: 2 },
        bevelSize: { value: 0.5, min: 0.1, max: 2 },
        bevelSegments: { value: 5, min: 1, max: 20, step: 1 }
    })

    const shape = React.useMemo(() => {
        const s = new THREE.Shape()
        const x = -2.5, y = -5
        s.moveTo(x + 2.5, y + 2.5)
        s.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y)
        s.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5)
        s.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5)
        s.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5)
        s.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y)
        s.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5)
        s.closePath()
        return s
    }, [])

    const settings = React.useMemo(() => ({
        depth,
        bevelEnabled,
        bevelThickness,
        bevelSize,
        bevelSegments,
    }), [depth, bevelEnabled, bevelThickness, bevelSize, bevelSegments])

    useFrame(({ clock }) => {
        if (rotate && groupRef.current) {
            const time = clock.getElapsedTime()
            groupRef.current.rotation.x = time * 0.3
            groupRef.current.rotation.y = time * 0.3
        }
    })

    return (
        <group ref={groupRef} scale={0.25} position={[0, 0, 0]}>
            <mesh castShadow>
                <extrudeGeometry args={[shape, settings]} />
                <meshPhongMaterial color={color} side={THREE.DoubleSide} />
            </mesh>
            <mesh>
                <extrudeGeometry args={[shape, settings]} />
                <meshBasicMaterial color={wireframeColor} wireframe />
            </mesh>
            <axesHelper args={[20]} />
        </group>
    )
}
