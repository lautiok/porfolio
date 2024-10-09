"use client";
import { useRouter } from "next/navigation";
import style from "./back.module.css";
import { ArrowLeft } from "lucide-react";

export default function Back() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // Si no hay historial, vuelve al home
    }
  };

  return (
    <div className={style.Back}>
      <button onClick={handleBack}>
        <ArrowLeft color="black" size={20} />
      </button>
    </div>
  );
}
