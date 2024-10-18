"use client";

import { useEffect, useState } from "react";
import style from "./allProjects.module.css";
import dbEs from "../../db/projects_es.json";
import dbEn from "../../db/projects-en.json";
import { Link } from "@/navigation";
import { useParams } from "next/navigation";
import Card from "../card/Card";

export default function AllProjects() {
  const { locale } = useParams();
  const db = locale === "es" ? dbEs : dbEn;

  // Estado para controlar el orden, se inicializa desde localStorage
  const [isFrontendFirst, setIsFrontendFirst] = useState(() => {
    // Leer del localStorage y convertirlo a booleano
    const savedPreference = localStorage.getItem("isFrontendFirst");
    return savedPreference === null ? true : JSON.parse(savedPreference);
  });

  const projects = db.projects;
  const Frontend = projects.filter(
    (project) => project.category === "Frontend"
  );
  const Backend = projects.filter((project) => project.category === "Backend");

  // Guardar la preferencia en localStorage cada vez que cambie el estado
  useEffect(() => {
    localStorage.setItem("isFrontendFirst", JSON.stringify(isFrontendFirst));
  }, [isFrontendFirst]);

  return (
    <>
      {/* Mantén los botones fuera del contenedor que se invierte */}
      <div
        className={style.filterButtons + " animate__animated animate__backInUp"}
      >
        <button
          onClick={() => setIsFrontendFirst(true)}
          className={isFrontendFirst ? style.active : ""}
        >
          Frontend
        </button>
        <button
          onClick={() => setIsFrontendFirst(false)}
          className={!isFrontendFirst ? style.active : ""}
        >
          Backend
        </button>
      </div>

      <section
        className={`${style.allProjects} ${
          isFrontendFirst ? "" : style.columnReverse
        }`}
      >
        {/* Sección de Frontend */}
        <div
          className={style.Frontend + " animate__animated animate__backInUp"}
        >
          {Frontend.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card
                title={project.title}
                category={project.category}
                description={project.description}
                image={project.images?.[0].image}
                color={project.color}
              />
            </Link>
          ))}
        </div>

        {/* Sección de Backend */}
        <div className={style.Backend + " animate__animated animate__backInUp"}>
          {Backend.map((project) => (
            <a
              key={project.id}
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                title={project.title}
                category={project.category}
                description={project.description}
                color={project.color}
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
