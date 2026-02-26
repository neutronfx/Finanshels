interface FloatingWhatsAppProps {
  href: string
  onClick: () => void
}

export const FloatingWhatsApp = ({ href, onClick }: FloatingWhatsAppProps) => {
  return (
    <a aria-label="Chat on WhatsApp" className="floating-whatsapp" href={href} onClick={onClick}>
      WhatsApp
    </a>
  )
}
