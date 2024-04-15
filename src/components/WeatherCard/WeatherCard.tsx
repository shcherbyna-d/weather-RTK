import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  object-fit: contain;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const OtherDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  color: #484848;
`;

const ContentRow = styled.div`
  font-weight: bold;

  span {
    font-weight: normal;
  }
`;

const Temperature = styled.div`
  font-weight: bold;
  font-size: 24px;
  align-self: center;
  margin-bottom: 20px;
`;

interface WeatherCardProps {
  icon: string;
  temperature: number;
  wind: number;
  windDirection: number;
  pressure: number;
  humidity: number;
  lastUpdated: string;
}

const WeatherCard = ({
  icon,
  temperature,
  wind,
  windDirection,
  pressure,
  humidity,
  lastUpdated,
}: WeatherCardProps) => {
  const getWindDirection = (degrees: number): string => {
    const directions = [
      "північний",
      "північно-східний",
      "східний",
      "південно-східний",
      "південний",
      "південно-західний",
      "західний",
      "північно-західний",
    ];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  return (
    <Card>
      <Icon
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="weather icon"
      />
      <CardContent>
        <Temperature>{temperature}°C</Temperature>
        <OtherDetails>
          <ContentRow>
            Вітер:{" "}
            <span>
              {wind} м/с, {getWindDirection(windDirection)}
            </span>
          </ContentRow>
          <ContentRow>
            Тиск: <span> {pressure} гПа</span>
          </ContentRow>
          <ContentRow>
            Вологість: <span>{humidity}%</span>
          </ContentRow>
          <span>Актуально на {lastUpdated}</span>
        </OtherDetails>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
