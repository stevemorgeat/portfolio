'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Un mesh = géométrie + matériau. Sans lumière, le MeshStandardMaterial reste noir.
function Knot() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <torusKnotGeometry args={[1, 0.32, 180, 28]} />
      <meshStandardMaterial color="#1f8a5b" roughness={0.35} metalness={0.15} />
    </mesh>
  )
}

// Le <Canvas> crée pour nous la scène, la caméra, le renderer et la boucle de rendu.
export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} intensity={1.6} />
      <Knot />
      <OrbitControls autoRotate autoRotateSpeed={1.4} enablePan={false} enableZoom={false} />
    </Canvas>
  )
}
