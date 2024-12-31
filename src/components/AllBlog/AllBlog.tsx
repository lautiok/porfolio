"use client";
import { useEffect, useState } from "react";
import CardBlog from "../CardBlog/CardBlog";
import style from "./allblog.module.css";
import { tailspin } from "ldrs";

export default function AllBlog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const api = process.env.NEXT_PUBLIC_API_BLOG;
  const IDBLOG = process.env.NEXT_PUBLIC_ID_BLOG;
  tailspin.register();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${IDBLOG}/posts?key=${api}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        const posts = data.items || [];
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [api, IDBLOG]);

  if (isLoading) {
    return (
      <div>
        <l-tailspin size="40" stroke="5" speed="0.9" color="black"></l-tailspin>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <section className={style.allBlog + " animate__animated animate__backInUp"}>
      {posts.map((post: any) => (
        <CardBlog
          key={post.id}
          timestamp={post.published}
          caption={post.content}
          id={post.id}
        />
      ))}
    </section>
  );
}
