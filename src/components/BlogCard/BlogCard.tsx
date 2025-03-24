import { Link } from "@/navigation";
import style from "./blogCard.module.css";
import { useTranslations } from "next-intl";

export default async function BlogCard() {
  const t = useTranslations("blog");

  const api = process.env.NEXT_PUBLIC_API_BLOG;
  const IDBLOG = process.env.NEXT_PUBLIC_ID_BLOG;

  const res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${IDBLOG}/posts?key=${api}`
  );
  const data = await res.json();

  console.log("data", data);

  if (!data || data.length === 0) {
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

  const lastPost = data.items[0];

  return (
    <Link href={`/blog`}>
      <article className={style.blogCard}>
        <header>
          <h3>{t("title")}</h3>
          <p>Last Post</p>
        </header>
        <footer>
          <p>{lastPost.title.slice(0, 100) + "..."}</p>
        </footer>
      </article>
    </Link>
  );
}
