import i18next, { InitOptions, i18n } from 'i18next';
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend';
import ChainedBackend from 'i18next-chained-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const httpBackendOptions: HttpBackendOptions = {
  loadPath: `${import.meta.env.BASE_URL}/locales/{{lng}}/{{ns}}.json`,
};

export const options: InitOptions = {
  fallbackLng: 'en-GB',
  ns: ['translation'],
  nsSeparator: ':',
  defaultNS: 'translation',
  fallbackNS: 'translation',
  lng: import.meta.env.MODE === 'test' ? 'en-GB' : undefined,
  backend: {
    backends: [HttpBackend],
    backendOptions: [httpBackendOptions],
  },
  interpolation: {
    escapeValue: false, // react already safe from xss
  },
  appendNamespaceToMissingKey: process.env.NODE_ENV !== 'production',
};

const i18nInstance: i18n = i18next.createInstance(options);

i18nInstance
  .use(ChainedBackend) // load translation from backend using https -> see /public/locales
  .use(LanguageDetector)
  .init();

export default i18nInstance;
