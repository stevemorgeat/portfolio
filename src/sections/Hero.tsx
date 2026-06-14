import { Box, Container, Typography, Button, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { profile } from '../data/profile'

export const Hero = () => (
  <Box
    id="top"
    sx={{
      background: 'radial-gradient(900px 500px at 20% -10%, rgba(188,0,45,0.35), transparent 60%), radial-gradient(700px 500px at 90% 10%, rgba(200,155,60,0.22), transparent 55%)',
      py: { xs: 9, md: 14 },
    }}
  >
    <Container maxWidth="md">
      <Typography variant="overline" color="secondary.main" sx={{ letterSpacing: 3, fontWeight: 700 }}>
        {profile.title}
      </Typography>
      <Typography variant="h2" sx={{ my: 2, fontSize: { xs: '2.4rem', md: '3.6rem' }, lineHeight: 1.1 }}>
        {profile.name}
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 640 }}>
        {profile.tagline}
      </Typography>
      <Stack direction="row" spacing={1.5} sx={{ mt: 4 }} flexWrap="wrap" useFlexGap>
        <Button variant="contained" href="#parcours">Voir mon parcours</Button>
        <Button variant="outlined" color="inherit" href="#contact">Me contacter</Button>
        <Button color="inherit" startIcon={<GitHubIcon />} href={profile.links.github} target="_blank" rel="noopener">GitHub</Button>
        <Button color="inherit" startIcon={<LinkedInIcon />} href={profile.links.linkedin} target="_blank" rel="noopener">LinkedIn</Button>
      </Stack>
    </Container>
  </Box>
)
