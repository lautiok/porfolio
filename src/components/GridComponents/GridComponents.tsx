import { useTranslations } from "next-intl";
import BlogCard from "../BlogCard/BlogCard";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import { TechnologiesClient } from "../Technologies/TechnologiesClient";
import WorkExperience from "../WorkExperience/WorkExperience";
import style from "./GridComponents.module.css";
import CardHome from "../CardHome/CardHome";
import { Suspense } from "react";
import BlogCardSkeleton from "../BlogCardSckeleton/BlogCardSkeleton";
export default function GridComponents() {
  const t = useTranslations("technologies");
  const e = useTranslations("contact");
  return (
    <section
      className={
        style.GridComponentsContainer + " animate__animated animate__backInUp"
      }
    >
      <div className={style.GridComponents}>
        <div className={style.derecha}>
          <CardHome />
          <Education />
          <Contact
            title={e("title")}
            name={e("name")}
            email={e("email")}
            message={e("message")}
            send={e("send")}
            sussess={e("sussess")}
          />
        </div>
        <div className={style.izquierda}>
          <Suspense fallback={<BlogCardSkeleton />}>
            <BlogCard />
          </Suspense>
          <WorkExperience />
          <TechnologiesClient title={t("title")} select={t("select")} />
        </div>
      </div>
    </section>
  );
}
