import { useEffect } from 'react'
import {
  ArrowDown,
  CodeXml,
  BriefcaseBusiness,
  Mail,
  Terminal,
} from 'lucide-react'
import { siteConfig } from '../config/site'

export default function Home() {
  const menus = [
    { label: 'HOME', href: '#home', number: '01' },
    { label: 'ABOUT', href: '#about', number: '02' },
    { label: 'SKILLS', href: '#skills', number: '03' },
    { label: 'PROJECTS', href: '#projects', number: '04' },
    { label: 'CONTACT', href: '#contact', number: '05' },
  ]

  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    if (reducedMotion.matches) return

    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2

      root.style.setProperty('--pointer-x', `${x}`)
      root.style.setProperty('--pointer-y', `${y}`)
    }

    const handleScroll = () => {
      root.style.setProperty('--scroll-y', `${window.scrollY * 0.12}px`)
    }

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
      root.style.removeProperty('--pointer-x')
      root.style.removeProperty('--pointer-y')
      root.style.removeProperty('--scroll-y')
    }
  }, [])

  return (
    <section className="home-section" id="home">
      <div className="home-grid"></div>
      <div className="home-glow"></div>

      <header className="topbar">
        <a href="#home" className="brand">
          {siteConfig.brand.first}
          <span>{siteConfig.brand.second}</span>
          <i>{siteConfig.brand.suffix}</i>
        </a>

        <div className="availability">
          <span className="status-dot"></span>
          {siteConfig.availability}
        </div>
      </header>

      <main className="hero-layout">
        <div className="hero-content">
          <div className="eyebrow">
            <Terminal size={15} />
            {siteConfig.role}
          </div>

          <div className="monogram-wrap">
            <div className="monogram">
              {siteConfig.brand.first}
              <span>{siteConfig.brand.second}</span>
            </div>
            <div className="monogram-line"></div>
          </div>

          <p className="hero-kicker">{siteConfig.hero.kicker}</p>

          <h1>
            {siteConfig.hero.title}
            <br />
            into <span>{siteConfig.hero.highlight}</span>
          </h1>

          <p className="hero-description">
            {siteConfig.hero.description}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              EXPLORE MY WORK <ArrowDown size={16} />
            </a>
            <a href="#contact" className="secondary-button">
              LET'S CONNECT
            </a>
          </div>

          <div className="social-links">
            {siteConfig.socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                key={social.label}
              >
                {social.label === 'GitHub' ? (
                  <CodeXml />
                ) : (
                  <BriefcaseBusiness />
                )}
              </a>
            ))}

            {siteConfig.contact.email && (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                aria-label="Email"
              >
                <Mail />
              </a>
            )}
          </div>
        </div>

        <nav className="neon-navigation" aria-label="Main navigation">
          <div className="nav-heading">
            NAVIGATION <span>/ MENU</span>
          </div>

          <div className="nav-circuit">
            {menus.map((menu) => (
              <a
                href={menu.href}
                className="nav-node"
                key={menu.number}
              >
                <span className="node-line"></span>
                <span className="node-dot"></span>
                <span className="node-number">{menu.number}</span>
                <span className="node-label">{menu.label}</span>
                <span className="node-arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="nav-caption">
            SELECT A DESTINATION <span>●</span>
          </div>
        </nav>
      </main>

      <footer className="home-footer">
        <span>{siteConfig.footer.copyright}</span>
        <span>
          {siteConfig.footer.credit}
        </span>
        <span className="scroll-indicator">
          SCROLL TO EXPLORE ↓
        </span>
      </footer>
    </section>
  )
}
