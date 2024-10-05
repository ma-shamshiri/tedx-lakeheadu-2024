// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";

// the translations
const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

// Fetch language from localStorage or default to 'en'
const storedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage, // set the initial language from localStorage
  interpolation: {
      escapeValue: false, // react already safes from xss
  },
});

export default i18n;