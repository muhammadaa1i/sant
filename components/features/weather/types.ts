export type OpenMeteoResponse = {
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

export type ForecastDay = {
  date: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
};

export type WeatherState = {
  currentTemp: number;
  weatherCode: number;
  windSpeed: number;
  updatedAt: string;
  forecast: ForecastDay[];
};
