import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Selected work</p>
        <h2>My Projects</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
