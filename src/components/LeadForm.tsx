import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { LeadPayload, LeadFormValues } from '../types/lead'
import type { AppEventName, TrackEventOptions } from '../types/events'
import { leadFormSchema } from '../lib/validators'
import { useTracking } from '../hooks/useTracking'

interface LeadFormProps {
  whatsappHref: string
  callHref: string
  onWhatsAppClick: () => void
  onCallClick: () => void
  onTrack: (eventName: AppEventName, options?: TrackEventOptions) => void
}

const createLeadId = () => {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `lead-${Date.now()}`
}

export const LeadForm = ({ whatsappHref, callHref, onWhatsAppClick, onCallClick, onTrack }: LeadFormProps) => {
  const { attribution } = useTracking()
  const [leadId, setLeadId] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    mode: 'onBlur',
  })

  useEffect(() => {
    if (leadId) {
      onTrack('thank_you_view', { lead_id: leadId })
    }
  }, [leadId, onTrack])

  const onSubmit = handleSubmit(async (values) => {
    onTrack('form_submit_attempt', { cta_id: 'lead_form_submit' })

    await new Promise((resolve) => {
      setTimeout(resolve, 650)
    })

    const newLeadId = createLeadId()
    const payload: LeadPayload = {
      ...values,
      lead_id: newLeadId,
      captured_at: new Date().toISOString(),
      session_id: attribution.session_id,
      utm: attribution.utm,
      click_ids: attribution.click_ids,
      page_url: window.location.href,
    }

    console.info('[lead payload]', payload)

    onTrack('form_submit_success', { lead_id: newLeadId })
    onTrack('qualified_lead', { lead_id: newLeadId })
    setLeadId(newLeadId)
  })

  if (leadId) {
    return (
      <div className="thank-you-state" role="status" aria-live="polite">
        <h3>Thank you. Your request has been received.</h3>
        <p>
          Our team will contact you shortly to confirm your filing timeline and required documentation.
        </p>
        <div className="thank-you-actions">
          <a className="btn btn-outline" href={whatsappHref} onClick={onWhatsAppClick}>
            Continue on WhatsApp
          </a>
          <a className="btn btn-primary" href={callHref} onClick={onCallClick}>
            Call a Specialist
          </a>
        </div>
      </div>
    )
  }

  return (
    <form className="lead-form" noValidate onSubmit={onSubmit}>
      <label htmlFor="name">
        Full Name
        <input id="name" placeholder="Michael Adesina" {...register('name')} />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </label>

      <label htmlFor="email">
        Business Email
        <input id="email" placeholder="you@company.com" {...register('email')} />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </label>

      <label htmlFor="phone">
        Phone Number
        <input id="phone" placeholder="+234..." {...register('phone')} />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </label>

      <label htmlFor="company">
        Company Name
        <input id="company" placeholder="Acme Ltd" {...register('company')} />
        {errors.company && <span className="error">{errors.company.message}</span>}
      </label>

      <button className="btn btn-primary submit-btn" disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Submitting...' : 'Request Consultation'}
      </button>
    </form>
  )
}
