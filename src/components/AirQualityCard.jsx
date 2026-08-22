
function AirQualityCard({ airQuality }) {
  return (
    <section>
      <h2>Air quality</h2>

      <p>European AQI: {airQuality.european_aqi}</p>
      <p>PM2.5: {airQuality.pm2_5} μg/m³</p>
      <p>PM10: {airQuality.pm10} μg/m³</p>
      <p>NO₂: {airQuality.nitrogen_dioxide} μg/m³</p>
      <p>O₃: {airQuality.ozone} μg/m³</p>
    </section>
  );
}

export default AirQualityCard;