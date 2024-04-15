import styled from "styled-components";
import { useWeatherByCity } from "../../api/weather";
import SearchBar from "../SearchBar/SearchBar";
import WeatherCard from "../WeatherCard/WeatherCard";
import { selectSearchCity } from "../../redux/searchCitySlice";
import { useAppSelector } from "../../redux/hooks";

const Header = styled.header`
  display: flex;
  height: 60px;
`;

const Main = styled.main`
  background-color: floralwhite;
  height: calc(100vh - 60px);
`;

const WeatherWidget = () => {
  const city = useAppSelector(selectSearchCity);
  const { data: weatherData, error, isLoading } = useWeatherByCity(city);

  //may be in the utils in the big project
  const getFormatedDate = (): string => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  };

  return (
    <div>
      <Header>
        <SearchBar />
      </Header>
      <Main>
        {isLoading && <h2>...Loading</h2>}
        {error && <h2>{error.message}</h2>}
        {weatherData && !error && (
          <WeatherCard
            icon={weatherData.weather[0].icon}
            temperature={Math.round(weatherData.main.temp)}
            wind={weatherData.wind.speed}
            windDirection={weatherData.wind.deg}
            pressure={weatherData.main.pressure}
            humidity={weatherData.main.humidity}
            lastUpdated={getFormatedDate()}
          />
        )}
      </Main>
    </div>
  );
};

export default WeatherWidget;
