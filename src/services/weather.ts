// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_API_URL = "https://api.openweathermap.org/data/2.5/";

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface WeatherByCityDetails {
  weather: Weather[];
  main: Main;
  wind: Wind;
}

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<WeatherByCityDetails, string>({
      query: (city) =>
        `weather?q=${city}&lang=ua,uk&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherByCityQuery } = weatherApi;
