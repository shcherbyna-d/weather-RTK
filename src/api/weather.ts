import useSWR from "swr";
import { apiFetcher } from "./api";

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Main = {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
};

type Wind = {
  speed: number;
  deg: number;
};

type WeatherByCityDetails = {
  weather: Weather[];
  main: Main;
  wind: Wind;
};

export const useWeatherByCity = (city?: string) => {
  return useSWR<WeatherByCityDetails>(
    () => useWeatherByCity.endpoint(city),
    async (endpoint) => apiFetcher(endpoint),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );
};

useWeatherByCity.endpoint = (city?: string) =>
  city
    ? `weather?q=${city}&lang=ua,uk&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
    : undefined;
