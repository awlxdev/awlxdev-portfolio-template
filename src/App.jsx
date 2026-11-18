import { useEffect } from 'react'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { siteConfig } from './config/site'
import './styles/App.css'

function App() {
  useEffect(() => {
    document.title = siteConfig.seo.title
    document.documentElement.lang = siteConfig.language
    document.documentElement.style.setProperty('--lime', siteConfig.theme.accent)

    const description = document.querySelector(
      'meta[name="description"]',
    )

    if (description) {
      description.setAttribute(
        'content',
        siteConfig.seo.description,
      )
    }

    const themeColor = document.querySelector(
      'meta[name="theme-color"]',
    )

    if (themeColor) {
      themeColor.setAttribute(
        'content',
        siteConfig.seo.themeColor,
      )
    }
  }, [])

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App

