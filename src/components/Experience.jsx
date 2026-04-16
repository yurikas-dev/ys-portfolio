const experiences = [
  {
    type: 'work',
    title: 'Frontend Developer',
    org: 'Company Name',
    period: '2022 — Present',
    location: 'Tokyo',
    description:
      'Lead frontend development for the core product, collaborating with designers and backend engineers. Built and maintained a design system used across 3 products.',
    tags: ['React', 'TypeScript', 'Next.js'],
  },
  {
    type: 'work',
    title: 'Web Developer',
    org: 'Agency Name',
    period: '2021 — 2022',
    location: 'Tokyo',
    description:
      'Developed responsive websites and web apps for clients across e-commerce, media, and SaaS. Focused on performance and cross-browser compatibility.',
    tags: ['JavaScript', 'Vue.js', 'WordPress'],
  },
  {
    type: 'work',
    title: 'Junior Developer',
    org: 'Startup Name',
    period: '2020 — 2021',
    location: 'Remote',
    description:
      'Built internal tooling and contributed to product features. First professional role—learned fast in a small, fast-moving team.',
    tags: ['React', 'Node.js', 'CSS'],
  },
]

const education = [
  {
    type: 'edu',
    title: 'B.Sc. Computer Science',
    org: 'University Name',
    period: '2016 — 2020',
    location: 'Tokyo',
    description:
      'Graduated with honours. Coursework included algorithms, software engineering, and human-computer interaction. Final thesis on adaptive UI systems.',
    tags: ['Computer Science', 'HCI'],
  },
]

function TimelineItem({ item, isLast }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      gap: 32,
      paddingBottom: isLast ? 0 : 40,
      marginBottom: isLast ? 0 : 40,
      borderBottom: isLast ? 'none' : '1px solid var(--border)',
    }} className="timeline-item">
      {/* Left: period */}
      <div style={{ paddingTop: 2 }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: 'var(--text-tertiary)',
          letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
        }}>
          {item.period}
        </span>
      </div>

      {/* Right: content */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4, flexWrap: 'wrap' }}>
          <h3 style={{
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
          }}>
            {item.title}
          </h3>
          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>@ {item.org}</span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'var(--text-tertiary)',
          }}>
            {item.location}
          </span>
        </div>
        <p style={{
          fontSize: 14,
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: 14,
        }}>
          {item.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {item.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Experience & Education</p>

        {/* Work */}
        <div style={{ marginBottom: 64 }}>
          <h2 className="section-title" style={{ marginBottom: 40, fontSize: 16, fontWeight: 500, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
            Work
          </h2>
          {experiences.map((item, i) => (
            <TimelineItem key={i} item={item} isLast={i === experiences.length - 1} />
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 style={{ marginBottom: 40, fontSize: 16, fontWeight: 500, color: 'var(--text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>
            Education
          </h2>
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} isLast={i === education.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-item {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  )
}
