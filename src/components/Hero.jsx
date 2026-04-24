import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        paddingBottom: 64,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse 100% 100% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 100% 100% at 50% 50%, black 30%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className='container' style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 460px) minmax(0, 400px)',
            gap: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className='hero-grid'
        >
          {/* ── Left column ── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
              paddingTop: 48,
            }}
            className='hero-left'
          >
            {/* Name image + tagline (tight group) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Catchphrase */}
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.05em',
                  margin: 0,
                }}
              >
                Life is a loop. Keep coding.
              </p>

              <h1 style={{ margin: 0, lineHeight: 1 }}>
                <img
                  src='/images/name-transparent.png'
                  alt='Yurika Sugita'
                  style={{
                    height: 'clamp(48px, 9vw, 88px)',
                    width: 'auto',
                    display: 'block',
                    filter: 'var(--name-img-filter)',
                  }}
                />
              </h1>

              {/* Role / tagline */}
              <p
                style={{
                  fontSize: 'clamp(15px, 1.6vw, 18px)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontWeight: 300,
                  maxWidth: 400,
                  margin: 0,
                }}
              >
                Software developer with nearly 4 years of experience in frontend
                and backend, currently open to new opportunities.
              </p>
            </div>
            {/* end tight group */}

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href='#projects'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 24px',
                  background: 'var(--text-primary)',
                  color: 'var(--bg)',
                  borderRadius: 'var(--radius)',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                View Projects
                <ArrowDownRight size={14} />
              </a>
              <a
                href='#contact'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontSize: 13,
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                Get in touch
              </a>

              {/* Social icons */}
              <div>
                <a
                  href='https://linkedin.com/in/yurika-sugita/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 44,
                    height: 44,
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                    <rect x='2' y='9' width='4' height='12' />
                    <circle cx='4' cy='4' r='2' />
                  </svg>
                </a>
                <a
                  href='https://github.com/yurikas-dev'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 44,
                    height: 44,
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-hover)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Right column: illustration ── */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                aspectRatio: '1 / 1',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <img
                src='/images/illustration.png'
                alt=''
                aria-hidden='true'
                style={{
                  width: '90%',
                  height: '95%',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  display: 'block',
                  opacity: 0.8,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        :root {
          --illust-bg: #ece8e0;
          --illust-blob: #d4cfc6;
        }
        [data-theme="dark"] {
          --illust-bg: #1a1a1a;
          --illust-blob: #2a2a2a;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-grid > div:last-child {
            order: -1;
            max-width: 280px;
            margin: 0 auto;
          }
          .hero-left {
            gap: 16px !important;
            margin: 0 auto;
            padding-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
