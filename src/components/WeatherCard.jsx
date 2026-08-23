import React from 'react'



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

function WeatherCard({uv}) {
const uvCategory = getUvCategory(uv);

  return (
    <section>
      <h2>Environmental conditions</h2>
      <p>UV Index: {uv} — {uvCategory}</p>
    </section>
  );
}

export default WeatherCard