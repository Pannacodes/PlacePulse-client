import { useState } from "react";

function getAqiCategory(aqi) {
  if (aqi < 20) {
    return {
      label: "Good",
      description: "Air quality is very good.",
    };
  } else if (aqi < 40) {
    return {
      label: "Fair",
      description: "Air quality is acceptable.",
    };
  } else if (aqi < 60) {
    return {
      label: "Moderate",
      description: "Air quality is moderate. Sensitive people may be affected.",
    };
  } else if (aqi < 80) {
    return {
      label: "Poor",
      description: "Some pollutants may affect health.",
    };
  } else if (aqi <= 100) {
    return {
      label: "Very poor",
      description: "Air quality may affect many people.",
    };
  } else {
    return {
      label: "Extremely poor",
      description: "Air quality is very unhealthy.",
    };
  }
}

function AirQualityCard({ airQuality }) {
  const aqiCategory = getAqiCategory(airQuality.european_aqi);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section>
      <h2>Air quality</h2>
      <p>
        European AQI: {airQuality.european_aqi} — {aqiCategory.label}
      </p>
      <p>{aqiCategory.description}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "More details"}
      </button>
      {showDetails && (
        <div>
          <p>Fine particles (PM2.5): {airQuality.pm2_5} μg/m³</p>
          <p>Coarse particles (PM10): {airQuality.pm10} μg/m³</p>
          <p>Nitrogen dioxide (NO₂): {airQuality.nitrogen_dioxide} μg/m³</p>
          <p>Ozone (O₃): {airQuality.ozone} μg/m³</p>
        </div>
      )}
      <h2>Environmental conditions</h2>
      <p>UV Index: {airQuality.uv_index}</p>
    </section>
  );
}

export default AirQualityCard;
