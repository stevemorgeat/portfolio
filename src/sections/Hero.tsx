import { Box, Container, Typography, Button, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Logo } from '../components/Logo'
import { asset } from '../asset'
import { profile } from '../data/profile'

export const Hero = () => (
  <Box
    id="top"
    sx={{
      background:
        'radial-gradient(900px 500px at 18% -10%, rgba(31,138,91,0.20), transparent 60%), radial-gradient(700px 460px at 90% 0%, rgba(200,155,60,0.16), transparent 55%)',
      py: { xs: 7, md: 12 },
    }}
  >
    <Container maxWidth="md">
      <Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={4} alignItems="center" justifyContent="space-between">
        <Box>
          <Logo size={44} />
          <Typography variant="overline" color="primary" sx={{ letterSpacing: 3, fontWeight: 700, display: 'block', mt: 1.5 }}>
            {profile.title}
          </Typography>
          <Typography variant="h2" sx={{ my: 1.5, fontSize: { xs: '2.2rem', md: '3.4rem' }, lineHeight: 1.1 }}>
            {profile.name}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 560 }}>
            {profile.tagline}
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ mt: 3.5 }} flexWrap="wrap" useFlexGap>
            <Button variant="contained" href="#parcours">Voir mon parcours</Button>
            <Button variant="outlined" href="#contact">Me contacter</Button>
            <Button color="inherit" startIcon={<GitHubIcon />} href={profile.links.github} target="_blank" rel="noopener">GitHub</Button>
            <Button color="inherit" startIcon={<LinkedInIcon />} href={profile.links.linkedin} target="_blank" rel="noopener">LinkedIn</Button>
          </Stack>
        </Box>
        <Box
          component="img"
          src={asset('steve.png')}
          alt={profile.name}
          sx={{ width: { xs: 160, md: 200 }, height: { xs: 160, md: 200 }, borderRadius: '24px', objectFit: 'cover', boxShadow: 4, flexShrink: 0, border: '3px solid #fff' }}
        />
      </Stack>
    </Container>
  </Box>
)
