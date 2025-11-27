import ProjectsList from "../data/Projectslist.js";
import { projectsdata } from "../data/projectsdata.js";

export default function ProjectsPage() {
  return (
    <main className="mt-5" >
      <ProjectsList projects={projectsdata} />
    </main>
  );
}
