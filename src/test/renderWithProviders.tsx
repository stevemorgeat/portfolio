import type { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { theme } from '../theme'

/** Rend un composant avec les providers de l'app (thème + react-query). */
export const renderWithProviders = (ui: ReactElement) => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </QueryClientProvider>,
  )
}
