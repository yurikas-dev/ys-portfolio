const experiences = [
  {
    type: 'work',
    title: 'IT Device Management Assistant (Co-op)',
    org: 'CyberAgent, Inc.',
    period: 'Jan 2025 - Apr 2025',
    location: 'Tokyo, Japan',
    details: [
      'Built and maintained a centralized device management list by aggregating data from internal systems and MDM databases.',
      'Ensured accurate, timely device information by performing error-free data manipulation and weekly discrepancy checks between spreadsheet records and live MDM data.',
      'Communicated professionally across departments and external subsidiaries, minimize user disruption, and maintain data confidentiality.',
    ],
    tags: ['JavaScript'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    org: 'Qualia Systems Inc.',
    period: 'Jan 2024 - Sep 2024',
    location: 'Remote',
    details: [
      'Contributed to the development of a CRM application, streamlined client interactions and improved data management.',
      'Optimized SQL queries, reduced data collection time and enhanced database performance.',
      'Updated and maintained responsive UI components using Vue.js and Vuetify, improved user experience.',
      'Fostered smooth communication within the team by reporting progress regularly and sharing relevant information, ensured alignment and efficiency throughout the project lifecycle.',
      'Facilitated the smooth adoption of frameworks and libraries by leveraging knowledge and experience from previous projects.',
    ],
    tags: ['Laravel', 'Vue.js'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    org: 'Qualia Systems Inc.',
    period: 'Apr 2021 - Mar 2023',
    location: 'Tokyo, Japan',
    details: [
      'Designed reusable components, reduced development time and improved maintainability.',
      'Led the migration from Laravel to a RESTful API, enhanced scalability and system performance.',
      'Collaborated with cross-functional teams, ensured seamless knowledge sharing and high-quality product delivery.',
      'Utilized modern frameworks and tools, including Nuxt.js, Oruga UI, enhanced the user experience.',
      'Designed and implemented additional MySQL database tables, supported new system features.',
    ],
    tags: ['Laravel', 'Phalcon', 'Nuxt.js', 'Vue.js'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    org: 'Imin Inc.',
    period: 'Feb 2020 - Mar 2021',
    location: 'Tokyo, Japan',
    details: [
      'Transitioned a Construction Management and Accounting System to a cloud-based solution, modernized operations with an intuitive user interface and optimized data structure.',
      'Proactively communicated with clients and thoroughly reviewed specifications and requirements, prevented misunderstandings and ensured the delivery of solutions aligned with their needs.',
      'Conducted code reviews to identify areas for improvement, enhanced overall code quality.',
      'Migrated an on-premises service to a web-based application using an MVC framework, improved accessibility and scalability.',
    ],
    tags: ['Laravel', 'CakePHP', 'Phalcon', 'JavaScript'],
  },
];

const education = [
  {
    type: 'edu',
    title: 'Computer Programming Co-op Diploma',
    org: 'Georgian College',
    period: 'Jan 2024 - Aug 2025',
    location: 'Barrie, ON',
    details: [],
    tags: ['GPA 3.92', "Dean's List — All Semesters"],
  },
];

function TimelineItem({ item, isLast }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gap: 32,
        paddingBottom: isLast ? 0 : 40,
        marginBottom: isLast ? 0 : 40,
        borderBottom: isLast ? 'none' : '1px solid var(--border)',
      }}
      className='timeline-item'
    >
      {/* Left: period */}
      <div style={{ paddingTop: 2 }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'var(--text-tertiary)',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
          }}
        >
          {item.period}
        </span>
      </div>

      {/* Right: content */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 12,
            marginBottom: 4,
            flexWrap: 'wrap',
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
            }}
          >
            {item.title}
          </h3>
          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
            @ {item.org}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: 'var(--text-tertiary)',
            }}
          >
            {item.location}
          </span>
        </div>

        {item.type === 'work' && item.details.length > 0 && (
          <ul style={{ paddingLeft: 16, marginBottom: 14 }}>
            {item.details.map((detail) => (
              <li
                key={detail}
                style={{
                  fontSize: 14,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {detail}
              </li>
            ))}
          </ul>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {item.tags.map((tag) => (
            <span key={tag} className='tag'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id='experience' className='section'>
      <div className='container'>
        <p className='section-label'>Experience & Education</p>

        {/* Work */}
        <div style={{ marginBottom: 64 }}>
          <h2
            className='section-title'
            style={{
              marginBottom: 40,
              fontSize: 16,
              fontWeight: 500,
              color: 'var(--text-secondary)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Work
          </h2>
          {experiences.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        {/* Education */}
        <div>
          <h2
            style={{
              marginBottom: 40,
              fontSize: 16,
              fontWeight: 500,
              color: 'var(--text-secondary)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Education
          </h2>
          {education.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              isLast={i === education.length - 1}
            />
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
  );
}
