import { Link } from "@/navigation";
import Cards from "../cards/Cards";
import db from "../../db/projects.json";
export default function CardHome() {
  const projects = db.projects[0];
  return (
    <Link className="" href={`/projects/${projects.id}`}>
      <Cards {...projects} />
    </Link>
  );
}
