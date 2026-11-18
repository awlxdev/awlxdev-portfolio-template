import { siteConfig } from '../config/site'

export default function Projects() {
  return (
    <section className="content-section" id="projects">
      <div className="section-label">03 / SELECTED WORKS</div>

      <h2>
        Things I've <span>built.</span>
      </h2>

      <p className="section-intro">
        A collection of projects, experiments, and digital solutions.
      </p>

      {siteConfig.projects.length > 0 ? (
        <div className="projects-list">
          {siteConfig.projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">
                {project.number}
              </span>

              <div className="project-info">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <span className="project-stack">
                  {project.stack}
                </span>

                {project.license && (
                  <span className="project-stack">
                    {' · '}{project.license}
                  </span>
                )}
              </div>

              <div className="project-side">
                {project.status && (
                  <span className="latest-tag">
                    {project.status}
                  </span>
                )}

                {project.github ? (
                  <a
                    className="project-symbol"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    title="View on GitHub"
                  >
                    ↗
                  </a>
                ) : (
                  <span className="project-symbol">↗</span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="about-panel">
          <div>
            <h3>Your projects will appear here.</h3>
            <p>
              Edit src/data/projects.js to add your portfolio projects.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
