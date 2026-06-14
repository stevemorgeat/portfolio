import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#bc002d' },
    secondary: { main: '#c89b3c' },
    success: { main: '#2f8f5b' },
    info: { main: '#2f6f8f' },
    background: { default: '#0e0e14', paper: '#17171f' },
    text: { primary: '#f3f1ec', secondary: '#a6a3ad' },
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
})
