// placeholder gradient colors for project thumbnails
// Replace `image` with a real URL (e.g. '/images/project-alpha.png') when ready.

export const projects = [
  {
    id: 'project-alpha',
    title: 'Project Alpha',
    description:
      'A full-stack web application for managing team workflows. Built with real-time collaboration features and an intuitive drag-and-drop interface.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com/yourname/project-alpha',
    demo: null,
    year: '2024',
    type: 'Web App',
    image: null,           // replace with '/images/project-alpha.png'
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
    featured: true,
  },
  {
    id: 'design-system',
    title: 'Design System',
    description:
      'Scalable component library and design token system used across multiple products. Includes comprehensive documentation and Storybook integration.',
    tags: ['TypeScript', 'Storybook', 'CSS Modules', 'Figma'],
    github: 'https://github.com/yourname/design-system',
    demo: null,
    year: '2024',
    type: 'Library',
    image: null,
    gradient: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    description:
      'High-performance storefront with server-side rendering, advanced filtering, and seamless checkout flow optimized for conversion.',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Vercel'],
    github: 'https://github.com/yourname/ecommerce',
    demo: null,
    year: '2023',
    type: 'Web App',
    image: null,
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
    featured: true,
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description:
      'Data visualization dashboard with interactive charts, customizable widgets, and real-time data feeds for monitoring business metrics.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    github: 'https://github.com/yourname/analytics-dashboard',
    demo: null,
    year: '2023',
    type: 'Dashboard',
    image: null,
    gradient: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)',
    featured: false,
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    description:
      'Cross-platform mobile application with offline-first architecture. Syncs seamlessly when connectivity is restored.',
    tags: ['React Native', 'Expo', 'SQLite', 'Zustand'],
    github: 'https://github.com/yourname/mobile-app',
    demo: null,
    year: '2023',
    type: 'Mobile',
    image: null,
    gradient: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)',
    featured: false,
  },
  {
    id: 'cli-tool',
    title: 'CLI Tool',
    description:
      'Developer productivity CLI for scaffolding projects, running code quality checks, and automating repetitive tasks.',
    tags: ['Node.js', 'TypeScript', 'Commander.js'],
    github: 'https://github.com/yourname/cli-tool',
    demo: null,
    year: '2022',
    type: 'OSS',
    image: null,
    gradient: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    featured: false,
  },
]

export const featuredProjects = projects.filter(p => p.featured)
