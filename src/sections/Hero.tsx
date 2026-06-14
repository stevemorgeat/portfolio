import { Box, Container, Typography, Button, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Logo } from '../components/Logo'
import { profile } from '../data/profile'

export const Hero = () => (
  <Box
    id="top"
    sx={{
      background:
        'radial-gradient(900px 500px at 18% -10%, rgba(31,138,91,0.20), transparent 60%), radial-gradient(700px 460px at 90% 0%, rgba(200,155,60,0.16), transparent 55%)',
      py: { xs: 8, md: 13 },
    }}
  >
    <Container maxWidth="md">
      <Logo size={52} />
      <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 700, display: 'block', mt: 2 }}>
        {profile.title}
      </Typography>
      <Typography variant="h2" sx={{ my: 1.5, fontSize: { xs: '2.4rem', md: '3.6rem' }, lineHeight: 1.1 }}>
        {profile.name}
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 640 }}>
        {profile.tagline}
      </Typography>
      <Stack direction="row" spacing={1.5} sx={{ mt: 4 }} flexWrap="wrap" useFlexGap>
        <Button variant="contained" href="#parcours">Voir mon parcours</Button>
        <Button variant="outlined" href="#contact">Me contacter</Button>
        <Button color="inherit" startIcon={<GitHubIcon />} href={profile.links.github} target="_blank" rel="noopener">GitHub</Button>
        <Button color="inherit" startIcon={<LinkedInIcon />} href={profile.links.linkedin} target="_blank" rel="noopener">LinkedIn</Button>
      </Stack>
    </Container>
  </Box>
)
