import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import deTranslations from './locales/de.json';
import enTranslations from './locales/en.json';

const resources = {
  en: {
    translation: enTranslations
  },

  de: {
    translation: deTranslations
  }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
