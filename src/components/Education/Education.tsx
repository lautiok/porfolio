import style from "./Education.module.css";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("education");
  return (
    <section className={style.EducationContainer}>
      <h2>{t("title")}</h2>
      <div className={style.EducationContent}>
        <header>
          <h3>{t("coderhouse.title")}</h3>
          <p>{t("coderhouse.date")}</p>
        </header>
        <p>{t("coderhouse.description")}</p>
      </div>
      <div className={style.EducationContent}>
        <header>
          <h3>{t("Univercity.title")}</h3>
          <p>{t("Univercity.date")}</p>
        </header>
        <p>{t("Univercity.description")}</p>
      </div>
    </section>
  );
}
