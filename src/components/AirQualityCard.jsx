import { useState } from "react";
import InfoButton from "./InfoButton";

function getAqiCategory(aqi) {
  if (aqi < 20) {
    return {
      label: "Good",
      description: "Air quality is very good.",
      color: "text-moss",
    };
  } else if (aqi < 40) {
    return {
      label: "Fair",
      description: "Air quality is acceptable.",
      color: "text-moss",
    };
  } else if (aqi < 60) {
    return {
      label: "Moderate",
      description: "Air quality is moderate. Sensitive people may be affected.",
      color: "text-[#8f947f]",
    };
  } else if (aqi < 80) {
    return {
      label: "Poor",
      description: "Some pollutants may affect health.",
      color: "text-[#b27b55]",
    };
  } else if (aqi <= 100) {
    return {
      label: "Very poor",
      description: "Air quality may affect many people.",
      color: "text-rust",
    };
  } else {
    return {
      label: "Extremely poor",
      description: "Air quality is very poor and pollution levels are high.",
      color: "text-[#914d38]",
    };
  }
}

function getPollutantCategory(value, pollutant) {
  // PM2.5
  if (pollutant === "pm2_5") {
    if (value <= 5) return { label: "Good", color: "text-moss" };
    if (value <= 15) return { label: "Fair", color: "text-moss" };
    if (value <= 50) return { label: "Moderate", color: "text-[#8f947f]" };
    if (value <= 90) return { label: "Poor", color: "text-[#b27b55]" };
    if (value <= 140) return { label: "Very poor", color: "text-rust" };
    return { label: "Extremely poor", color: "text-[#914d38]" };
  }

  // PM10
  if (pollutant === "pm10") {
    if (value <= 15) return { label: "Good", color: "text-moss" };
    if (value <= 45) return { label: "Fair", color: "text-moss" };
    if (value <= 120) return { label: "Moderate", color: "text-[#8f947f]" };
    if (value <= 195) return { label: "Poor", color: "text-[#b27b55]" };
    if (value <= 270) return { label: "Very poor", color: "text-rust" };
    return { label: "Extremely poor", color: "text-[#914d38]" };
  }

  // Nitrogen dioxide
  if (pollutant === "nitrogen_dioxide") {
    if (value <= 10) return { label: "Good", color: "text-moss" };
    if (value <= 25) return { label: "Fair", color: "text-moss" };
    if (value <= 60) return { label: "Moderate", color: "text-[#8f947f]" };
    if (value <= 100) return { label: "Poor", color: "text-[#b27b55]" };
    if (value <= 150) return { label: "Very poor", color: "text-rust" };
    return { label: "Extremely poor", color: "text-[#914d38]" };
  }

  // Ozone
  if (pollutant === "ozone") {
    if (value <= 60) return { label: "Good", color: "text-moss" };
    if (value <= 100) return { label: "Fair", color: "text-moss" };
    if (value <= 120) return { label: "Moderate", color: "text-[#8f947f]" };
    if (value <= 160) return { label: "Poor", color: "text-[#b27b55]" };
    if (value <= 180) return { label: "Very poor", color: "text-rust" };
    return { label: "Extremely poor", color: "text-[#914d38]" };
  }
}

function getAqiPosition(aqi) {
  const maxAqi = 100;
  // = keeps the marker inside the gauge

  const position = (aqi / maxAqi) * 100;
  // = converts an AQI into %

  return Math.min(Math.max(position, 0), 100);
}

