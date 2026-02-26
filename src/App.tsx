import { useEffect } from 'react'
import { Benefits } from './components/Benefits'
import { CTAInline } from './components/CTAInline'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LeadForm } from './components/LeadForm'
import { SocialProof } from './components/SocialProof'
import { StickyMobileCTA } from './components/StickyMobileCTA'
import { CONTACT_DETAILS } from './config/contact'
import { useTracking } from './hooks/useTracking'

const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Process', href: '#process' },
  { label: 'Lead Form', href: '#lead-form' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const { track } = useTracking()

  useEffect(() => {
    track('page_view')
  }, [track])

  const handleInlineWhatsAppClick = () => {
    track('cta_click_whatsapp_inline', { cta_id: 'hero_inline_whatsapp' })
  }

  const handleLeadFormClick = (ctaId: string) => {
    track('cta_click_lead_form', { cta_id: ctaId })
  }

  const handleCallClick = () => {
    track('cta_click_call', { cta_id: 'hero_call_cta' })
  }

  const handleFloatingWhatsAppClick = () => {
    track('cta_click_whatsapp_floating', { cta_id: 'floating_whatsapp' })
  }

  const handleStickyCallClick = () => {
    track('cta_click_sticky_mobile', { cta_id: 'sticky_call' })
  }

  const handleStickyWhatsAppClick = () => {
    track('cta_click_sticky_mobile', { cta_id: 'sticky_whatsapp' })
  }

  return (
    <div className="page-shell">
      <div aria-hidden="true" className="orb orb-one" />
      <div aria-hidden="true" className="orb orb-two" />
      <header className="top-bar">
        <div className="top-bar-inner">
          <a aria-label="Finanshels home" className="brand" href="#top">
            <img
              alt="Finanshels"
              className="brand-logo"
              decoding="async"
              height={28}
              loading="eager"
              src="./FinanshelsMainLogo.svg"
            />
          </a>
          <nav aria-label="Primary navigation" className="top-nav">
            {NAV_ITEMS.map((item) => (
              <a className="top-nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="top-call" href={CONTACT_DETAILS.callHref} onClick={handleCallClick}>
            Talk to an Expert
          </a>
        </div>
      </header>

      <main id="top">
        <Hero
          callHref={CONTACT_DETAILS.callHref}
          onCallClick={handleCallClick}
          onLeadFormClick={() => handleLeadFormClick('hero_lead_form_cta')}
          whatsappHref={CONTACT_DETAILS.whatsappHref}
          onWhatsAppClick={handleInlineWhatsAppClick}
        />

        <CTAInline
          callHref={CONTACT_DETAILS.callHref}
          label="Get compliant before your filing deadline."
          onCallClick={handleCallClick}
          onLeadFormClick={() => handleLeadFormClick('inline_lead_form_cta')}
          onWhatsAppClick={handleInlineWhatsAppClick}
          whatsappHref={CONTACT_DETAILS.whatsappHref}
        />

        <Benefits />
        <SocialProof />

        <section className="section form-section" id="lead-form">
          <div className="section-header">
            <p className="kicker">Book Your Filing Readiness Call</p>
            <h2>Submit your details and we will contact you quickly.</h2>
          </div>
          <LeadForm
            callHref={CONTACT_DETAILS.callHref}
            onCallClick={handleCallClick}
            onTrack={track}
            onWhatsAppClick={handleInlineWhatsAppClick}
            whatsappHref={CONTACT_DETAILS.whatsappHref}
          />
        </section>
      </main>

      <Footer
        callHref={CONTACT_DETAILS.callHref}
        onCallClick={handleCallClick}
        whatsappHref={CONTACT_DETAILS.whatsappHref}
        onWhatsAppClick={handleInlineWhatsAppClick}
      />

      <FloatingWhatsApp
        href={CONTACT_DETAILS.whatsappHref}
        onClick={handleFloatingWhatsAppClick}
      />

      <StickyMobileCTA
        callHref={CONTACT_DETAILS.callHref}
        onCallClick={handleStickyCallClick}
        onWhatsAppClick={handleStickyWhatsAppClick}
        whatsappHref={CONTACT_DETAILS.whatsappHref}
      />
    </div>
  )
}

export default App
