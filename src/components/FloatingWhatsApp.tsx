interface FloatingWhatsAppProps {
  href: string
  onClick: () => void
}

export const FloatingWhatsApp = ({ href, onClick }: FloatingWhatsAppProps) => {
  return (
    <a aria-label="Chat on WhatsApp" className="floating-whatsapp" href={href} onClick={onClick}>
      <svg aria-hidden="true" className="floating-whatsapp-icon" viewBox="0 0 24 24">
        <path d="M19.05 4.95A9.92 9.92 0 0 0 12 2a10 10 0 0 0-8.66 15l-1.3 4.75L6.9 20.5A10 10 0 1 0 19.05 4.95Zm-7.05 15.4a8.3 8.3 0 0 1-4.25-1.17l-.31-.18-2.53.66.68-2.46-.2-.33a8.28 8.28 0 1 1 6.61 3.48Zm4.54-6.2c-.25-.13-1.49-.73-1.72-.82s-.4-.13-.57.12-.65.82-.8.98-.29.19-.54.06a6.79 6.79 0 0 1-2-1.26 7.57 7.57 0 0 1-1.39-1.73c-.15-.25-.02-.39.11-.52.12-.12.25-.31.37-.46.12-.15.17-.25.25-.42s.04-.32-.02-.45c-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.41-.57-.42h-.49a.94.94 0 0 0-.67.31c-.23.25-.88.85-.88 2.08s.9 2.42 1.03 2.58c.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.49-.07 1.49-.61 1.7-1.2.21-.58.21-1.08.15-1.2-.06-.11-.23-.17-.48-.29Z" />
      </svg>
      <span className="floating-whatsapp-text">WhatsApp</span>
    </a>
  )
}
