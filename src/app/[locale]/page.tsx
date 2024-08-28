import Hero from "@/components/Hero/Hero";
import GridComponents from "@/components/GridComponents/GridComponents";
import style from "./page.module.css";
export default function Home() {
  return (
    <main className={style.main}>
      <Hero />
      <GridComponents />
    </main>
  );
}
