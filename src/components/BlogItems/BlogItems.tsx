/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import style from "./blogitems.module.css";
import { useParams } from "next/navigation";
import { tailspin } from "ldrs";

interface BlogItem {
  id: string;
  title: string;
  content: string;
  labels?: string[];
  author: {
    displayName: string;
  };
  published: string;
}

export default function BlogItems() {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<BlogItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const api = process.env.NEXT_PUBLIC_API_BLOG;
  const IDBLOG = process.env.NEXT_PUBLIC_ID_BLOG;
  tailspin.register();

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${IDBLOG}/posts/${id}?key=${api}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: BlogItem = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching item:", error);
        setError("Failed to fetch the blog item");
        setItems(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, [id, api, IDBLOG]);

  if (isLoading) {
    return (
      <div className={style.loading}>
        <l-tailspin size="40" stroke="5" speed="0.9" color="black"></l-tailspin>
      </div>
    );
  }

  if (error) {
    return <div className={style.errorMessage}>{error}</div>;
  }

  if (!items) {
    return <div className={style.noItems}>No items found</div>;
  }

  const extractImageSrc = (content: string) => {
    const match = content.match(/<img.*?src="(.*?)"/);
    return match ? match[1] : "/default-image.jpg";
  };

  return (
    <div className={style.item + " animate__animated animate__backInUp"}>
      <div className={style.itemContainer} key={items.id}>
        <div className={style.itemHeader}>
          <div className={style.itemCategory}>
            <p>{items.labels?.[0] || "Uncategorized"}</p>
          </div>
          <h1 className={style.itemTitle}>{items.title}</h1>
          <p className={style.itemAuthor}>By {items.author.displayName}</p>
        </div>
        <div className={style.itemImg}>
          <img src={extractImageSrc(items.content)} alt={items.title} />
        </div>
        <div className={style.itemContent}>
          <p>{items.content.replace(/<[^>]+>/g, "")}</p>
        </div>
        <p className={style.itemFecha}>
          {new Date(items.published).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
