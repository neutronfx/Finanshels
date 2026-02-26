const BENEFITS = [
  {
    title: 'Compliance Without Guesswork',
    body: 'We translate changing tax rules into clear filing actions for your business.',
  },
  {
    title: 'Deadline and Risk Control',
    body: 'Built-in checks reduce late submissions, avoidable errors, and expensive penalties.',
  },
  {
    title: 'Guided Documentation',
    body: 'A structured checklist ensures your team submits the right data the first time.',
  },
]

export const Benefits = () => {
  return (
    <section className="section reveal-on-scroll" data-reveal id="benefits">
      <div className="section-header">
        <p className="kicker">Why Businesses Choose Finanshels</p>
        <h2>Built for speed, accuracy, and peace of mind.</h2>
      </div>
      <div className="benefits-grid">
        {BENEFITS.map((item) => (
          <article className="info-card reveal-on-scroll" data-reveal key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
