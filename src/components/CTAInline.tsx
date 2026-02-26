interface CTAInlineProps {
  label: string
  whatsappHref: string
  callHref: string
  onWhatsAppClick: () => void
  onCallClick: () => void
  onLeadFormClick: () => void
}

export const CTAInline = ({
  label,
  whatsappHref,
  callHref,
  onWhatsAppClick,
  onCallClick,
  onLeadFormClick,
}: CTAInlineProps) => {
  return (
    <section className="section cta-inline">
      <p>{label}</p>
      <div className="cta-inline-actions">
        <a className="btn btn-primary" href="#lead-form" onClick={onLeadFormClick}>
          Book a Free Consultation
        </a>
        <a className="btn btn-outline" href={whatsappHref} onClick={onWhatsAppClick}>
          WhatsApp Us
        </a>
        <a className="text-link" href={callHref} onClick={onCallClick}>
          Prefer a call?
        </a>
      </div>
    </section>
  )
}
