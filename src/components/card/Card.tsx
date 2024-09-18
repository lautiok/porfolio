/* eslint-disable @next/next/no-img-element */
import { CardsProps } from "@/type/Proyects";
import style from "./card.module.css";

export default function Card({
  title,
  category,
  description,
  image,
  color,
}: any) {
  return (
    <article style={{ backgroundColor: color }} className={style.cards}>
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
