import { useEffect, useRef, useState } from 'react'

interface HeroProps {
  whatsappHref: string
  callHref: string
  onWhatsAppClick: () => void
  onCallClick: () => void
  onLeadFormClick: () => void
}

const HERO_SLIDES = [
  {
    webpSrc: '/hero-slider-01.webp',
    pngSrc: '/hero-slider-01.png',
    alt: 'Corporate tax filing dashboard with deadline tracking and compliance status indicators.',
  },
  {
    webpSrc: '/hero-slider-02.webp',
    pngSrc: '/hero-slider-02.png',
    alt: 'Finance team reviewing tax filing checklist with document validation workflow.',
  },
  {
    webpSrc: '/hero-slider-03.webp',
    pngSrc: '/hero-slider-03.png',
    alt: 'Tax advisory collaboration scene with filing timeline and regulatory alerts.',
  },
  {
    webpSrc: '/hero-slider-04.webp',
    pngSrc: '/hero-slider-04.png',
    alt: 'Business owner receiving successful tax filing confirmation and compliance report.',
  },
]

export const Hero = ({
  whatsappHref,
  callHref,
  onWhatsAppClick,
  onCallClick,
  onLeadFormClick,
}: HeroProps) => {
  const heroSectionRef = useRef<HTMLElement | null>(null)
  const hasEnteredViewRef = useRef(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [metricRun, setMetricRun] = useState(() =>
    typeof window !== 'undefined' && 'IntersectionObserver' in window ? 0 : 1,
  )
  const [animationProgress, setAnimationProgress] = useState(0)
  const easedProgress = 1 - Math.pow(1 - animationProgress, 3)
  const hoursCount = Math.round(48 * easedProgress)
  const accuracyCount = Math.round(99 * easedProgress)
  const supportSignal = Math.round(100 * easedProgress)
  const supportDotPosition = Math.min(Math.max(supportSignal, 2), 98)

  useEffect(() => {
    const slideInterval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)
    }, 3800)

    return () => {
      window.clearInterval(slideInterval)
    }
  }, [])

  useEffect(() => {
    const nextSlideIndex = (activeSlide + 1) % HERO_SLIDES.length
    const preloadImage = new Image()
    preloadImage.src = HERO_SLIDES[nextSlideIndex].webpSrc
  }, [activeSlide])

  useEffect(() => {
    if (!heroSectionRef.current || typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting && !hasEnteredViewRef.current) {
          hasEnteredViewRef.current = true
          setActiveSlide(0)
          setAnimationProgress(0)
          setMetricRun((current) => current + 1)
        }

        if (!entry?.isIntersecting) {
          hasEnteredViewRef.current = false
        }
      },
      { threshold: 0.55 },
    )

    observer.observe(heroSectionRef.current)
    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (metricRun === 0) {
      return undefined
    }

    const durationMs = 1450
    let rafId = 0
    const start = performance.now()

    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / durationMs, 1)
      setAnimationProgress(progress)

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step)
      }
    }

    rafId = window.requestAnimationFrame(step)
    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [metricRun])

  return (
    <section className="section hero" id="overview" ref={heroSectionRef}>
      <div className="hero-content">
        <p className="kicker">Corporate Tax Filing Services</p>
        <h1>Avoid Penalties and File with Confidence.</h1>
        <p className="hero-copy">
          Finanshels helps your business prepare and file accurately with expert guidance, deadline tracking,
          and clean compliance workflows.
        </p>
        <div className="hero-cta-row">
          <a className="btn btn-primary" href="#lead-form" onClick={onLeadFormClick}>
            Get a Filing Readiness Review
          </a>
          <a className="btn btn-outline" href={whatsappHref} onClick={onWhatsAppClick}>
            Chat on WhatsApp
          </a>
          <a className="text-link" href={callHref} onClick={onCallClick}>
            Call an Advisor
          </a>
        </div>
      </div>

      <div className="hero-side">
        <div className="hero-visual-wrap" aria-hidden="true">
          <picture>
            <source srcSet={HERO_SLIDES[activeSlide].webpSrc} type="image/webp" />
            <img
              alt={HERO_SLIDES[activeSlide].alt}
              className="hero-visual-image"
              decoding="async"
              fetchPriority="high"
              loading="eager"
              src={HERO_SLIDES[activeSlide].pngSrc}
            />
          </picture>
          <div className="hero-slider-dots" role="tablist" aria-label="Hero image slides">
            {HERO_SLIDES.map((slide, index) => (
              <button
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === activeSlide}
                className={`hero-slider-dot ${index === activeSlide ? 'is-active' : ''}`}
                key={slide.webpSrc}
                onClick={() => setActiveSlide(index)}
                role="tab"
                type="button"
              />
            ))}
          </div>
          <span className="floating-chip chip-one">Deadline risk reduced</span>
          <span className="floating-chip chip-two">Audit-ready records</span>
        </div>

        <div className="hero-metrics" aria-label="Service highlights">
          <div className="metric-card">
            <p className="metric-value">{hoursCount}h</p>
            <div className="metric-line">
              <span style={{ width: `${(hoursCount / 48) * 100}%` }} />
            </div>
            <p className="metric-label">Initial review turnaround</p>
          </div>
          <div className="metric-card">
            <div
              className="metric-circle"
              style={{
                background: `conic-gradient(var(--primary) ${accuracyCount * 3.6}deg, rgba(239, 200, 173, 0.45) ${accuracyCount * 3.6}deg)`,
              }}
            >
              <span>{accuracyCount}%</span>
            </div>
            <p className="metric-label">Document accuracy checks</p>
          </div>
          <div className="metric-card">
            <div className="metric-ratio-visual">
              <div className="metric-ratio-head">
                <span>Client</span>
                <span>Advisor</span>
              </div>
              <div className="ratio-track">
                <span style={{ width: `${supportSignal}%` }} />
                <i className="ratio-dot" style={{ left: `${supportDotPosition}%` }} />
              </div>
            </div>
            <p className="metric-value metric-value-ratio">1:1</p>
            <p className="metric-label">Dedicated tax specialist support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
