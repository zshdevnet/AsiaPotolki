import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "RU" | "EN" | "TJ";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored =
      typeof window !== "undefined"
        ? window.localStorage.getItem("lang")
        : null;
    if (stored === "RU" || stored === "EN" || stored === "TJ") return stored;
    return "RU";
  });

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
