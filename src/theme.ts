import { createTheme } from '@mui/material/styles'

// Clair, chaleureux, vert en couleur principale (clin d'œil à l'ancien site).
export const theme = createTheme({
  palette: {
    primary: { main: '#1f8a5b' },
    secondary: { main: '#c89b3c' },
    success: { main: '#2f8f5b' },
    info: { main: '#2f6f8f' },
    background: { default: '#f6f9f5', paper: '#ffffff' },
    text: { primary: '#1c2522', secondary: '#5c6660' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h1: { fontFamily: 'Sora, sans-serif', fontWeight: 700 },
    h2: { fontFamily: 'Sora, sans-serif', fontWeight: 700 },
    h3: { fontFamily: 'Sora, sans-serif', fontWeight: 700 },
    h4: { fontFamily: 'Sora, sans-serif', fontWeight: 700 },
    h5: { fontFamily: 'Sora, sans-serif', fontWeight: 700 },
    h6: { fontFamily: 'Sora, sans-serif', fontWeight: 700 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
          background: 'linear-gradient(175deg,#eef6ee 0%,#f6f9f5 30%,#fbf7ef 100%)',
          backgroundAttachment: 'fixed',
        },
      },
    },
  },
})
