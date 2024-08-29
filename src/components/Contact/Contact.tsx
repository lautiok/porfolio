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
  loading,
}: ContactProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendEmail = async () => {
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Todos los campos son obligatorios");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setIsFlipped(true);
        setIsLoading(false);
      } else {
        console.error("Error enviando correo:", response.statusText);
        setError(
          "Hemos tenido un problema, intenta comunicarte por el siguiente medio: nahuelguerra56b@gmail.com"
        );
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error enviando correo:");
      setError(
        "Hemos tenido un problema al enviar el correo, intenta comunicarte conmigo por el siguiente medio: nahuelguerra56b@gmail.com"
      );
      setIsLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className={`${style.CardContainer} ${isFlipped ? style.Flipped : ""}`}
    >
      <div className={style.ContactContainer}>
        <h1>{title}</h1>
        {error && <p className={style.Error}>{error}</p>}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder={name}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder={email}
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder={message}
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? loading : send}
          </button>
        </form>
      </div>
      <div className={style.Back}>
        <h2>
          <span>✔</span> {sussess}
        </h2>
      </div>
    </div>
  );
}
