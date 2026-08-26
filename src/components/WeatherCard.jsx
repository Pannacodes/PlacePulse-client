import React from "react";

function getUvCategory(uv) {
  if (uv <= 2) {
    return "Low";
  } else if (uv <= 5) {
    return "Moderate";
  } else if (uv <= 7) {
    return "High";
  } else if (uv <= 10) {
    return "Very high";
  } else {
    return "Extreme";
  }
}

function WeatherCard({ uv, weather }) {
  const uvCategory = getUvCategory(uv);

  return (
    <section className="mt-8 rounded-2xl border border-mist bg-white p-6 sm:p-8">
      {/* Main heading */}
      <div className="mb-6">
        <p className="mb-1 text-sm font-medium uppercase tracking-wider text-fog-blue">
          Environmental conditions
        </p>
        <h2 className="font-display text-3xl font-semibold text-ink">
          Weather
        </h2>
      </div>

      {/* Temperature */}
      <div className="rounded-xl border border-mist bg-haze p-6">
        <p className="font-display text-5xl font-semibold text-fog-blue sm:text-5xl">
          {weather.temperature_2m} °C
        </p>

        <p className="mt-2 text-sm text-slate">Current temperature</p>
      </div>

      {/* Additional conditions */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {/* Humidity */}
        <div className="rounded-xl border border-mist p-5">
          <p className="text-sm font-medium text-slate">Humidity</p>

          <p className="mt-3 font-display text-2xl font-semibold text-fog-blue">
            {weather.relative_humidity_2m}%
          </p>
        </div>

        {/* UV */}
        <div className="rounded-xl border border-mist p-5">
          <p className="text-sm font-medium text-slate">UV Index</p>
          <p className="mt-3 font-display text-2xl font-semibold text-fog-blue">
            {uv}
          </p>

          <p className="mt-1 text-sm text-slate">{uvCategory}</p>
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;
