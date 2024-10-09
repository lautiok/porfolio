/* eslint-disable @next/next/no-img-element */
import { CardProps } from "@/type/Proyects";
import style from "./Cards.module.css";

export default function Cards({
  title,
  category,
  description,
  image,
  color,
}: CardProps) {
  return (
    <article className={style.cards}>
      <header>
        <h3>{title}</h3>
        <p>{category}</p>
      </header>
      <div className={style.description}>
        <p>{description.slice(0, 90)} ...</p>
      </div>
      {image && (
        <div className={style.img}>
          <img src={`/${image}`} alt={title} />
        </div>
      )}
    </article>
  );
}
