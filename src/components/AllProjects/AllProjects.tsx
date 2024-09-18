import style from "./allProjects.module.css";
import db from "../../db/projects.json";
import Cards from "../cards/Cards";
import { Link } from "@/navigation";

export default function AllProjects() {
  const projects = db.projects;
  const Frontend = projects.filter(
    (project) => project.category === "Frontend"
  );
  const Backend = projects.filter((project) => project.category === "Backend");
  return (
    <section className={style.allProjects}>
      <h2 className="animate__animated animate__backInUp">Frontend</h2>
      <div className={style.Frontend + " animate__animated animate__backInUp"}>
        {Frontend.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Cards
              title={project.title}
              category={project.category}
              description={project.description}
              color={project.color}
            />
          </Link>
        ))}
      </div>

      <h2 className="animate__animated animate__backInUp">Backend</h2>
      <div className={style.Backend + " animate__animated animate__backInUp"}>
        {Backend.map((project) => (
          <a
            key={project.id}
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cards
              title={project.title}
              category={project.category}
              description={project.description}
              color={project.color}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
