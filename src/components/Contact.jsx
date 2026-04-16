import { Mail } from 'lucide-react'

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.834L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

const EMAIL = 'hello@yourname.dev'
const LINKS = [
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourname',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/yourname',
  },
  {
    icon: XIcon,
    label: 'X / Twitter',
    href: 'https://x.com/yourname',
  },
]

function IconLink({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        color: 'var(--text-secondary)',
        fontSize: 13,
        transition: 'color 0.2s',
        padding: '10px 0',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
    >
      <span style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        flexShrink: 0,
        transition: 'border-color 0.2s',
      }}>
        <Icon size={15} />
      </span>
      {label}
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Contact</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left: CTA text */}
          <div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Let's work<br />
              <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>together.</span>
            </h2>
            <p style={{
              fontSize: 15,
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: 380,
            }}>
              I'm currently open to new opportunities. Whether it's a full-time
              role, a freelance project, or just a conversation—reach out.
            </p>

            {/* Email CTA */}
            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 36,
                padding: '14px 24px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                fontSize: 14,
                color: 'var(--text-primary)',
                background: 'var(--surface)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-hover)'
                e.currentTarget.style.background = 'var(--surface-2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--surface)'
              }}
            >
              <Mail size={15} />
              {EMAIL}
            </a>
          </div>

          {/* Right: social links */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
              marginBottom: 16,
            }}>
              Find me on
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {LINKS.map(link => (
                <IconLink key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container" style={{ marginTop: 96 }}>
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 32,
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'var(--text-tertiary)',
            letterSpacing: '0.05em',
          }}>
            © {new Date().getFullYear()} Your Name
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}
