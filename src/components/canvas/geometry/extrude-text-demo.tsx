"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { Text3D, Center } from "@react-three/drei"
import * as THREE from "three"

export function ExtrudeTextDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        text,
        rotate,
        color,
        wireframeColor,
        size,
        height,
        bevelEnabled,
        bevelThickness,
        bevelSize,
        bevelSegments
    } = useControls({
        text: "HELLO",
        rotate: true,
        color: "#696969",
        wireframeColor: "#ffff00",
        size: { value: 2, min: 0.1, max: 10 },
        height: { value: 0.5, min: 0.1, max: 2 },
        bevelEnabled: true,
        bevelThickness: { value: 0.1, min: 0, max: 0.5 },
        bevelSize: { value: 0.05, min: 0, max: 0.5 },
        bevelSegments: { value: 3, min: 1, max: 10, step: 1 }
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
            <Center>
                <mesh castShadow>
                    <Text3D
                        font="/fonts/Roboto.json"
                        size={size}
                        height={height}
                        bevelEnabled={bevelEnabled}
                        bevelThickness={bevelThickness}
                        bevelSize={bevelSize}
                        bevelSegments={bevelSegments}
                    >
                        {text}
                        <meshPhongMaterial color={color} />
                    </Text3D>
                </mesh>

                <mesh>
                    <Text3D
                        font="/fonts/Roboto.json"
                        size={size}
                        height={height}
                        bevelEnabled={bevelEnabled}
                        bevelThickness={bevelThickness}
                        bevelSize={bevelSize}
                        bevelSegments={bevelSegments}
                    >
                        {text}
                        <meshBasicMaterial color={wireframeColor} wireframe />
                    </Text3D>
                </mesh>
            </Center>
            <axesHelper args={[5]} />
        </group>
    )
}
