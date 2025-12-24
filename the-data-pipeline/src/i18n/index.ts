export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.introduction': 'Introduction',
    'nav.pipeline': 'Data Pipeline',
    'nav.engineers': 'Data Engineers',
    'nav.analytics': 'Analytics Engineers',
    'nav.analysts': 'Data Analysts',
    'nav.scientists': 'Data Scientists',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.introduction': 'Introduction',
    'nav.pipeline': 'Pipeline de Données',
    'nav.engineers': 'Data Engineers',
    'nav.analytics': 'Analytics Engineers',
    'nav.analysts': 'Data Analysts',
    'nav.scientists': 'Data Scientists',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const segments = url.pathname.split('/').filter(Boolean);
  // Check if 'fr' appears in any segment
  if (segments.includes('fr')) return 'fr';
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
