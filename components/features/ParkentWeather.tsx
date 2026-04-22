'use client';

import { Cloud, CloudRain, CloudSnow, CloudSun, Sun, Wind, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Locale } from '@/i18n/settings';
import { Dictionary } from '@/lib/types';

type OpenMeteoResponse = {
  current: {
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    time: string;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

type ForecastDay = {
  date: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
};

type WeatherState = {
  currentTemp: number;
  weatherCode: number;
  windSpeed: number;
  updatedAt: string;
  forecast: ForecastDay[];
};

type ParkentWeatherProps = {
  lang: Locale;
  weatherDict: Dictionary['weather'];
};

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

function getWeatherIcon(code: number): LucideIcon {
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

function getWeatherLabel(
  code: number,
  conditions: Dictionary['weather']['conditions'],
): string {
  return conditions[getConditionKey(code)];
}

function getTranslatedWeekday(
  date: string,
  weekdays: Dictionary['weather']['weekdays'],
): string {
  const [year, month, day] = date.split('-').map(Number);
  const weekdayIndex = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return weekdays[weekdayOrder[weekdayIndex]];
}

const WEATHER_ENDPOINT =
  'https://api.open-meteo.com/v1/forecast?latitude=41.2947&longitude=69.6767&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=3&timezone=Asia%2FTashkent';

export default function ParkentWeather({ lang, weatherDict }: ParkentWeatherProps) {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isActive = true;

    const fetchWeather = async () => {
      try {
        const response = await fetch(WEATHER_ENDPOINT, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to fetch weather');
        }

        const data = (await response.json()) as OpenMeteoResponse;
        const forecast = data.daily.time.map((date, index) => ({
          date,
          weatherCode: data.daily.weather_code[index],
          maxTemp: data.daily.temperature_2m_max[index],
          minTemp: data.daily.temperature_2m_min[index],
        }));

        if (isActive) {
          setWeather({
            currentTemp: data.current.temperature_2m,
            weatherCode: data.current.weather_code,
            windSpeed: data.current.wind_speed_10m,
            updatedAt: data.current.time,
            forecast,
          });
          setHasError(false);
        }
      } catch {
        if (isActive) {
          setHasError(true);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    void fetchWeather();
    const refreshTimer = window.setInterval(() => {
      void fetchWeather();
    }, 10 * 60 * 1000);

    return () => {
      isActive = false;
      window.clearInterval(refreshTimer);
    };
  }, []);

  const locale = intlLocaleMap[lang] ?? 'en-US';

  const updatedTime = useMemo(() => {
    if (!weather?.updatedAt) return '';
    return new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Tashkent',
    }).format(new Date(weather.updatedAt));
  }, [locale, weather?.updatedAt]);

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