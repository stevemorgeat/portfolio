import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { profile } from '../data/profile'

export const contactSchema = z.object({
  name: z.string().min(2, 'Ton nom (2 caractères min)'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Message un peu plus long (10 caractères min)'),
  // honeypot anti-spam : un bot le remplit, un humain non -> doit rester vide
  company: z.string().max(0, '').optional(),
})

export type ContactValues = z.infer<typeof contactSchema>

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

function mailtoHref(v: ContactValues): string {
  const subject = encodeURIComponent(`Contact portfolio — ${v.name}`)
  const body = encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`)
  return `mailto:${profile.email}?subject=${subject}&body=${body}`
}

/**
 * Envoi du formulaire. Si le micro-service (svc-contact) est configuré, on POST
 * dessus ; sinon repli : on ouvre le client mail pré-rempli. Même formulaire,
 * upgrade transparent le jour où l'endpoint existe.
 */
async function sendContact(values: ContactValues): Promise<{ via: 'api' | 'mailto' }> {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: values.name, email: values.email, message: values.message }),
    })
    if (!res.ok) throw new Error('send-failed')
    return { via: 'api' }
  }
  window.location.href = mailtoHref(values)
  return { via: 'mailto' }
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
