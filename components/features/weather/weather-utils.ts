import { Cloud, CloudRain, CloudSnow, CloudSun, Sun, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Locale } from '@/i18n/settings';
import type { Dictionary } from '@/lib/types';

const intlLocaleMap: Record<Locale, string> = {
  uz: 'uz-UZ',
  en: 'en-US',
  ru: 'ru-RU',
};

const weekdayOrder: Array<keyof Dictionary['weather']['weekdays']> = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
];

export function getWeatherIcon(code: number): LucideIcon {
  if (code === 0) return Sun;
  if (code === 1 || code === 2) return CloudSun;
  if (code === 3 || code === 45 || code === 48) return Cloud;
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return CloudRain;
  if ([71, 73, 75].includes(code)) return CloudSnow;
  if ([95, 96, 99].includes(code)) return Zap;
  return Cloud;
}

function getConditionKey(code: number): keyof Dictionary['weather']['conditions'] {
  if (code === 0) return 'clear';
  if (code === 1) return 'mostly_clear';
  if (code === 2) return 'partly_cloudy';
  if (code === 3) return 'overcast';
  if (code === 45 || code === 48) return 'fog';
  if ([51, 53, 55].includes(code)) return 'drizzle';
  if ([61, 63].includes(code)) return 'rain';
  if (code === 65) return 'heavy_rain';
  if ([71, 73, 75].includes(code)) return 'snow';
  if ([80, 81, 82].includes(code)) return 'showers';
  if ([95, 96, 99].includes(code)) return 'thunderstorm';
  return 'variable';
}

export function getWeatherLabel(
  code: number,
  conditions: Dictionary['weather']['conditions'],
): string {
  return conditions[getConditionKey(code)];
}

export function getTranslatedWeekday(
  date: string,
  weekdays: Dictionary['weather']['weekdays'],
): string {
  const [year, month, day] = date.split('-').map(Number);
  const weekdayIndex = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return weekdays[weekdayOrder[weekdayIndex]];
}

export function formatUpdatedTime(time: string | undefined, lang: Locale): string {
  if (!time) return '';

  return new Intl.DateTimeFormat(intlLocaleMap[lang] ?? 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Tashkent',
  }).format(new Date(time));
}
