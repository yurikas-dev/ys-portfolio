// 2-column layout: About (left) + condensed Skills (right)
// The original Skills section is kept in Skills.jsx (commented out in App.jsx)

const condensedSkills = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
  },
  {
    category: 'Tooling',
    skills: ['Git', 'Docker', 'Figma', 'Storybook'],
  },
]

export default function AboutSkills() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
          className="about-skills-grid"
        >
          {/* ── Left: About ── */}
          <div>
            <p className="section-label">About</p>

            <h2 className="section-title" style={{ marginBottom: 28 }}>
              Building interfaces<br />
              <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                that feel right.
              </span>
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              color: 'var(--text-secondary)',
              fontSize: 14,
              lineHeight: 1.8,
              marginBottom: 32,
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
            </div>

            {/* Key facts */}
            {/* <div>
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
                  padding: '14px 0',
                  borderBottom: '1px solid var(--border)',
                  gap: 24,
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10.5,
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    flexShrink: 0,
                  }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--text-primary)', textAlign: 'right' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          {/* ── Right: Skills ── */}
          <div>
            <p className="section-label">Skills</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {condensedSkills.map((group, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10.5,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-tertiary)',
                    marginBottom: 14,
                  }}>
                    {group.category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {group.skills.map(skill => (
                      <span key={skill} className="tag" style={{ fontSize: 12, padding: '5px 11px' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-skills-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  )
}
