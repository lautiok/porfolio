/* eslint-disable @next/next/no-img-element */
import { CardsProps } from "@/type/Proyects";
import style from "./Cards.module.css";

export default function Cards({
  title,
  category,
  description,
  image,
  color,
}: CardsProps) {
  return (
    <article style={{ backgroundColor: color }} className={style.cards}>
      <header>
        <h3>{title}</h3>
        <p>{category}</p>
      </header>
      <div className={style.description}>
        <p>{description}</p>
      </div>
      <div className={style.img}>
        <img src={`/${image}`} alt={title} />
      </div>
    </article>
  );
}
