import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AirQualityCard from "../components/AirQualityCard";

function PlaceDetails() {
  const { id } = useParams();

  const [place, setPlace] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/places/${id}`)
      .then((response) => {
        setPlace(response.data);
      })
      .catch((error) => {
        console.log(error);
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [place]);

  if (!place) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{place.location}</h1>
      <h2>{place.country}</h2>

      <p>Added by {place.contributor}</p>

      <p>{place.category}</p>

      <p>{place.contribution}</p>

      {airQuality && <AirQualityCard airQuality={airQuality} />} 
      
      {//= "If airQuality exists, show the AirQualityCard component."
      }

    </div>
  );
}

export default PlaceDetails;
