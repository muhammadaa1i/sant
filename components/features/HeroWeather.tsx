'use client';

import dynamic from 'next/dynamic';
import type { Dictionary } from '@/lib/types';
import type { Locale } from '@/i18n/settings';

const ParkentWeather = dynamic(() => import('./ParkentWeather'), {
  ssr: false,
  loading: () => <div className="w-full h-72 animate-pulse rounded-2xl sm:rounded-3xl border border-white/20 bg-slate-900/35" />,
});

type HeroWeatherProps = {
  lang: Locale;
  weatherDict: Dictionary['weather'];
};

export default function HeroWeather({ lang, weatherDict }: HeroWeatherProps) {
  return <ParkentWeather lang={lang} weatherDict={weatherDict} />;
}
