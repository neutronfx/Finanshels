import { useEffect, useState } from 'react'

const PROCESS_PHASES = [
  {
    title: 'Document Collection',
    body: 'Gather invoices, ledger exports, and statutory documents.',
    imageSrc: './Document%20Collection.webp',
  },
  {
    title: 'Tax Computation Review',
    body: 'Review tax calculations and reconcile amounts before filing.',
    imageSrc: './Tax%20Computation%20Review.webp',
  },
  {
    title: 'Compliance Validation',
    body: 'Validate filing rules, required schedules, and supporting data.',
    imageSrc: './Compliance%20Validation.webp',
  },
  {
    title: 'Filing Submission',
    body: 'Submit with confidence and keep full records for audit readiness.',
    imageSrc: './Filing%20Submission.webp',
  },
]

const TRUST_POINTS = ['SME-focused finance partner', 'Dedicated tax specialists', 'Secure data handling process']

export const SocialProof = () => {
  const [activePhase, setActivePhase] = useState(0)
  const progressWidth = `${((activePhase + 1) / PROCESS_PHASES.length) * 100}%`

  useEffect(() => {
    const phaseInterval = window.setInterval(() => {
      setActivePhase((current) => (current + 1) % PROCESS_PHASES.length)
    }, 1800)

    return () => {
      window.clearInterval(phaseInterval)
    }
  }, [])

  return (
    <section className="section social-proof reveal-on-scroll" data-reveal id="process">
      <div className="section-header">
        <p className="kicker">How It Works</p>
        <h2>A clear path from records to successful filing.</h2>
      </div>

      <div className="process-sequence reveal-on-scroll" data-reveal>
        <div aria-hidden="true" className="process-sequence-line">
          <span className="process-sequence-progress" style={{ width: progressWidth }} />
        </div>

        <div className="process-phase-track">
        {PROCESS_PHASES.map((phase, index) => (
          <article
            className={`process-phase-card ${activePhase === index ? 'is-active' : ''} ${index < activePhase ? 'is-complete' : ''}`}
            aria-label={phase.title}
            key={phase.title}
          >
            <div className="process-phase-image-wrap">
              <img
                alt={phase.title}
                className="process-phase-image"
                decoding="async"
                loading="lazy"
                src={phase.imageSrc}
              />
              <span className="process-phase-step">0{index + 1}</span>
            </div>
            <p>{phase.body}</p>
          </article>
        ))}
        </div>
      </div>

      <div className="social-proof-layout">
        <div className="timeline-card reveal-on-scroll" data-reveal>
          <h3>Clear phase-by-phase execution</h3>
          <p>
            Each phase is handled in sequence, so your filing moves from collection to submission
            without gaps or rework.
          </p>
        </div>
        <div className="trust-card reveal-on-scroll" data-reveal>
          <h3>Trusted by growth-focused teams</h3>
          <ul>
            {TRUST_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
