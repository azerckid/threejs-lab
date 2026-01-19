"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export function NormalMapDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const { normalScale, rotate } = useControls({
        normalScale: { value: 1, min: 0, max: 5 },
        rotate: true
    })

    const textures = useTexture({
        map: "/textures/Glass_Window_002_basecolor.jpg",
        normalMap: "/textures/Glass_Window_002_normal.jpg",
        roughnessMap: "/textures/Glass_Window_002_roughness.jpg",
    })

    // Optional: Repeat texture if needed
    // React.useEffect(() => {
    //   Object.values(textures).forEach(t => {
    //     t.wrapS = t.wrapT = THREE.RepeatWrapping
    //     t.repeat.set(1, 1)
    //   })
    // }, [textures])

    useFrame(({ clock }) => {
        if (rotate && groupRef.current) {
            const time = clock.getElapsedTime()
            groupRef.current.rotation.y = time * 0.2
        }
    })

    return (
        <group ref={groupRef}>
            <mesh position={[-1.2, 0, 0]} castShadow>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial
                    {...textures}
                    normalScale={new THREE.Vector2(normalScale, normalScale)}
                />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    {...textures}
                    normalScale={new THREE.Vector2(normalScale, normalScale)}
                />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
