"use client";
import { useEffect, useState } from "react";
import CardBlog from "../CardBlog/CardBlog";
import style from "./allblog.module.css";
export default function AllBlog() {
  const [posts, setPosts] = useState([]);
  const api = process.env.NEXT_PUBLIC_API_BLOG;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${api}`);
      const data = await res.json();
      const posts = data.data;
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  console.log(posts);

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
