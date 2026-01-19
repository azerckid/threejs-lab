"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function ShapeDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const { rotate, color, wireframeColor, scale } = useControls({
        rotate: true,
        color: "#696969",
        wireframeColor: "#ffff00",
        scale: { value: 1, min: 0.1, max: 3 }
    })

    const shape = React.useMemo(() => {
        const s = new THREE.Shape()
        s.moveTo(1, 1)
        s.lineTo(1, -1)
        s.lineTo(-1, -1)
        s.lineTo(-1, 1)
        s.closePath()
        return s
    }, [])

    useFrame(({ clock }) => {
        if (rotate && groupRef.current) {
            const time = clock.getElapsedTime()
            groupRef.current.rotation.x = time * 0.3
            groupRef.current.rotation.y = time * 0.3
        }
    })

    return (
        <group ref={groupRef} scale={scale}>
            <mesh castShadow>
                <shapeGeometry args={[shape]} />
                <meshPhongMaterial color={color} side={THREE.DoubleSide} />
            </mesh>
            <mesh>
                <shapeGeometry args={[shape]} />
                <meshBasicMaterial color={wireframeColor} wireframe />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
