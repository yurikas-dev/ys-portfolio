import { useState } from 'react'

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}

function OverlayIconLink({ href, label, children, hovered }) {
  const [btnHovered, setBtnHovered] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={e => e.stopPropagation()}
      onMouseEnter={() => setBtnHovered(true)}
      onMouseLeave={() => setBtnHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: btnHovered ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)',
        border: '1px solid rgba(255,255,255,0.3)',
        color: '#ffffff',
        transform: hovered ? 'scale(1)' : 'scale(0.8)',
        transition: 'transform 0.2s ease, background 0.15s ease',
        flexShrink: 0,
      }}
    >
      {children}
    </a>
  )
}

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const hasDemo = Boolean(project.demo)

  return (
    <article style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Thumbnail */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          aspectRatio: '16 / 10',
          background: project.gradient || 'var(--surface-2)',
          border: '1px solid var(--border)',
          flexShrink: 0,
          cursor: 'default',
        }}
      >
        {/* Project image */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: project.gradient }} />
        )}

        {/* Hover overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.55)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}>
          <OverlayIconLink
            href={project.github}
            label={`${project.title} on GitHub`}
            hovered={hovered}
          >
            <GithubIcon />
          </OverlayIconLink>

          {hasDemo && (
            <OverlayIconLink
              href={project.demo}
              label={`Visit ${project.title}`}
              hovered={hovered}
            >
              <GlobeIcon />
            </OverlayIconLink>
          )}
        </div>
      </div>

      {/* Info below thumbnail */}
      <div style={{ paddingTop: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span className="tag">{project.type}</span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'var(--text-tertiary)',
          }}>
            {project.year}
          </span>
        </div>
        <h3 style={{
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: '-0.01em',
          color: 'var(--text-primary)',
          marginBottom: project.description ? 6 : 8,
        }}>
          {project.title}
        </h3>
        {project.description && (
          <p style={{
            fontSize: 13,
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: 8,
          }}>
            {project.description}
          </p>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
