"use client";

import Link from "next/link";
import style from "./notfoud.module.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body className={style.body}>
        <main className={style.main}>
          <h1>404</h1>
          <p>Page not found</p>
          <Link href="/">Go Home</Link>
        </main>
      </body>
    </html>
  );
}
