import { Link } from "@/navigation";
import style from "./blogCard.module.css";
import { useTranslations } from "next-intl";

export default async function BlogCard() {
  const t = useTranslations("blog");

  const api = process.env.API_BLOG;

  const res = await fetch(`${api}`);
  const data = await res.json();

  const lastPost = data.data[0];

  return (
    <Link href={`/blog`}>
      <article className={style.blogCard}>
        <header>
          <h3>{t("title")}</h3>
          <p>Last Post</p>
        </header>
        <footer>
          <p>{lastPost.caption.slice(0, 100) + "..."}</p>
        </footer>
      </article>
    </Link>
  );
}
