/* eslint-disable react-hooks/rules-of-hooks */
import AllProjects from "@/components/AllProjects/AllProjects";
import style from "./page.module.css";
import { useTranslations } from "next-intl";
import Back from "@/components/Back/Back";
import { metadata } from "../layout";

export default function projects() {
  metadata.title = "Nahuel Guerra - Projects";
  const t = useTranslations("nav");
  return (
    <>
      <main>
        <h2 className={style.title}>{t("projects")}</h2>
        <AllProjects />
      </main>
    </>
  );
}
