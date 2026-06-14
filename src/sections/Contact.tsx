import { Container, Typography, Button, Stack } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { SectionTitle } from '../components/SectionTitle'
import { profile } from '../data/profile'

export const Contact = () => (
  <Container maxWidth="sm" sx={{ py: { xs: 6, md: 9 } }}>
    <SectionTitle id="contact" kicker="Contact" title="Un projet, une question ?" />
    <Typography color="text.secondary" sx={{ mb: 3 }}>
      Le plus simple pour l'instant : un petit mail, je réponds vite. (Un formulaire arrivera avec le micro-service dédié.)
    </Typography>
    <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
      <Button variant="contained" size="large" startIcon={<EmailIcon />} href={`mailto:${profile.email}`}>
        {profile.email}
      </Button>
      <Button variant="outlined" startIcon={<LinkedInIcon />} href={profile.links.linkedin} target="_blank" rel="noopener">LinkedIn</Button>
      <Button color="inherit" startIcon={<GitHubIcon />} href={profile.links.github} target="_blank" rel="noopener">GitHub</Button>
    </Stack>
  </Container>
)
