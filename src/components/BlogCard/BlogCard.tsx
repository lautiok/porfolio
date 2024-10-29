import { Link } from "@/navigation";
import style from "./blogCard.module.css";
import { useTranslations } from "next-intl";

export default async function BlogCard() {
  const t = useTranslations("blog");

  const api = process.env.NEXT_PUBLIC_API_BLOG;

  const res = await fetch(`${api}`);
  const data = await res.json();

  if (!data.data) {
    return (
      <div>
        <article className={style.skeletonBlogCard}>
          <header>
            <div className={`${style.title}`}></div>
            <div className={`${style.date}`}></div>
          </header>
          <footer>
            <div className={`${style.caption}`}></div>
          </footer>
        </article>
      </div>
    );
  }

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
