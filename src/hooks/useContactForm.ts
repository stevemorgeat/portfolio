import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'

export const contactSchema = z.object({
  name: z.string().min(2, 'Ton nom (2 caractères min)'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Message un peu plus long (10 caractères min)'),
  // honeypot anti-spam : un bot le remplit, un humain non -> doit rester vide
  company: z.string().max(0, '').optional(),
})

export type ContactValues = z.infer<typeof contactSchema>

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

async function sendContact(values: ContactValues): Promise<void> {
  if (!ENDPOINT) throw new Error('not-configured')
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: values.name, email: values.email, message: values.message }),
  })
  if (!res.ok) throw new Error('send-failed')
}

/** Logique du formulaire de contact : validation (zod) + envoi (TanStack mutation). */
export function useContactForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '', company: '' },
  })
  const mutation = useMutation({ mutationFn: sendContact, onSuccess: () => form.reset() })
  const onSubmit = form.handleSubmit((values) => mutation.mutate(values))

  return { form, mutation, onSubmit, configured: Boolean(ENDPOINT) }
}
