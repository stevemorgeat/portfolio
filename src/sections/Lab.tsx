import { Suspense, lazy } from 'react'
import { Container, Box, Typography, CircularProgress } from '@mui/material'
import { SectionTitle } from '../components/SectionTitle'
import { useInView } from '../hooks/useInView'

// Code-split : Three.js charge quand la section approche du viewport.
const Model3D = lazy(() => import('../components/lab/Model3D').then((m) => ({ default: m.Model3D })))

export const Lab = () => {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
      <SectionTitle id="lab" kicker="Lab" title="Démos techniques" />
      <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 640 }}>
        WebGL / Three.js : un vrai bâtiment 3D, intégré dans la page. Glisse pour le faire pivoter, molette pour zoomer.
      </Typography>
      <Box
        ref={ref}
        sx={{ height: 440, width: '100%', maxWidth: 620, mx: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {inView ? (
          <Suspense fallback={<CircularProgress color="primary" />}>
            <Model3D />
          </Suspense>
        ) : (
          <CircularProgress color="primary" />
        )}
      </Box>
    </Container>
  )
}
