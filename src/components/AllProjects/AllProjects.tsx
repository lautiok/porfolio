import style from "./allProjects.module.css";
import db from "../../db/projects.json";
import Cards from "../cards/Cards";
import { Link } from "@/navigation";
export default function AllProjects() {
  // filtrar por categorias
  const projects = db.projects;

  const Frontend = projects.filter(
    (project) => project.category === "Frontend"
  );

  const Backend = projects.filter((project) => project.category === "Backend");

  return (
    <section className={style.allProjects}>
      <h2 className="animate__animated animate__backInUp ">Frontend</h2>
      <div className={style.Frontend + " animate__animated animate__backInUp"}>
        {Frontend.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Cards {...project} />
          </Link>
        ))}
      </div>
      <h2 className="animate__animated animate__backInUp">Backend</h2>
      <div className={style.Backend + " animate__animated animate__backInUp"}>
        {Backend.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Cards {...project} />
          </Link>
        ))}
      </div>
    </section>
  );
}
