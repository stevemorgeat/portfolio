import { Container, Box, TextField, Button, Alert, Link, Typography } from '@mui/material'
import { SectionTitle } from '../components/SectionTitle'
import { useContactForm } from '../hooks/useContactForm'
import { profile } from '../data/profile'

export const Contact = () => {
  const { form, mutation, onSubmit, configured } = useContactForm()
  const { register, formState: { errors } } = form

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 6, md: 9 } }}>
      <SectionTitle id="contact" kicker="Contact" title="Un projet, une question ?" />
      <Box component="form" onSubmit={onSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nom" {...register('name')} error={!!errors.name} helperText={errors.name?.message} />
        <TextField label="Email" type="email" {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
        <TextField label="Message" multiline minRows={4} {...register('message')} error={!!errors.message} helperText={errors.message?.message} />
        {/* Honeypot anti-spam (caché aux humains) */}
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} {...register('company')} />

        <Button type="submit" variant="contained" size="large" disabled={mutation.isPending}>
          {mutation.isPending ? 'Envoi…' : 'Envoyer'}
        </Button>

        {mutation.isSuccess && (
          <Alert severity="success">
            {configured ? 'Message envoyé, merci ! Je reviens vers toi vite.' : 'Ton client mail s\'ouvre avec le message pré-rempli ✉️'}
          </Alert>
        )}
        {mutation.isError && (
          <Alert severity="error">Échec de l'envoi. Écris-moi directement : <Link href={`mailto:${profile.email}`}>{profile.email}</Link></Alert>
        )}
      </Box>
      {!configured && (
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
          Tant que le micro-service dédié n'est pas en ligne, le formulaire ouvre ton client mail. Bientôt : envoi direct (svc-contact).
        </Typography>
      )}
    </Container>
  )
}
