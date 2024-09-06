import style from "./Education.module.css";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("education");
  return (
    <section className={style.EducationContainer}>
      <h2>{t("title")}</h2>
      <div className={style.EducationContent}>
        <a
          href="https://www.coderhouse.com/ar/certificados/669a8497e5f9cb001946d516"
          target="_blank"
        >
          <h3>{t("coderhouse.title")}</h3>
          <p>{t("coderhouse.date")}</p>
        </a>
        <p>{t("coderhouse.description")}</p>
      </div>
      <div className={style.EducationContent}>
        <a
          href="https://certificados.campusvirtual.unc.edu.ar/upv/?code=f5b473b2670841649ced6dc3539a2ec4"
          target="_blank"
        >
          <h3>{t("Univercity.title")}</h3>
          <p>{t("Univercity.date")}</p>
        </a>
        <p>{t("Univercity.description")}</p>
      </div>
    </section>
  );
}
