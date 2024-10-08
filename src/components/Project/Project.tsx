/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useParams } from "next/navigation";
import dbEn from "../../db/projects-en.json";
import dbEs from "../../db/projects_es.json";
import style from "./project.module.css";
import { TranslatePropsProject } from "@/type/Proyects";
export default function Project({
  notproject,
  repository,
  live,
}: TranslatePropsProject) {
  const { id, locale } = useParams();

  const db = locale === "es" ? dbEs : dbEn;

  const project = db.projects.find((project) => project.id === id);

  if (!project) {
    return <h1>{notproject}</h1>;
  }

  return (
    <section className={style.project}>
      <div className={style.container + " animate__animated animate__backInUp"}>
        <p className={style.category}>
          {project.techologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </p>
        <h1> {project.title}</h1>
        <p className={style.description}>{project.description}</p>
      </div>
      <div className={style.btn + " animate__animated animate__backInUp"}>
        {project.repository ? (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className={style.btnLink}
          >
            {repository}
          </a>
        ) : (
          ""
        )}

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={style.btnLink}
          >
            {live}
          </a>
        ) : (
          ""
        )}
      </div>
      {project.images?.map((image) => (
        <img
          className="animate__animated animate__backInUp"
          src={`/${image.image}`}
          alt="project"
          key={image.id}
        />
      ))}
    </section>
  );
}
