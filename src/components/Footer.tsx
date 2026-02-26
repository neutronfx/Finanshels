interface FooterProps {
  whatsappHref: string
  callHref: string
  onWhatsAppClick: () => void
  onCallClick: () => void
}

export const Footer = ({ whatsappHref, callHref, onWhatsAppClick, onCallClick }: FooterProps) => {
  return (
    <footer className="site-footer reveal-on-scroll" data-reveal id="contact">
      <div className="footer-content">
        <h2>Need help closing your tax filing this week?</h2>
        <p>Reach out now and we will align on your filing checklist and submission timeline.</p>
        <div className="footer-actions">
          <a className="btn btn-primary" href={whatsappHref} onClick={onWhatsAppClick}>
            Chat on WhatsApp
          </a>
          <a className="btn btn-outline" href={callHref} onClick={onCallClick}>
            Call an Advisor
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-note">© 2026 Finanshels. All rights reserved.</p>
        <div aria-label="Social media links" className="social-links">
          <a className="social-link" href="https://www.linkedin.com" rel="noreferrer" target="_blank">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M6.94 8.25h-3v9h3v-9Zm.2-2.78A1.72 1.72 0 0 0 5.4 3.75a1.72 1.72 0 0 0-1.74 1.72A1.72 1.72 0 0 0 5.4 7.19a1.72 1.72 0 0 0 1.74-1.72ZM12.2 11.98c0-1.31.6-2.09 1.73-2.09 1.04 0 1.54.73 1.54 2.09v5.27h2.99v-6.35c0-2.69-1.52-3.99-3.63-3.99-1.68 0-2.42.93-2.84 1.59v-1.25H9.13v9h3.07v-5.27Z" />
            </svg>
          </a>
          <a className="social-link" href="https://x.com" rel="noreferrer" target="_blank">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M18.9 2.25h2.98l-6.52 7.45 7.66 12.05h-6l-4.7-7.3-6.38 7.3H2.95l6.97-7.98L2.55 2.25h6.16l4.25 6.73 5.94-6.73Zm-1.05 17.6h1.65L7.8 4.04H6.03L17.85 19.85Z" />
            </svg>
          </a>
          <a className="social-link" href="https://www.instagram.com" rel="noreferrer" target="_blank">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M7.75 2.25h8.5A5.5 5.5 0 0 1 21.75 7.75v8.5a5.5 5.5 0 0 1-5.5 5.5h-8.5a5.5 5.5 0 0 1-5.5-5.5v-8.5a5.5 5.5 0 0 1 5.5-5.5Zm8.5 1.8h-8.5a3.7 3.7 0 0 0-3.7 3.7v8.5a3.7 3.7 0 0 0 3.7 3.7h8.5a3.7 3.7 0 0 0 3.7-3.7v-8.5a3.7 3.7 0 0 0-3.7-3.7Zm-4.25 3.25a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm4.97-2.17a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
