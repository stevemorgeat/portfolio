import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material'
import { profile } from '../data/profile'

const LINKS = [
  { href: '#parcours', label: 'Parcours' },
  { href: '#competences', label: 'Compétences' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
]

export const TopBar = () => (
  <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(14,14,20,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid', borderColor: 'divider' }}>
    <Toolbar>
      <Typography variant="h6" component="a" href="#top" sx={{ flexGrow: 1, color: 'text.primary', textDecoration: 'none' }}>
        {profile.name}
      </Typography>
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
