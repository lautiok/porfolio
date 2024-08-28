/* eslint-disable @next/next/no-img-element */
import CardBlog from "../CardBlog/CardBlog";
import style from "./allblog.module.css";
export default async function AllBlog() {
  const api = process.env.API_BLOG;

  const res = await fetch(`${api}`);
  const data = await res.json();

  const lastPost = data.data;

  return (
    <section className={style.allBlog}>
      {lastPost.map((post: any) => (
        <CardBlog
          key={post.id}
          timestamp={post.timestamp}
          caption={post.caption}
          media_url={post.media_url}
          id={post.id}
        />
      ))}
    </section>
  );
}
