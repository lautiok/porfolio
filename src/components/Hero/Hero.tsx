/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import style from "./hero.module.css";
import { Link } from "@/navigation";
import { Linkedin, Github, Download } from "lucide-react";
export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className={style.hero + " animate__animated animate__backInUp"}>
      <div className={style.heroContent}>
        <h2>{t("title")}</h2>
        <p className={style.heroDescription}>{t("description")}</p>
        <div className={style.heroBtn}>
          <Link className={style.button} href="#contact">
            {t("btn")}
          </Link>
          <a
            className={style.buttonRedes}
            href="https://www.linkedin.com/in/nahuel-guerra/"
            target="_blank"
            aria-label="ir a linkedin"
          >
            <Linkedin color="black" size={20} />
          </a>
          <a
            className={style.buttonRedes}
            href="https://github.com/lautiok"
            target="_blank"
            aria-label="ir a github"
          >
            <Github color="black" size={20} />
          </a>
          <a
            className={style.buttonRedes}
            href="https://drive.google.com/uc?export=download&id=1V4el4Yf3rD2_Fvj_ltp9ZETAIA9D9i-Y"
            aria-label="descargar cv"
          >
            <Download color="black" size={20} />
          </a>
        </div>
      </div>
      <div className={style.heroImg}>
        <img src="/foto-principal-lik.webp" alt="logo" />
      </div>
    </section>
  );
}
