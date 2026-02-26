import { useEffect, useState } from 'react'
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    track('page_view')
  }, [track])

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 769) {
        setMobileNavOpen(false)
      }
    }

    window.addEventListener('resize', closeMenuOnDesktop)
    return () => {
      window.removeEventListener('resize', closeMenuOnDesktop)
    }
  }, [])

  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    if (revealTargets.length === 0) {
      return undefined
    }

    if (typeof IntersectionObserver === 'undefined') {
      revealTargets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement

          if (entry.isIntersecting) {
            target.classList.add('is-visible')
          } else {
            target.classList.remove('is-visible')
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealTargets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
    }
  }, [])

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

  const handleNavLinkClick = () => {
    setMobileNavOpen(false)
  }

  return (
    <>
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

          <button
            aria-controls="top-nav-menu"
            aria-expanded={mobileNavOpen}
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            className="menu-toggle"
            onClick={() => setMobileNavOpen((current) => !current)}
            type="button"
          >
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
          </button>

          <nav
            aria-label="Primary navigation"
            className={`top-nav ${mobileNavOpen ? 'is-open' : ''}`}
            id="top-nav-menu"
          >
            {NAV_ITEMS.map((item) => (
              <a className="top-nav-link" href={item.href} key={item.href} onClick={handleNavLinkClick}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="top-call" href={CONTACT_DETAILS.callHref} onClick={handleCallClick}>
            Talk to Experts
          </a>
        </div>
      </header>

      <div className="page-shell">
        <div aria-hidden="true" className="orb orb-one" />
        <div aria-hidden="true" className="orb orb-two" />

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

          <section className="section form-section reveal-on-scroll" data-reveal id="lead-form">
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
      </div>

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
    </>
  )
}

export default App
