'use client';

import { Wind } from 'lucide-react';
import { Locale } from '@/i18n/settings';
import { Dictionary } from '@/lib/types';
import { useParkentWeather } from './weather/useParkentWeather';
import { getTranslatedWeekday, getWeatherIcon, getWeatherLabel } from './weather/weather-utils';

type ParkentWeatherProps = {
  lang: Locale;
  weatherDict: Dictionary['weather'];
};

export default function ParkentWeather({ lang, weatherDict }: ParkentWeatherProps) {
  const { weather, isLoading, hasError, updatedTime } = useParkentWeather(lang);

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-white/20 bg-slate-900/35 p-3 sm:p-4 text-white shadow-2xl backdrop-blur-md">
      <p className="text-lg sm:text-xl font-semibold leading-tight">{weatherDict.city}</p>
      <p className="mt-0.5 text-xs sm:text-sm text-white/80">{weatherDict.country}</p>

      {isLoading && (
        <div className="mt-4 sm:mt-6 h-28 sm:h-36 animate-pulse rounded-2xl bg-white/10" />
      )}

      {!isLoading && hasError && (
        <div className="mt-4 sm:mt-6 rounded-2xl border border-white/20 bg-white/10 p-3 sm:p-4">
          <p className="text-sm font-medium">{weatherDict.unavailable_title}</p>
          <p className="mt-1.5 text-xs sm:text-sm text-white/75">{weatherDict.unavailable_message}</p>
        </div>
      )}

      {!isLoading && weather && !hasError && (
        <>
          <div className="mt-3 sm:mt-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-5xl sm:text-6xl font-light leading-none">
                {Math.round(weather.currentTemp)}
                <span className="align-top text-xl sm:text-2xl font-medium">°C</span>
              </p>
              <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 text-sm sm:text-base font-medium">
                {(() => {
                  const CurrentIcon = getWeatherIcon(weather.weatherCode);
                  return <CurrentIcon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />;
                })()}
                <span className="truncate">{getWeatherLabel(weather.weatherCode, weatherDict.conditions)}</span>
              </div>
            </div>
            <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-xs sm:text-sm text-white/90">
              <Wind className="h-3.5 w-3.5" />
              {Math.round(weather.windSpeed)} km/h
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-1.5 sm:gap-2 border-t border-white/25 pt-3 sm:pt-4">
            {weather.forecast.map((day) => {
              const DayIcon = getWeatherIcon(day.weatherCode);
              return (
                <div
                  key={day.date}
                  className="rounded-lg sm:rounded-xl border border-white/20 bg-white/5 px-1 py-2 sm:px-2 sm:py-3 text-center"
                >
                  <p className="text-xs sm:text-sm font-semibold">{getTranslatedWeekday(day.date, weatherDict.weekdays)}</p>
                  <DayIcon className="mx-auto mt-1.5 h-4 w-4 sm:h-5 sm:w-5" />
                  <p className="mt-1.5 text-sm sm:text-base font-semibold">{Math.round(day.maxTemp)}°</p>
                  <p className="text-[11px] sm:text-xs text-white/75">{Math.round(day.minTemp)}°</p>
                </div>
              );
            })}
          </div>

          <p className="mt-2.5 text-[11px] sm:text-xs text-white/70">
            {weatherDict.updated} {updatedTime} (Asia/Tashkent)
          </p>
        </>
      )}
    </div>
  );
}