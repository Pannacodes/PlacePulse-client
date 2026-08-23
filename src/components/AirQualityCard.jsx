import { useState } from "react";
import InfoButton from "./InfoButton";

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
      description: "Air quality is very poor and pollution levels are high.",
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
          <h3>Pollutant levels</h3>
          <p>
            Fine particles (PM2.5): {airQuality.pm2_5} μg/m³{" "}
            <InfoButton text="Fine particles smaller than 2.5 micrometers. They can enter deep into the respiratory system." />
          </p>
          <p>
            Coarse particles (PM10): {airQuality.pm10} μg/m³{" "}
            <InfoButton text="Particles smaller than 10 micrometers that can affect air quality and health." />
          </p>
          <p>
            Nitrogen dioxide (NO₂): {airQuality.nitrogen_dioxide} μg/m³
            <InfoButton text="Nitrogen dioxide is a gas mainly produced by combustion processes such as traffic and industry." />
          </p>
          <p>
            Ozone (O₃): {airQuality.ozone} μg/m³
            <InfoButton text="Ground-level ozone is formed through chemical reactions involving sunlight and pollutants." />
          </p>
        </div>
      )}

    </section>
  );
}

export default AirQualityCard;
