import { DashboardLayout } from "@/components/dashboard-layout"
import { TutorialPageLayout } from "@/components/tutorial-page-layout"
import { BaseCanvas } from "@/components/canvas/base-canvas"
import { BoxDemo } from "@/components/canvas/geometry/box-demo"

const BOX_CODE = `"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function BoxDemo() {
  const meshRef = React.useRef<THREE.Mesh>(null)
  const groupRef = React.useRef<THREE.Group>(null)

  const { width, height, depth, color, wireframeColor, rotate } = useControls({
    width: { value: 1, min: 0.1, max: 5 },
    height: { value: 1, min: 0.1, max: 5 },
    depth: { value: 1, min: 0.1, max: 5 },
    color: "#696969",
    wireframeColor: "#ffff00",
    rotate: true,
  })

  useFrame(({ clock }) => {
    if (rotate && groupRef.current) {
      const time = clock.getElapsedTime()
      groupRef.current.rotation.x = time * 0.3
      groupRef.current.rotation.y = time * 0.3
      groupRef.current.rotation.z = time * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshPhongMaterial color={color} />
      </mesh>
      <mesh>
        <boxGeometry args={[width, height, depth, 2, 2, 2]} />
        <meshBasicMaterial color={wireframeColor} wireframe />
      </mesh>
      <axesHelper args={[5]} />
    </group>
  )
}"`

export default function BoxPage() {
    return (
        <DashboardLayout>
            <TutorialPageLayout
                title="Box Geometry"
                description="가장 기본적인 3차원 육면체 형상입니다. 가로, 세로, 높이 및 분할 수를 조절할 수 있습니다."
                code={BOX_CODE}
            >
                <BaseCanvas>
                    <BoxDemo />
                </BaseCanvas>
            </TutorialPageLayout>
        </DashboardLayout>
    )
}
