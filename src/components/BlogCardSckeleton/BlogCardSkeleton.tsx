import styles from "./BlogCardSkeleton.module.css";

export default function BlogCardSckeleton() {
  return (
    <div className={styles.skeletonBlogCard}>
      <header>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonSubtitle}></div>
      </header>
      <footer>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
      </footer>
    </div>
  );
}
