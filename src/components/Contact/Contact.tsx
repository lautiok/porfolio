"use client";
import { useState } from "react";
import style from "./contact.module.css";
import { ContactProps } from "@/type/Contact";

export default function Contact({
  title,
  name,
  email,
  message,
  send,
  sussess,
}: ContactProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSendEmail = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsFlipped(true);
    } catch (error) {
      console.error("Error enviando correo:", error);
    }
  };

  return (
    <div
      id="contact"
      className={`${style.CardContainer} ${isFlipped ? style.Flipped : ""}`}
    >
      <div className={style.ContactContainer}>
        <h1>{title}</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <input type="text" placeholder={name} required />
          <input type="email" placeholder={email} required />
          <textarea placeholder={message} required />
          <button type="submit">{send}</button>
        </form>
      </div>
      <div className={style.Back}>
        <h2>
          {" "}
          <span>✔</span> {sussess}
        </h2>
      </div>
    </div>
  );
}
