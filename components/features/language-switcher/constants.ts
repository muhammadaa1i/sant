import type { Locale } from '@/i18n/settings';

export const languageNames: Record<Locale, { self: string; short: string }> = {
  uz: { self: 'O\'zbekcha', short: 'UZ' },
  en: { self: 'English', short: 'EN' },
  ru: { self: 'Русский', short: 'RU' },
};
