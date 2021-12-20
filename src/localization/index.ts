import i18n from 'i18next';

import english from './english.localization';
import russian from './russian.localization';

export default i18n.init({
  lng: 'en-EN',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  returnObjects: true,
  react: {
    wait: true,
  },
  resources: {
    en: {
      translations: {
        english,
      },
    },
    ru: {
      translations: {
        russian,
      },
    },
  },
});
