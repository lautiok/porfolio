import AllBlog from "@/components/AllBlog/AllBlog";
import styles from "./page.module.css";
import { metadata } from "../layout";
import Back from "@/components/Back/Back";

export default async function Page() {
  metadata.title = "Nahuel Guerra - Blog";

  return (
    <main>
      <Back />
      <h2 className={styles.title}>Blog</h2>
      <AllBlog />
    </main>
  );
}
