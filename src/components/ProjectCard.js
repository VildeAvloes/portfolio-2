function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        className="project-card__image"
      />

      <div className="project-card__content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-card__links">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
