import { useTranslations } from "next-intl";
import style from "./Header.module.css";

import TranslateButton from "../TranslateButtons/TranslateButtons";
import { Link } from "@/navigation";
export default function Header() {
  const t = useTranslations("nav");
  return (
    <header className={style.header}>
      <section className={style.logo}>
        <h1>
          <Link href="/">Nahuel Guerra</Link>
        </h1>
      </section>
      <section className={style.navTranslate}>
        <nav>
          <ul>
            <li>
              <Link href="/">{t("home")}</Link>
            </li>
            <li>
              <Link href="/projects">{t("projects")}</Link>
            </li>
            <li>
              <Link href="/blog">{t("blog")}</Link>
            </li>
          </ul>
        </nav>
        <TranslateButton />
      </section>
    </header>
  );
}
