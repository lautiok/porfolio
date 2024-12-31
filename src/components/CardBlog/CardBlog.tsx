/* eslint-disable @next/next/no-img-element */
import style from "./cardblog.module.css";
import { formatRelativeTime } from "@/utils/formatRelativeTime";
import { formatCaptionWithLinks } from "@/utils/formatCaptionWithLinks";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CardBlog({ id, caption, timestamp }: BlogType) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(formatRelativeTime(timestamp));
  }, [timestamp]);

  const formattedCaption = formatCaptionWithLinks(caption).replace(
    /\n\n/g,
    "<br/><br/>"
  );

  const heroImageSrc =
    caption.match(/<img.*?src="(.*?)"/)?.[1] ?? "default-image.jpg";

  return (
    <Link href={`/es/blog/${id}`} key={id} className={style.blog}>
      <header>
        <div className={style.avatar}>
          <img src="/foto-principal-lik.webp" alt="post" />
        </div>
        <div className={style.infoAvatar}>
          <h2>Nahuel Guerra</h2>
          <p>
            Desarrollador Full Stack | Programación informática, aplicaciones
            específicas
          </p>
          <p>{time}</p>
        </div>
      </header>
      <div className={style.blogContent}>
        <p>{formattedCaption.replace(/<[^>]+>/g, "").substring(0, 100)}...</p>
        <img src={heroImageSrc} alt="hero" />
      </div>
    </Link>
  );
}
