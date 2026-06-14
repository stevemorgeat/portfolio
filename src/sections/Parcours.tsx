import { Container, Stack } from '@mui/material'
import { SectionTitle } from '../components/SectionTitle'
import { TimelineItem } from '../components/TimelineItem'
import { parcours } from '../data/parcours'

export const Parcours = () => (
  <Container maxWidth="md" sx={{ py: { xs: 6, md: 9 } }}>
    <SectionTitle id="parcours" kicker="Mon parcours" title="De dev à Engineering Manager" />
    <Stack spacing={2}>
      {parcours.map((job) => (
        <TimelineItem key={job.company} job={job} />
      ))}
    </Stack>
  </Container>
)
