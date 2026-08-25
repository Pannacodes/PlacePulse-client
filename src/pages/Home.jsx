import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-green-800">PlacePulse</h1>

      <h2>Discover the environmental conditions of places around the world.</h2>

      <p>
        Explore places connected to the people who live there, grew up there,
        travelled there, or simply love them.
      </p>
      <section>
        <h2>How it works</h2>

        <p>
          Add a place that is meaningful to you and share your connection to it.
        </p>

        <p>
          Explore places added by other contributors and discover their
          environmental conditions.
        </p>

        <p>
          Each place includes current air quality and weather information based
          on its location.
        </p>
      </section>
      <section>
        <h2>Understanding air pollution</h2>

        <p>
          Air pollution is the presence of harmful substances in the air. It can
          come from both human activities, such as traffic, industry and burning
          fossil fuels, and natural sources such as wildfires and dust.
        </p>

        <p>
          Air pollution can affect ecosystems as well as human health,
          particularly when people are exposed to high levels or for long
          periods of time. Pollution levels can also vary considerably between
          places and over time.
        </p>

        <p>
          PlacePulse shows information about four common air pollutants: PM2.5,
          PM10, nitrogen dioxide (NO₂) and ozone (O₃).
        </p>
      </section>

      <section>
        <h2>Understanding the categories</h2>

        <p>
          To make the environmental data easier to understand, PlacePulse uses
          European air quality categories ranging from Good to Extremely poor,
          based on thresholds from the European Environment Agency.
        </p>

        <p>
          You can hover over the ⓘ icons next to each pollutant to learn more
          about what it is, where it comes from and how it can affect health.
        </p>
      </section>
      <section>
        <section>
          <h2>Want to understand air pollution in 3 minutes?</h2>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/e6rglsLy1Ys"
            title="Understanding air pollution"
            allowFullScreen
          ></iframe>
        </section>
        <h2>Explore places</h2>

        <p>
          Discover places shared by other contributors and see their current
          environmental conditions.
        </p>

        <Link to="/places">
          {" "}
          <button>Explore places</button>
        </Link>
      </section>
      <section>
        <h2>Sources</h2>

        <p>
          The environmental information displayed by PlacePulse is based on
          scientific sources and external environmental data.
        </p>

        <ul>
          <li>
            <a
              href="https://www.eea.europa.eu/en/topics/in-depth/air-pollution"
              target="_blank"
              rel="noreferrer"
            >
              European Environment Agency (EEA)
            </a>
            {" — European Air Quality Index and air quality information."}
          </li>

          <li>
            <a
              href="https://www.who.int/health-topics/air-pollution"
              target="_blank"
              rel="noreferrer"
            >
              World Health Organization (WHO)
            </a>
            {
              " — information about air pollution, pollutants and health effects."
            }
          </li>

          <li>
            <a
              href="https://open-meteo.com/en/docs/air-quality-api"
              target="_blank"
              rel="noreferrer"
            >
              Open-Meteo Air Quality API
            </a>
            {
              " — source of the current air-quality data displayed by PlacePulse."
            }
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
