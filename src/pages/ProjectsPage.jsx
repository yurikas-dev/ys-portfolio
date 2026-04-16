import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Navbar from '../components/Navbar'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 96 }}>
        <div className="container">
          {/* Back link */}
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              color: 'var(--text-secondary)',
              marginBottom: 48,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          {/* Header */}
          <div style={{ marginBottom: 64 }}>
            <p className="section-label">All Projects</p>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
            }}>
              Things I've built
            </h1>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
            paddingBottom: 96,
          }} className="all-projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .all-projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .all-projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
