'use client'
import dynamic from 'next/dynamic'

// Chargé uniquement côté client (ssr:false) : le WebGL ne s'exécute pas au build
// statique, et le code three.js n'est embarqué que sur cette page (code-split).
const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => <div className="three-ph">Chargement de la 3D…</div>,
})

export function ThreeDemo() {
  return (
    <figure className="three-demo">
      <div className="three-canvas">
        <ThreeScene />
      </div>
      <figcaption>
        Glisse pour tourner. Un mesh (géométrie + matériau), deux lumières, OrbitControls — tout ce que décrit l&apos;article, en vrai, dans ton navigateur.
      </figcaption>
    </figure>
  )
}
