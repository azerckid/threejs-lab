"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import * as THREE from "three"

export function CustomDemo() {
    const groupRef = React.useRef<THREE.Group>(null)
    const geomRef = React.useRef<THREE.BufferGeometry>(null)

    const { rotate, color, wireframeColor } = useControls({
        rotate: true,
        color: "#ff0000",
        wireframeColor: "#ffff00"
    })

    // Define custom vertex data
    const positions = React.useMemo(() => new Float32Array([
        -1, -1, 0,
        1, -1, 0,
        -1, 1, 0,
        1, 1, 0
    ]), [])

    const colors = React.useMemo(() => new Float32Array([
        1, 0, 0,
        0, 1, 0,
        0, 0, 1,
        1, 1, 0
    ]), [])

    const indices = React.useMemo(() => new Uint16Array([
        0, 1, 2,
        2, 1, 3
    ]), [])

    useFrame(({ clock }) => {
        if (rotate && groupRef.current) {
            const time = clock.getElapsedTime()
            groupRef.current.rotation.x = time * 0.3
            groupRef.current.rotation.y = time * 0.3
        }
    })

    React.useLayoutEffect(() => {
        if (geomRef.current) {
            geomRef.current.computeVertexNormals()
        }
    }, [positions])

    return (
        <group ref={groupRef}>
            <mesh castShadow>
                <bufferGeometry ref={geomRef}>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        args={[colors, 3]}
                    />
                    <uint16BufferAttribute
                        attach="index"
                        args={[indices, 1]}
                    />
                </bufferGeometry>
                <meshPhongMaterial color={color} vertexColors side={THREE.DoubleSide} />
            </mesh>

            <mesh>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="index"
                        args={[indices, 1]}
                    />
                </bufferGeometry>
                <meshBasicMaterial color={wireframeColor} wireframe />
            </mesh>

            <axesHelper args={[5]} />
        </group>
    )
}
