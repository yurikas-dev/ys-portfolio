export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
          className="about-grid"
        >
          {/* Left: main text */}
          <div>
            <h2 className="section-title" style={{ marginBottom: 32 }}>
              Building interfaces<br />
              <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                that feel right.
              </span>
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              color: 'var(--text-secondary)',
              fontSize: 15,
              lineHeight: 1.75,
            }}>
              <p>
                I'm a frontend developer based in Tokyo with a focus on building
                performant, accessible web applications. I care deeply about the
                details—the spacing, the transitions, the way a page feels to use.
              </p>
              <p>
                Over the past few years I've worked across startups and agencies,
                collaborating with designers and product teams to ship products
                that people actually enjoy using.
              </p>
              <p>
                When I'm not coding, I'm usually reading about design systems,
                experimenting with creative coding, or exploring the city on my bicycle.
              </p>
            </div>
          </div>

          {/* Right: facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { label: 'Location', value: 'Tokyo, Japan' },
              { label: 'Focus', value: 'Frontend Development' },
              { label: 'Availability', value: 'Open to opportunities' },
              { label: 'Languages', value: 'Japanese, English' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '20px 0',
                borderBottom: '1px solid var(--border)',
                gap: 24,
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                }}>
                  {item.label}
                </span>
                <span style={{
                  fontSize: 14,
                  color: 'var(--text-primary)',
                  textAlign: 'right',
                }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
