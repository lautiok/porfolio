import Project from "@/components/Project/Project";
import { useTranslations } from "next-intl";
import { metadata } from "../../layout";
import Back from "@/components/Back/Back";

export default function Page() {
  metadata.title = "Nahuel Guerra - Project";
  const t = useTranslations("project");
  return (
    <>
      <main>
        <Back />
        <Project
          notproject={t("notproject")}
          repository={t("repository")}
          live={t("live")}
        />
      </main>
    </>
  );
}
