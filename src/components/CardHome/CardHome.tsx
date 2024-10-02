"use client";
import { Link } from "@/navigation";
import dbEn from "../../db/projects-en.json";
import dbEs from "../../db/projects_es.json";
import Card from "../card/Card";
import { useParams } from "next/navigation";

export default function CardHome() {
  const { locale } = useParams();
  const db = locale === "es" ? dbEs : dbEn;
  const [firstProject] = db.projects;

  if (!firstProject) {
    return null;
  }

  return (
    <Link href={`/projects/${firstProject.id}`}>
      <Card
        title={firstProject.title}
        category={firstProject.category}
        description={firstProject.description}
        image={firstProject.image}
        color={firstProject.color}
      />
    </Link>
  );
}
