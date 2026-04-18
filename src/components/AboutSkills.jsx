// 2-column layout: About (left) + condensed Skills (right)

const condensedSkills = [
  {
    category: 'Frontend',
    skills: [
      'HTML & CSS',
      'JS',
      'TS',
      'React',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'PHP',
      'Laravel',
      'Phalcon',
      'Python',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'GraphQL',
    ],
  },
  {
    category: 'Tooling',
    skills: ['Git', 'Docker', 'Figma', 'Storybook'],
  },
];

export default function AboutSkills() {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}
          className='about-skills-grid'
        >
          {/* ── Left: About ── */}
          <div>
            <p className='section-label'>About</p>

            <h2 className='section-title' style={{ marginBottom: 28 }}>
              Building things
              <br />
              <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>
                that solve real problems.
              </span>
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                color: 'var(--text-secondary)',
                fontSize: 14,
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              <p>
                I am a software developer with nearly four years of experience
                building and maintaining business systems. I have worked across
                both frontend and backend, developing web services and APIs. I
                recently completed my studies in computer science fundamentals
                at community college to strengthen my technical foundation, and
                currently seeking new opportunities.
              </p>
              <p>
                I pick up new technologies quickly and thrive on solving complex
                problems with persistence and curiosity.
              </p>
            </div>
          </div>

          {/* ── Right: Skills ── */}
          <div>
            <p className='section-label'>Skills</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {condensedSkills.map((group, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10.5,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--text-tertiary)',
                      marginBottom: 14,
                    }}
                  >
                    {group.category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className='tag'
                        style={{ fontSize: 12, padding: '5px 11px' }}
                      >
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
  );
}
