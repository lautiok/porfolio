/* eslint-disable @next/next/no-img-element */
import CardBlog from "../CardBlog/CardBlog";
import style from "./allblog.module.css";
import ApiBlog from "@/utils/ApiBlog";
export default async function AllBlog() {
  const posts = await ApiBlog();
  return (
    <section className={style.allBlog}>
      {posts.map((post: any) => (
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
