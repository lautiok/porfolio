import { useTranslations } from "next-intl";
import style from "./not.module.css";
import { Link } from "@/navigation";
export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <section className={style.not}>
      <h1>404</h1>
      <p>{t("title")}</p>
      <Link href="/">{t("btn")}</Link>
    </section>
  );
}
