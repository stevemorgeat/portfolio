import { Container, Box, TextField, Button, Alert, Link } from '@mui/material'
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

        {mutation.isSuccess && <Alert severity="success">Message envoyé, merci ! Je reviens vers toi vite.</Alert>}
        {mutation.isError && !configured && (
          <Alert severity="info">
            Formulaire bientôt actif. En attendant, écris-moi : <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
          </Alert>
        )}
        {mutation.isError && configured && (
          <Alert severity="error">L'envoi a échoué. Réessaie, ou écris-moi : <Link href={`mailto:${profile.email}`}>{profile.email}</Link></Alert>
        )}
      </Box>
    </Container>
  )
}
