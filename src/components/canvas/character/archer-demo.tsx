"use client"

import * as React from "react"
import { useGLTF, useAnimations, ContactShadows } from "@react-three/drei"
import { useControls } from "leva"
import * as THREE from "three"

export function ArcherDemo() {
    const group = React.useRef<THREE.Group>(null)
    const { nodes, materials, animations } = useGLTF("/archer.glb")
    const { actions, names } = useAnimations(animations, group)

    const { action } = useControls({
        action: {
            options: names,
            defaultValue: names.includes("walking") ? "walking" : names[0]
        }
    })

    React.useEffect(() => {
        const currentAction = actions[action]
        if (currentAction) {
            currentAction.reset().fadeIn(0.5).play()
            return () => {
                currentAction.fadeOut(0.5)
            }
        }
    }, [action, actions])

    return (
        <group ref={group} dispose={null} scale={1.5} position={[0, -1.5, 0]}>
            <group rotation={[0, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <primitive object={nodes.Hips} />
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Erika_Archer_Body_Mesh as THREE.SkinnedMesh).geometry}
                        material={materials.Body_MAT}
                        skeleton={(nodes.Erika_Archer_Body_Mesh as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Erika_Archer_Clothes_Mesh as THREE.SkinnedMesh).geometry}
                        material={materials.Akai_MAT}
                        skeleton={(nodes.Erika_Archer_Clothes_Mesh as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Erika_Archer_Eyelashes_Mesh as THREE.SkinnedMesh).geometry}
                        material={materials.Lashes_MAT}
                        skeleton={(nodes.Erika_Archer_Eyelashes_Mesh as THREE.SkinnedMesh).skeleton}
                    />
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        geometry={(nodes.Erika_Archer_Eyes_Mesh as THREE.SkinnedMesh).geometry}
                        material={materials.EyeSpec_MAT}
                        skeleton={(nodes.Erika_Archer_Eyes_Mesh as THREE.SkinnedMesh).skeleton}
                    />
                </group>
            </group>
            <ContactShadows opacity={0.4} scale={10} blur={2.4} far={10} resolution={256} color="#000000" />
        </group>
    )
}

useGLTF.preload("/archer.glb")
