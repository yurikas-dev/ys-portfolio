import { useState } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'Framer Motion', 'Redux', 'React Query'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tooling',
    skills: ['Git', 'Vite', 'Webpack', 'Docker', 'Vercel', 'GitHub Actions', 'Figma', 'Storybook'],
  },
  {
    category: 'Practices',
    skills: ['Responsive Design', 'Accessibility (a11y)', 'Performance Optimization', 'Testing (Vitest, Playwright)', 'Design Systems', 'Agile / Scrum'],
  },
]

function SkillTag({ label }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-block',
        padding: '6px 12px',
        border: '1px solid',
        borderColor: hovered ? 'rgba(255,255,255,0.2)' : 'var(--tag-border)',
        borderRadius: 'var(--radius)',
        fontSize: 13,
        color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: hovered ? 'var(--surface)' : 'var(--tag-bg)',
        transition: 'all 0.15s',
        cursor: 'default',
        letterSpacing: '0.01em',
      }}
    >
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Skills</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0 64px',
        }} className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={i} style={{
              paddingBottom: 40,
              marginBottom: 40,
              borderBottom: i < skillGroups.length - 2 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                marginBottom: 20,
              }}>
                {group.category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {group.skills.map(skill => (
                  <SkillTag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-grid > div {
            border-bottom: 1px solid var(--border) !important;
          }
        }
      `}</style>
    </section>
  )
}
