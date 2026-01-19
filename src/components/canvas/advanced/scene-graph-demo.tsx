"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

const Moon = () => (
    <group>
        <mesh>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="dimgray" />
        </mesh>
        <axesHelper args={[1]} />
    </group>
)

const Earth = () => (
    <group>
        <mesh castShadow receiveShadow>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color="teal" />
        </mesh>
        <axesHelper args={[2]} />
    </group>
)

const Sun = () => (
    <group>
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                emissive="crimson"
                emissiveIntensity={2}
                color="crimson"
            />
        </mesh>
        <pointLight intensity={10} distance={20} color="orange" />
        <axesHelper args={[5]} />
    </group>
)

export function SceneGraphDemo() {
    const sunRef = React.useRef<THREE.Group>(null)
    const earthOrbitRef = React.useRef<THREE.Group>(null)
    const moonOrbitRef = React.useRef<THREE.Group>(null)

    const { sunSpeed, earthSpeed, moonSpeed } = useControls({
        sunSpeed: { value: 0.2, min: 0, max: 2 },
        earthSpeed: { value: 0.8, min: 0, max: 5 },
        moonSpeed: { value: 2, min: 0, max: 10 }
    })

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        if (sunRef.current) sunRef.current.rotation.y = time * sunSpeed
        if (earthOrbitRef.current) earthOrbitRef.current.rotation.y = time * earthSpeed
        if (moonOrbitRef.current) moonOrbitRef.current.rotation.y = time * moonSpeed
    })

    return (
        <group ref={sunRef}>
            <Sun />

            {/* Earth Orbit */}
            <group position={[4, 0, 0]} ref={earthOrbitRef}>
                <Earth />

                {/* Moon Orbit */}
                <group position={[1, 0, 0]} ref={moonOrbitRef}>
                    <Moon />
                </group>
            </group>
        </group>
    )
}
