"use client"

import * as React from "react"
import { useGLTF, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

export function MatildaDemo() {
    const { nodes, materials } = useGLTF("/matilda.glb")

    return (
        <group dispose={null} scale={2} position={[0, -1, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                {Object.entries(nodes).map(([name, node]) => {
                    if (node instanceof THREE.Mesh) {
                        return (
                            <mesh
                                key={name}
                                castShadow
                                receiveShadow
                                geometry={node.geometry}
                                material={materials.surfaceShader1}
                                position={node.position}
                                rotation={node.rotation}
                                scale={node.scale}
                            />
                        )
                    }
                    return null
                })}
            </group>
            <ContactShadows opacity={0.5} scale={10} blur={2} far={10} resolution={256} color="#000000" />
        </group>
    )
}

useGLTF.preload("/matilda.glb")
