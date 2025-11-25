import ProjectsList from "../data/Projectslist.js";
import { projectsdata } from "../data/projectsdata.js";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsList projects={projectsdata} />
    </main>
  );
}
