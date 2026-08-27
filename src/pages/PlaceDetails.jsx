import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import AirQualityCard from "../components/AirQualityCard";
import WeatherCard from "../components/WeatherCard";
import NotFound from "./NotFound";

const api = import.meta.env.VITE_API_URL
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
      .get(`${api}/places/${id}`)
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
    const confirmed = window.confirm("Are you sure you want to delete this?");
    if (!confirmed) return;

    axios
      .delete(`${api}/places/${id}`)
      .then(() => {
        navigate("/places");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      {/* Place header */}
      <section className="mb-10">
        <Link
          to="/places"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate transition hover:text-moss"
        >
          ← Back to places
        </Link>
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
          {place.category}
        </p>
        <h1 className="font-display text-4xl font-bold text-ink sm:text-6xl">
          {place.location}
        </h1>
        <h2 className="mt-2 text-lg text-slate">{place.country}</h2>

        <p className="mt-4 text-sm text-slate">
          Added by @{""}
          <span className="font-medium text-ink">{place.contributor}</span>
        </p>
      </section>

      {/* Personal contribution */}
      <section className="mb-8 rounded-2xl border border-mist bg-white p-6 sm:p-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
          Their connection
        </p>

        <p className="text-lg leading-relaxed text-ink">
          "{place.contribution}"
        </p>
      </section>

      {/* Environmental conditions */}
      <section>
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
            Environmental conditions
          </p>

          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            What is the air like right now?
          </h2>

          <p className="mt-2 text-slate">
            Current environmental data for {place.location}.
          </p>
        </div>

        {/* Air quality loading */}
        {airQualityLoading && (
          <div className="rounded-2xl border border-mist bg-white p-8 text-center">
            <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-mist border-t-moss"></div>
            <p className="text-slate">Loading air quality data...</p>
          </div>
        )}

        {airQualityError && (
          <div className="rounded-2xl border border-mist bg-white p-6">
            <p className="font-medium text-ink">
              Unable to load air quality data.
            </p>
            <p className="mt-1 text-sm text-slate">Please try again later.</p>
          </div>
        )}

        {airQuality && (
          <div className="mb-8">
            <AirQualityCard airQuality={airQuality} />
          </div>
        )}

        {/* Weather loading */}
        {weatherLoading && (
          <div className="rounded-2xl border border-mist bg-white p-8 text-center">
            <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-mist border-t-moss"></div>
            <p className="text-slate">Loading environmental conditions...</p>
          </div>
        )}

        {/* Weather error */}
        {weatherError && (
          <div className="rounded-2xl border border-mist bg-white p-6">
            <p className="font-medium text-ink">
              Unable to load environmental conditions.
            </p>
            <p className="mt-1 text-sm text-slate">Please try again later.</p>
          </div>
        )}

        {/* Weather */}
        {weather && airQuality && (
          <WeatherCard uv={airQuality.uv_index} weather={weather} />
        )}
      </section>

      {/* Actions */}
      <section className="mt-10 flex flex-col gap-3 border-t border-mist pt-8 sm:flex-row">
        <button
          onClick={() => navigate(`/places/edit/${id}`)}
          className="rounded-lg bg-moss px-5 py-3 font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-moss/40"
        >
          Edit contribution
        </button>

        <button
          onClick={handleDelete}
          className="rounded-lg border border-mist bg-white px-5 py-3 font-medium text-slate transition hover:border-red-200 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200"
        >
          Delete place
        </button>
      </section>
    </main>
  );
}

export default PlaceDetails;
