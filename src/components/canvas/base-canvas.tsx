"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei"
import { Suspense } from "react"

interface BaseCanvasProps {
    children: React.ReactNode
    cameraPosition?: [number, number, number]
    orbitControls?: boolean
}

export function BaseCanvas({
    children,
    cameraPosition = [5, 5, 5],
    orbitControls = true
}: BaseCanvasProps) {
    return (
        <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
            {orbitControls && <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />}

            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <Suspense fallback={null}>
                {children}
                <Environment preset="city" />
                <ContactShadows
                    position={[0, -1, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2}
                    far={4}
                />
            </Suspense>

            <color attach="background" args={["#09090b"]} />
        </Canvas>
    )
}
