import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const homeLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  const navBg = scrolled
    ? 'rgba(248,248,246,0.92)'
    : 'transparent'

  const navBorder = scrolled
    ? '1px solid rgba(0,0,0,0.08)'
    : '1px solid transparent'

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: navBg,
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: navBorder,
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.05em',
          color: 'var(--text-primary)',
        }}>
          YS<span style={{ color: 'var(--text-tertiary)' }}>.dev</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 32 }} className="desktop-nav">
          {isHome ? (
            homeLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{ fontSize: 13, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </a>
            ))
          ) : (
            <Link
              to="/"
              style={{ fontSize: 13, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              Home
            </Link>
          )}
        </nav>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            cursor: 'pointer',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            transition: 'all 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--border-hover)'
            e.currentTarget.style.color = 'var(--text-primary)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
        >
          {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            display: 'none',
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: 22,
              height: 1.5,
              background: menuOpen && i === 1 ? 'transparent' : 'var(--text-primary)',
              transition: 'all 0.2s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                  : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                  : 'none'
                : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid var(--border)',
          background: 'rgba(248,248,246,0.98)',
          backdropFilter: 'blur(12px)',
        }}>
          {isHome ? homeLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '14px 20px',
                fontSize: 14,
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link.label}
            </a>
          )) : (
            <Link
              to="/"
              style={{
                display: 'block',
                padding: '14px 20px',
                fontSize: 14,
                color: 'var(--text-secondary)',
              }}
            >
              Home
            </Link>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
