import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Bounds, Center, Html, useGLTF } from '@react-three/drei'
import { asset } from '../../asset'

const School = () => {
  const { scene } = useGLTF(asset('school.glb'), true)
  return <primitive object={scene} />
}

export const Model3D = () => (
  <Canvas camera={{ position: [8, 5, 10], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }} style={{ height: '100%', width: '100%', background: 'transparent' }}>
    <ambientLight intensity={1} />
    <directionalLight position={[8, 12, 6]} intensity={1.5} />
    <Suspense fallback={<Html center style={{ color: '#1f8a5b', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>Chargement du modèle 3D…</Html>}>
      <Bounds fit clip observe margin={1.2}>
        <Center>
          <School />
        </Center>
      </Bounds>
    </Suspense>
    <OrbitControls autoRotate autoRotateSpeed={0.8} enablePan={false} makeDefault />
  </Canvas>
)
