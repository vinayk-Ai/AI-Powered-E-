import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "hi", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("hi");
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}
export function useLang() {
  const { lang, setLang } = useContext(Ctx);
  const t = (en: string, hi: string) => (lang === "en" ? en : hi);
  return { lang, setLang, t };
}
