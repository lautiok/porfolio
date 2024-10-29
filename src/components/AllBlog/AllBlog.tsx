"use client";
import { useEffect, useState } from "react";
import CardBlog from "../CardBlog/CardBlog";
import style from "./allblog.module.css";
import AllBlogsSkeleton from "../AllBlogSkeleton/AllBlogSkeleton";
export default function AllBlog() {
  const [posts, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const api = process.env.NEXT_PUBLIC_API_BLOG;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${api}`);
      const data = await res.json();
      const posts = data.data;
      setPosts(posts);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }
  

  return (
    <section className={style.allBlog}>
      {isloading ? (
        <AllBlogsSkeleton />
      ) : (
        posts.map((post: any) => (
          <CardBlog
            key={post.id}
            timestamp={post.timestamp}
            caption={post.caption}
            media_url={post.media_url}
            id={post.id}
          />
        ))
      )}
    </section>
  );
}
