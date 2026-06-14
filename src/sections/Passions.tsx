import { Container, Box, Typography } from '@mui/material'
import { SectionTitle } from '../components/SectionTitle'
import { PassionCard } from '../components/PassionCard'
import { Gallery } from '../components/Gallery'
import { passions } from '../data/passions'

export const Passions = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
    <SectionTitle id="passions" kicker="Hors-code" title="Ce qui me fait vibrer" />
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } }}>
      {passions.map((p) => (
        <PassionCard key={p.title} passion={p} />
      ))}
    </Box>

    <Typography variant="h6" sx={{ mt: 5, mb: 2 }}>En vrac — quelques voyages</Typography>
    <Gallery />
  </Container>
)
