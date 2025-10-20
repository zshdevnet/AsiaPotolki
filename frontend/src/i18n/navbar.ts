import type { Lang } from "../context/LanguageContext";

export const navbarTexts: Record<Lang, {
  services: string;
  projects: string;
  materials: string;
  quote: string;
}> = {
  EN: {
    services: "Services",
    projects: "Projects",
    materials: "Materials",
    quote: "Get Quote",
  },
  RU: {
    services: "Услуги",
    projects: "Проекты",
    materials: "Материалы",
    quote: "Расчёт цены",
  },
  TJ: {
    services: "Хизматҳо",
    projects: "Лоиҳаҳо",
    materials: "Маводҳо",
    quote: "Нархнома",
  },
};