function AirQualityCard({ airQuality }) {
  const aqiCategory = getAqiCategory(airQuality.european_aqi);
  const aqiPosition = getAqiPosition(airQuality.european_aqi);

  const [showDetails, setShowDetails] = useState(false);
  const pm25Category = getPollutantCategory(airQuality.pm2_5, "pm2_5");
  const pm10Category = getPollutantCategory(airQuality.pm10, "pm10");
  const nitrogenDioxideCategory = getPollutantCategory(
    airQuality.nitrogen_dioxide,
    "nitrogen_dioxide",
  );
  const ozoneCategory = getPollutantCategory(airQuality.ozone, "ozone");

  return (
    <section className="mt-8 rounded-2xl border border-mist bg-surface p-6 sm:p-8">
      {/* Main heading */}
      <div className="mb-6">
        <p className="mb-1 text-sm font-medium uppercase tracking-wider text-moss">
          Air pollution
        </p>
        <h2 className="font-[Fraunces] text-3xl font-semibold text-ink">
          Air quality
        </h2>
      </div>

      {/* Main AQI */}
      <div className="rounded-xl border border-mist bg-haze p-6">
        <p
          className={`font-[Fraunces] text-3xl font-semibold sm:text-4xl ${aqiCategory.color}`}
        >
          {aqiCategory.label}
        </p>

        <p className="mt-2 text-sm text-slate">
          European AQI :{" "}
          <span className="font-mono text-ink">{airQuality.european_aqi}</span>
        </p>

        <p className="mt-3 max-w-xl text-slate">{aqiCategory.description}</p>

        {/* AQI clarity gauge */}
        <div className="mt-6">
          <div className="relative h-2 rounded-full bg-linear-to-r from-moss via-[#a9ad9f] to-rust dark:via-[#c9cfc0] dark:to-[#d18f5c]">
            <div
              className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-ink shadow-sm"
              style={{ left: `${aqiPosition}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Details button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-5 rounded-lg border border-mist px-4 py-2 text-sm font-medium text-ink transition hover:border-moss hover:text-moss"
      >
        {showDetails ? "Hide details" : "More details"}
      </button>

      {/* Pollutants */}
      {showDetails && (
        <div className="mt-8">
          <div className="mb-5">
            <h3 className="font-[Fraunces] text-2xl font-semibold text-ink">
              Pollutant levels
            </h3>
            <p className="mt-1 text-sm text-slate">
              Current concentrations of the main pollutants measured at this
              location.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* PM2.5 */}
            <div className="rounded-xl border border-mist p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-medium text-ink">PM2.5</h4>

                  <p className="text-sm text-slate">Fine particles</p>
                </div>

                <InfoButton text="Fine particles smaller than 2.5 micrometers. Because they are very small, they can penetrate deep into the lungs. Long-term exposure is associated with respiratory and cardiovascular health effects." />
              </div>
              <div className="mt-5">
                <p
                  className={`font-[Fraunces] text-2xl font-semibold ${pm25Category.color}`}
                >
                  {pm25Category.label}
                </p>

                <p className="mt-1 font-mono text-sm text-slate">
                  {airQuality.pm2_5} μg/m³
                </p>
              </div>
            </div>

            {/* PM10 */}
            <div className="rounded-xl border border-mist p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-medium text-ink">PM10</h4>

                  <p className="text-sm text-slate">Coarse particles</p>
                </div>
                <InfoButton text="Particles smaller than 10 micrometers that can enter the respiratory system. They can irritate the airways and are commonly associated with dust, traffic and other sources." />
              </div>
              <div className="mt-5">
                <p
                  className={`font-[Fraunces] text-2xl font-semibold ${pm10Category.color}`}
                >
                  {pm10Category.label}
                </p>

                <p className="mt-1 font-mono text-sm text-slate">
                  {airQuality.pm10} μg/m³
                </p>
              </div>
            </div>

            {/* NO₂ */}
            <div className="rounded-xl border border-mist p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-medium text-ink">NO₂</h4>

                  <p className="text-sm text-slate">Nitrogen dioxide</p>
                </div>
                <InfoButton text="A gas mainly produced by combustion, especially road traffic and industry. High concentrations can irritate the airways and contribute to respiratory problems." />
              </div>

              <div className="mt-5">
                <p
                  className={`font-[Fraunces] text-2xl font-semibold ${nitrogenDioxideCategory.color}`}
                >
                  {nitrogenDioxideCategory.label}
                </p>

                <p className="mt-1 font-mono text-sm text-slate">
                  {airQuality.nitrogen_dioxide} μg/m³
                </p>
              </div>
            </div>

            {/* O₃ */}
            <div className="rounded-xl border border-mist p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-medium text-ink">O₃</h4>

                  <p className="text-sm text-slate">Ground-level ozone</p>
                </div>

                <InfoButton text="Ground-level ozone is formed when sunlight reacts with pollutants such as nitrogen oxides and other gases. High levels can irritate the lungs and airways and may worsen respiratory symptoms." />
              </div>
              <div className="mt-5">
                <p
                  className={`font-[Fraunces] text-2xl font-semibold ${ozoneCategory.color}`}
                >
                  {ozoneCategory.label}
                </p>

                <p className="mt-1 font-mono text-sm text-slate">
                  {airQuality.ozone} μg/m³
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AirQualityCard;
