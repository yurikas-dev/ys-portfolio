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
                Frontend developer with a passion for crafting clean interfaces
                and meaningful digital experiences. Based in Tokyo, Japan.
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
            </div>
          </div>

          {/* ── Right column: illustration ── */}
          <div style={{ position: 'relative' }}>
            {/* Decorative background blob (commented out) */}
            {/* <div style={{
              position: 'absolute',
              inset: '-10%',
              borderRadius: '60% 40% 55% 45% / 50% 45% 55% 50%',
              background: 'var(--illust-blob)',
              filter: 'blur(40px)',
              opacity: 0.6,
              pointerEvents: 'none',
              zIndex: 0,
            }} /> */}

            {/* Illustration frame — background & border commented out */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                /* borderRadius: 24, */
                /* overflow: 'hidden', */
                /* background: 'var(--illust-bg)', */
                /* border: '1px solid var(--border)', */
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
