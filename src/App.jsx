import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AboutSkills from './components/AboutSkills'
// import About from './components/About'
// import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ProjectsPage from './pages/ProjectsPage'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <AboutSkills />
        {/* <About /> */}
        {/* <Skills /> */}
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
