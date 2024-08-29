import AllBlog from "@/components/AllBlog/AllBlog";
import AllBlogsSkeleton from "@/components/AllBlogSkeleton/AllBlogSkeleton";
import { Suspense } from "react";
import styles from "./page.module.css";
import { metadata } from "../layout";

export default async function Page() {
  metadata.title = "Nahuel Guerra - Blog";
  return (
    <main>
      <h2 className={styles.title}>Blog</h2>
      <Suspense fallback={<AllBlogsSkeleton />}>
        <AllBlog />
      </Suspense>
    </main>
  );
}
