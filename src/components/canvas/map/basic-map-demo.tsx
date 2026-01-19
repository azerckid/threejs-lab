"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export function BasicMapDemo() {
    const groupRef = React.useRef<THREE.Group>(null)

    const {
        repeatX,
        repeatY,
        wrap,
        magFilter,
        rotate
    } = useControls({
        repeatX: { value: 2, min: 1, max: 10, step: 1 },
        repeatY: { value: 2, min: 1, max: 10, step: 1 },
        wrap: {
            options: {
                Repeat: THREE.RepeatWrapping,
                MirroredRepeat: THREE.MirroredRepeatWrapping,
                ClampToEdge: THREE.ClampToEdgeWrapping,
            }
        },
        magFilter: {
            options: {
                Nearest: THREE.NearestFilter,
                Linear: THREE.LinearFilter,
            }
        },
        rotate: true
    })

    const texture = useTexture("/textures/uv_grid_opengl.jpg")

    React.useEffect(() => {
        if (texture) {
            texture.repeat.set(repeatX, repeatY)
            texture.wrapS = wrap
            texture.wrapT = wrap
            texture.magFilter = magFilter
            texture.needsUpdate = true
        }
    }, [texture, repeatX, repeatY, wrap, magFilter])

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
                <meshStandardMaterial map={texture} />
            </mesh>

            <mesh position={[1.2, 0, 0]} castShadow>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={texture} />
            </mesh>
            <axesHelper args={[5]} />
        </group>
    )
}
