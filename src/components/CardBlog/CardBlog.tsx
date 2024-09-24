import { useState } from "react";
/* eslint-disable @next/next/no-img-element */
import style from "./cardblog.module.css";

export default function CardBlog({
  id,
  caption,
  media_url,
  timestamp,
}: BlogType) {
  const [isShowingMore, setIsShowingMore] = useState(false);

  // Función para reemplazar los enlaces por etiquetas <a>
  const formatCaptionWithLinks = (text: string) => {
    const urlPattern = /(\bhttps?:\/\/[^\s]+)/g;
    return text.replace(urlPattern, function (url: string) {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
  };

  // Primero formateamos los links y luego los saltos de línea
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
            Desarrollador Backend | Programación informática, aplicaciones
            específicas
          </p>
          <p>
            {new Date(timestamp).toLocaleString("es-ES", {
              dateStyle: "short",
            })}
          </p>
        </div>
      </header>
      <div className={style.blogContent}>
        <p
          dangerouslySetInnerHTML={{
            __html: isShowingMore
              ? formattedText
              : formattedText.slice(0, 800) + "...",
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
        <img src={media_url} alt="imgage post" />
      </div>
    </article>
  );
}
