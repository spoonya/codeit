import i18n from 'i18next';

import { settings } from '../constants';
import { getStorage } from '../helpers/storage.helper';
import english from './english.localization';
import russian from './russian.localization';

i18n.init({
  lng: getStorage(settings.localization.storage) || 'en-EN',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  returnObjects: true,
  resources: {
    en: {
      translations: {
        ...english,
      },
    },
    ru: {
      translations: {
        ...russian,
      },
    },
  },
});

export default i18n;
