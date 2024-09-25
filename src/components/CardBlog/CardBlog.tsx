/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import style from "./cardblog.module.css";
import { formatRelativeTime } from "@/utils/formatRelativeTime";
import { formatCaptionWithLinks } from "@/utils/formatCaptionWithLinks";
export default function CardBlog({
  id,
  caption,
  media_url,
  timestamp,
}: BlogType) {
  const [isShowingMore, setIsShowingMore] = useState(false);
  const [relativeTime, setRelativeTime] = useState<string>("");

  useEffect(() => {
    setRelativeTime(formatRelativeTime(timestamp));
  }, [timestamp]);

  const formattedText = formatCaptionWithLinks(caption).replace(
    /\n\n/g,
    "<br/><br/>"
  );

  return (
    <article
      key={id}
      className={style.blog + " animate__animated animate__backInUp"}
    >
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
          <p>{relativeTime}</p>
        </div>
      </header>
      <div className={style.blogContent}>
        <p
          dangerouslySetInnerHTML={{
            __html: isShowingMore
              ? formattedText
              : formattedText.slice(0, 200) + "...",
          }}
        />
        {formattedText.length > 100 && (
          <button
            className={style.verMas}
            onClick={() => setIsShowingMore(!isShowingMore)}
          >
            {isShowingMore ? "Ver menos" : "Ver más"}
          </button>
        )}
        <img src={media_url} alt="image post" />
      </div>
    </article>
  );
}
