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

function getPollutantCategory(value, pollutant) {
  // PM2.5
  if (pollutant === "pm2_5") {
    if (value <= 5) return "Good";
    if (value <= 15) return "Fair";
    if (value <= 50) return "Moderate";
    if (value <= 90) return "Poor";
    if (value <= 140) return "Very poor";
    return "Extremely poor";
  }

  // PM10
  if (pollutant === "pm10") {
    if (value <= 15) return "Good";
    if (value <= 45) return "Fair";
    if (value <= 120) return "Moderate";
    if (value <= 195) return "Poor";
    if (value <= 270) return "Very poor";
    return "Extremely poor";
  }

  // Nitrogen dioxide
  if (pollutant === "nitrogen_dioxide") {
    if (value <= 10) return "Good";
    if (value <= 25) return "Fair";
    if (value <= 60) return "Moderate";
    if (value <= 100) return "Poor";
    if (value <= 150) return "Very poor";
    return "Extremely poor";
  }

  // Ozone
  if (pollutant === "ozone") {
    if (value <= 60) return "Good";
    if (value <= 100) return "Fair";
    if (value <= 120) return "Moderate";
    if (value <= 160) return "Poor";
    if (value <= 180) return "Very poor";
    return "Extremely poor";
  }
}

function AirQualityCard({ airQuality }) {
  const aqiCategory = getAqiCategory(airQuality.european_aqi);
  const [showDetails, setShowDetails] = useState(false);
  const pm25Category = getPollutantCategory(airQuality.pm2_5, "pm2_5");
  const pm10Category = getPollutantCategory(airQuality.pm10, "pm10");
  const nitrogenDioxideCategory = getPollutantCategory(
    airQuality.nitrogen_dioxide,
    "nitrogen_dioxide",
  );
  const ozoneCategory = getPollutantCategory(airQuality.ozone, "ozone");

  return (
    <section>
      <h2>Air quality</h2>
      <p>
        {aqiCategory.label} — European AQI: {airQuality.european_aqi}
      </p>
      <p>{aqiCategory.description}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "More details"}
      </button>
      {showDetails && (
        <div>
          <h3>Pollutant levels</h3>
          <p>
            Fine particles (PM2.5): {pm25Category} ({airQuality.pm2_5} μg/m³) {" "}
            <InfoButton text="Fine particles smaller than 2.5 micrometers. Because they are very small, they can penetrate deep into the lungs. Long-term exposure is associated with respiratory and cardiovascular health effects." />
          </p>
          <p>
            Coarse particles (PM10): {pm10Category} ({airQuality.pm10} μg/m³) {" "}
            <InfoButton text="Particles smaller than 10 micrometers that can enter the respiratory system. They can irritate the airways and are commonly associated with dust, traffic and other sources." />
          </p>
          <p>
            Nitrogen dioxide (NO₂): {nitrogenDioxideCategory} ({airQuality.nitrogen_dioxide} μg/m³) {" "}
            <InfoButton text="A gas mainly produced by combustion, especially road traffic and industry. High concentrations can irritate the airways and contribute to respiratory problems." />
          </p>
          <p>
            Ozone (O₃): {ozoneCategory} ({airQuality.ozone} μg/m³) {" "}
            <InfoButton text="Ground-level ozone is formed when sunlight reacts with pollutants such as nitrogen oxides and other gases. High levels can irritate the lungs and airways and may worsen respiratory symptoms." />
          </p>
        </div>
      )}
    </section>
  );
}

export default AirQualityCard;
