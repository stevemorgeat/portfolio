import { Suspense, lazy, useState } from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import { SectionTitle } from '../components/SectionTitle'

// Code-split : Three.js ne charge que lorsqu'on lance la démo.
const Model3D = lazy(() => import('../components/lab/Model3D').then((m) => ({ default: m.Model3D })))

export const Lab = () => {
  const [load, setLoad] = useState(false)

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
      <SectionTitle id="lab" kicker="Lab" title="Démos techniques" />
      <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 640 }}>
        WebGL / Three.js : un vrai bâtiment 3D que tu peux faire tourner — glisse pour pivoter, molette pour zoomer. Le modèle (~8 Mo) ne se charge qu'à la demande.
      </Typography>
      <Box
        sx={{
          height: 460,
          borderRadius: 3,
          overflow: 'hidden',
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: '#0e1512',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {load ? (
          <Suspense fallback={<Typography sx={{ color: '#fff' }}>Préparation de la scène…</Typography>}>
            <Model3D />
          </Suspense>
        ) : (
          <Button variant="contained" size="large" startIcon={<ViewInArIcon />} onClick={() => setLoad(true)}>
            Lancer la démo 3D (~8 Mo)
          </Button>
        )}
      </Box>
    </Container>
  )
}
