interface StickyMobileCTAProps {
  whatsappHref: string
  callHref: string
  onWhatsAppClick: () => void
  onCallClick: () => void
}

export const StickyMobileCTA = ({
  whatsappHref,
  callHref,
  onWhatsAppClick,
  onCallClick,
}: StickyMobileCTAProps) => {
  return (
    <div className="sticky-mobile-cta">
      <a className="btn btn-outline" href={whatsappHref} onClick={onWhatsAppClick}>
        WhatsApp
      </a>
      <a className="btn btn-primary" href={callHref} onClick={onCallClick}>
        Call Now
      </a>
    </div>
  )
}
