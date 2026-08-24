import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AirQualityCard from "../components/AirQualityCard";
import WeatherCard from "../components/WeatherCard";
import NotFound from "./NotFound";

function PlaceDetails() {
  const { id } = useParams(); // = get the id
  const navigate = useNavigate();

  const [place, setPlace] = useState(null);
  const [placeNotFound, setPlaceNotFound] = useState(false);

  const [airQuality, setAirQuality] = useState(null);
  const [airQualityError, setAirQualityError] = useState(false);
  const [airQualityLoading, setAirQualityLoading] = useState(true);

  const [weather, setWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(false);
  const [weatherLoading, setWeatherLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/places/${id}`)
      .then((response) => {
        setPlace(response.data);
      })
      .catch((error) => {
        console.log(error);
        setPlaceNotFound(true);
      });
  }, [id]);

  useEffect(() => {
    if (!place) return;

    axios
      .get(
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${place.latitude}&longitude=${place.longitude}&current=european_aqi,pm2_5,pm10,nitrogen_dioxide,ozone,uv_index`,
      )
      .then((response) => {
        setAirQuality(response.data.current);
        setAirQualityLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setAirQualityError(true);
        setAirQualityLoading(false);
      });
  }, [place]);

  useEffect(() => {
    if (!place) return;

    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m`,
      )
      .then((response) => {
        setWeather(response.data.current);
        setWeatherLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setWeatherError(true);
        setWeatherLoading(false);
      });
  }, [place]);

  if (!place && !placeNotFound) {
    return <p>Loading...</p>;
  }

  if (placeNotFound) {
    return <NotFound />;
  }

  const handleDelete = () => {
    const confirmed = window.confirm("sure?");
    if (!confirmed) return;

    axios
      .delete(`http://localhost:5005/places/${id}`)
      .then(() => {
        navigate("/places");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>{place.location}</h1>
      <h2>{place.country}</h2>

      <p>Added by {place.contributor}</p>

      <p>{place.category}</p>

      <p>{place.contribution}</p>

      {airQualityLoading && <p>Loading air quality data...</p>}

      {airQualityError && <p>Unable to load air quality data.</p>}

      {airQuality && <AirQualityCard airQuality={airQuality} />}

      {weatherLoading && <p>Loading environmental conditions...</p>}

      {weatherError && <p>Unable to load environmental conditions.</p>}

      {weather && airQuality && (
        <WeatherCard uv={airQuality.uv_index} weather={weather} />
      )}
      {
        //= "If airQuality exists, show the AirQualityCard component."
      }
      <button onClick={() => navigate(`/places/edit/${id}`)}>
        Edit contribution
      </button>

      <button onClick={handleDelete}>Delete place</button>
    </div>
  );
}

export default PlaceDetails;
