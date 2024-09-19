import { Link } from "@/navigation";
import db from "../../db/projects.json";
import Card from "../card/Card";

export default function CardHome() {
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
 