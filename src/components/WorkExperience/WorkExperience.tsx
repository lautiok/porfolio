import { useTranslations } from "next-intl";
import style from "./WorkEsperience.module.css";

export default function WorkExperience() {
  const t = useTranslations("workExperience");

  return (
    <section className={style.WorkExperienceContainer}>
      <h2>{t("title")}</h2>
      <div className={style.Timeline}>
        <div className={style.TimelineItem}>
          <div className={style.TimelinePoint}></div>
          <div className={style.TimelineContent}>
            <h3>{t("hermanosluci.role")}</h3>
            <h4>{t("hermanosluci.title")}</h4>
            <span>{t("hermanosluci.dates")}</span>
            <p>{t("hermanosluci.description")}</p>
          </div>
        </div>
        <div className={style.TimelineItem}>
          <div className={style.TimelinePoint}></div>

          <div className={style.TimelineContent}>
            <h3>{t("carlosaimar.role")}</h3>
            <h4>{t("carlosaimar.title")}</h4>
            <span>{t("carlosaimar.dates")}</span>
            <p>{t("carlosaimar.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
