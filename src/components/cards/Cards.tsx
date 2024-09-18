/* eslint-disable @next/next/no-img-element */
import { CardsProps } from "@/type/Proyects";
import style from "./Cards.module.css";

export default function Cards({ title, category, description, color }: any) {
  return (
    <article style={{ backgroundColor: color }} className={style.cards}>
      <header>
        <h3>{title}</h3>
        <p>{category}</p>
      </header>
      <div className={style.description}>
        <p>{description.slice(0, 90)} ...</p>
      </div>
    </article>
  );
}
