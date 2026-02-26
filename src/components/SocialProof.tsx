const STEPS = [
  'Initial readiness review and document checklist',
  'Tax computation and filing preparation',
  'Submission support and post-filing advisory',
]

const TRUST_POINTS = ['SME-focused finance partner', 'Dedicated tax specialists', 'Secure data handling process']

export const SocialProof = () => {
  return (
    <section className="section social-proof" id="process">
      <div className="section-header">
        <p className="kicker">How It Works</p>
        <h2>A clear path from records to successful filing.</h2>
      </div>

      <div className="workflow-visual-wrap" aria-hidden="true">
        <img
          alt=""
          className="workflow-visual"
          decoding="async"
          loading="lazy"
          src="./compliance-process-main.png"
        />
      </div>

      <div className="social-proof-layout">
        <div className="timeline-card">
          <ol>
            {STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="trust-card">
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
