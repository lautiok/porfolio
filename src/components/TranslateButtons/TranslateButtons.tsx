"use client";

import { useParams, usePathname } from "next/navigation";
import style from "./TranslateButtons.module.css";
import Link from "next/link";

export default function TranslateButton() {
  const { locale } = useParams();
  const pathname = usePathname();

  const generateLocalePath = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  return (
    <div className={style.translateButton}>
      <Link
        href={generateLocalePath("en")}
        className={`${style.link} ${locale === "en" ? style.active : ""}`}
      >
        <button className={style.button}>en</button>
      </Link>
      <span>/</span>
      <Link
        href={generateLocalePath("es")}
        className={`${style.link} ${locale === "es" ? style.active : ""}`}
      >
        <button className={style.button}>es</button>
      </Link>
    </div>
  );
}
