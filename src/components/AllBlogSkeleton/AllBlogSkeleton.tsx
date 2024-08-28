import React from "react";
import styles from "./allblogskeleton.module.css";

const AllBlogsSkeleton: React.FC = () => {
  const skeletonArray = Array(3).fill(0);

  return (
    <section className={styles.allBlog}>
      {skeletonArray.map((_, index) => (
        <article key={index} className={styles.blog}>
          <header>
            <div className={styles.avatar}>
              <div className={styles.skeletonCircle}></div>
            </div>
            <div className={styles.infoAvatar}>
              <div className={styles.skeletonLine}></div>
              <div className={styles.skeletonLine}></div>
              <div className={styles.skeletonLine}></div>
            </div>
          </header>
          <div className={styles.blogContent}>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonImage}></div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default AllBlogsSkeleton;
