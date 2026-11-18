import { siteConfig } from '../config/site'

export default function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="section-label">02 / EXPERTISE</div>

      <h2>
        Tools of my <span>trade.</span>
      </h2>

      <p className="section-intro">
        Technologies and areas I work with and continue to explore.
      </p>

      {siteConfig.skills.length > 0 ? (
        <div className="skills-grid">
          {siteConfig.skills.map(([number, title, detail]) => (
            <article className="skill-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="about-panel">
          <div>
            <h3>Add your skills</h3>
            <p>
              Edit src/data/skills.js to add your technologies and areas
              of expertise.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
