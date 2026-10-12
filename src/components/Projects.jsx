import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal as="h2">Projects</Reveal>
        <div className="projects">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
