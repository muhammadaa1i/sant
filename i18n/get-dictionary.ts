import 'server-only'
import type { Locale } from './settings'

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  uz: () => import('./uz.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale) => {
  try {
    const dict = await dictionaries[locale]();
    return dict;
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    // Fallback to English
    return await dictionaries['en']();
  }
}
