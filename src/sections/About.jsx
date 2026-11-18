import { siteConfig } from '../config/site'

export default function About() {
  const github = siteConfig.socials.find(
    (social) => social.label === 'GitHub',
  )

  return (
    <section className="content-section" id="about">
      <div className="section-label">
        01 / {siteConfig.about.label}
      </div>

      <h2>
        {siteConfig.about.heading} <span>{siteConfig.about.highlight}</span>
      </h2>

      <p className="section-intro">
        {siteConfig.about.intro}
      </p>

      <div className="about-panel">
        <div className="about-mark">
          {siteConfig.brand.first}
          <span>{siteConfig.brand.second}</span>
        </div>

        <div>
          <h3>{siteConfig.about.title}</h3>
          <p>{siteConfig.about.description}</p>

          {github && (
            <a
              className="about-github"
              href={github.url}
              target="_blank"
              rel="noreferrer"
            >
              EXPLORE MY GITHUB ↗
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
