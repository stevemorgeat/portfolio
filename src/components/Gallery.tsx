import { useState } from 'react'
import { Box, Dialog, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { asset } from '../asset'
import { gallery } from '../data/gallery'

export const Gallery = () => {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <Box sx={{ columnCount: { xs: 2, sm: 3 }, columnGap: 1.5 }}>
        {gallery.map((g, i) => (
          <Box
            key={g.src}
            component="button"
            onClick={() => setOpen(i)}
            aria-label={g.caption}
            sx={{ display: 'block', width: '100%', mb: 1.5, p: 0, border: 0, borderRadius: 2, overflow: 'hidden', cursor: 'pointer', breakInside: 'avoid', boxShadow: 1 }}
          >
            <Box component="img" src={asset(g.src)} alt={g.caption} loading="lazy" sx={{ width: '100%', display: 'block' }} />
          </Box>
        ))}
      </Box>

      <Dialog open={open !== null} onClose={() => setOpen(null)} maxWidth="md">
        {open !== null && (
          <Box sx={{ position: 'relative' }}>
            <IconButton onClick={() => setOpen(null)} aria-label="Fermer" sx={{ position: 'absolute', right: 8, top: 8, bgcolor: 'rgba(0,0,0,0.5)', color: '#fff', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}>
              <CloseIcon />
            </IconButton>
            <Box component="img" src={asset(gallery[open].src)} alt={gallery[open].caption} sx={{ width: '100%', display: 'block' }} />
            <Typography sx={{ p: 1.5, fontWeight: 600 }}>{gallery[open].caption}</Typography>
          </Box>
        )}
      </Dialog>
    </>
  )
}
