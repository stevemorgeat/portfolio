import { Box, Typography } from '@mui/material'

export const SectionTitle = ({ id, kicker, title }: { id: string; kicker: string; title: string }) => (
  <Box id={id} sx={{ mb: 4, scrollMarginTop: 80 }}>
    <Typography variant="overline" color="secondary.main" sx={{ fontWeight: 700, letterSpacing: 2 }}>
      {kicker}
    </Typography>
    <Typography variant="h4">{title}</Typography>
  </Box>
)
