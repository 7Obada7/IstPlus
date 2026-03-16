"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import ar from "../locales/ar.json";
import tr from "../locales/tr.json";

export type SupportedLanguage = "en" | "ar" | "tr";

const translations = {
  en,
  ar,
  tr,
};

type TranslationsContextType = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<TranslationsContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>("en");

  useEffect(() => {
    // Check local storage for saved language, or use default
    const savedLanguage = localStorage.getItem("language") as SupportedLanguage;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Optionally handle document direction for Arabic
    if (lang === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // Fallback to key if translation missing
      }
    }
    return value as string;
  };

  // Ensure RTL styling applies initially
  useEffect(() => {
      if (language === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
