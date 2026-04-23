'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Locale } from '@/i18n/settings';
import type { OpenMeteoResponse, WeatherState } from './types';
import { formatUpdatedTime } from './weather-utils';

const WEATHER_ENDPOINT =
  'https://api.open-meteo.com/v1/forecast?latitude=41.2947&longitude=69.6767&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=3&timezone=Asia%2FTashkent';

export function useParkentWeather(lang: Locale) {
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

        if (!isActive) return;

        setWeather({
          currentTemp: data.current.temperature_2m,
          weatherCode: data.current.weather_code,
          windSpeed: data.current.wind_speed_10m,
          updatedAt: data.current.time,
          forecast,
        });
        setHasError(false);
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

  const updatedTime = useMemo(() => formatUpdatedTime(weather?.updatedAt, lang), [lang, weather?.updatedAt]);

  return {
    weather,
    isLoading,
    hasError,
    updatedTime,
  };
}
