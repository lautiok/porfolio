/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import style from "./technologies.module.css";
import { TechnologiesClientProps } from "@/type/technology";

export const TechnologiesClient = ({
  title,
  select,
}: TechnologiesClientProps) => {
  const [hoveredTech, setHoveredTech] = useState<string>(select);

  const handleMouseEnter = (techName: string) => {
    setHoveredTech(techName);
  };

  return (
    <section className={style.TechnologiesContainer}>
      <header>
        <h2>{title}:</h2>
        <div>
          <p>{hoveredTech}</p>
        </div>
      </header>
      <div className={style.Technologies}>
        <a
          href="https://developer.mozilla.org/es/docs/Web/HTML"
          target="_blank"
        >
          <div
            className={style.TechnologiesItem}
            onMouseEnter={() => handleMouseEnter("HTML")}
          >
            <img src="/html.webp" alt="HTML" />
          </div>
        </a>
        <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
          <div
            className={style.TechnologiesItem}
            onMouseEnter={() => handleMouseEnter("CSS")}
          >
            <img src="/css.webp" alt="CSS" />
          </div>
        </a>
        <a href="https://sass-lang.com/documentation/" target="_blank">
          <div
            className={style.TechnologiesItem}
            onMouseEnter={() => handleMouseEnter("SASS")}
          >
            <img src="/sass.webp" alt="SASS" />
          </div>
        </a>
        <a
          href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
          target="_blank"
        >
          <div
            className={style.TechnologiesItem}
            onMouseEnter={() => handleMouseEnter("Bootstrap")}
          >
            <img src="/bootstrap.webp" alt="Bootstrap" />
          </div>
        </a>
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="_blank"
        >
          <div
            className={style.TechnologiesItem}
            onMouseEnter={() => handleMouseEnter("JavaScript")}
          >
            <img src="/js.webp" alt="JavaScript" />
          </div>
        </a>
        <a href="https://react.dev/learn" target="_blank">
          <div
            className={style.TechnologiesItem}
            onMouseEnter={() => handleMouseEnter("ReactJS")}
          >
            <img src="/react.webp" alt="ReactJS" />
          </div>
        </a>
        <a href="https://nodejs.org/docs/latest/api/" target="_blank">
          <div
            className={style.TechnologiesItem}
            onMouseEnter={() => handleMouseEnter("NodeJS")}
          >
            <img src="/node.webp" alt="NodeJS" />
          </div>
        </a>
        <a
          href="https://www.mongodb.com/es/company/what-is-mongodb"
          target="_blank"
        >
          <div
            className={style.TechnologiesItem}
            onMouseEnter={() => handleMouseEnter("MongoDB")}
          >
            <img src="/mongo.webp" alt="MongoDB" />
          </div>
        </a>
        <a href="https://www.typescriptlang.org/docs/" target="_blank">
          <div
            className={style.TechnologiesItem}
            onMouseEnter={() => handleMouseEnter("TypeScript")}
          >
            <img src="/typescript.webp" alt="TypeScript" />
          </div>
        </a>
      </div>
    </section>
  );
};
