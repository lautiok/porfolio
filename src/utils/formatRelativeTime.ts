export const formatRelativeTime = (timestamp: string | number | Date) => {
  const now = new Date();
  const date = new Date(timestamp);
  const differenceInSeconds = Math.floor(
    (now.getTime() - date.getTime()) / 1000
  );

  const rtf = new Intl.RelativeTimeFormat("es-ES", { numeric: "auto" });

  if (differenceInSeconds < 60) {
    return rtf.format(-differenceInSeconds, "second");
  } else if (differenceInSeconds < 3600) {
    const minutes = Math.floor(differenceInSeconds / 60);
    return rtf.format(-minutes, "minute");
  } else if (differenceInSeconds < 86400) {
    const hours = Math.floor(differenceInSeconds / 3600);
    return rtf.format(-hours, "hour");
  } else if (differenceInSeconds < 2592000) {
    // 30 días
    const days = Math.floor(differenceInSeconds / 86400);
    return rtf.format(-days, "day");
  } else if (differenceInSeconds < 31536000) {
    // 12 meses (aproximadamente)
    const months = Math.floor(differenceInSeconds / 2592000);
    return rtf.format(-months, "month");
  } else {
    const years = Math.floor(differenceInSeconds / 31536000);
    return rtf.format(-years, "year");
  }
};
