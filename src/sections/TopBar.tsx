import { AppBar, Toolbar, Button, Box, Stack } from '@mui/material'
import { asset } from '../asset'
import { profile } from '../data/profile'

const LINKS = [
  { href: '#parcours', label: 'Parcours' },
  { href: '#competences', label: 'Compétences' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#passions', label: 'Hors-code' },
  { href: '#contact', label: 'Contact' },
]

export const TopBar = () => (
  <AppBar
    position="sticky"
    elevation={0}
    sx={{ bgcolor: 'rgba(20,30,26,0.94)', color: '#fff', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
  >
    <Toolbar>
      <Box component="a" href="#top" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Box component="img" src={asset('logo.png')} alt={profile.name} sx={{ height: 42, display: 'block' }} />
      </Box>
      <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
        {LINKS.map((l) => (
          <Button key={l.href} href={l.href} color="inherit" size="small">{l.label}</Button>
        ))}
      </Stack>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Button href="#contact" color="primary" variant="contained" size="small">Contact</Button>
      </Box>
    </Toolbar>
  </AppBar>
)
