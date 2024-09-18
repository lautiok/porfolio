import { Link } from "@/navigation";
import db from "../../db/projects.json";
import Card from "../card/Card";
export default function CardHome() {
  const projects = db.projects[0];
  return (
    <Link className="" href={`/projects/${projects.id}`}>
      <Card {...projects} />
    </Link>
  );
}
