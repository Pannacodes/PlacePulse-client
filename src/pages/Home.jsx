import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="py-8 sm:py-12">
        <p className="mb-3 font-mono text-sm uppercase tracking-wider text-slate">
          Environmental conditions, connected to people
        </p>
        <h1 className="mb-6 font-display text-5xl font-semibold leading-tight text-ink sm:text-6xl">
          PlacePulse
        </h1>

        <h2 className="mb-5 max-w-2xl font-display text-2xl font-medium text-ink sm:text-3xl">
          Discover the environmental conditions of places around the world.
        </h2>

        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate">
          Explore places connected to the people who live there, grew up there,
          travelled there, or simply love them.
        </p>
        <Link
          to="/places"
          className="inline-block rounded-lg bg-moss px-6 py-3 font-medium text-white hover:opacity-90"
        >
          {" "}
          Explore places
        </Link>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-mist pt-10">
        <h2 className="mb-8 font-display text-3xl font-semibold text-ink">
          How it works
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-mist bg-white/40 p-6">
            <p className="mb-4 font-mono text-sm text-moss">01</p>
            <h3 className="mb-3 font-display text-xl font-semibold">
              Add a place
            </h3>
            <p className="leading-relaxed text-slate">
              Add a place that is meaningful to you and share your connection to
              it.
            </p>
          </div>
          <div className="rounded-xl border border-mist bg-white/40 p-6">
            <p className="mb-4 font-mono text-sm text-moss">02</p>
            <h3 className="mb-3 font-display text-xl font-semibold">
              Explore places
            </h3>
            <p className="leading-relaxed text-slate">
              Explore places added by other contributors and discover their
              environmental conditions.
            </p>
          </div>
          <div className="rounded-xl border border-mist bg-white/40 p-6">
            <p className="mb-4 font-mono text-sm text-moss">03</p>
            <h3 className="mb-3 font-display text-xl font-semibold">
              Understand the environment
            </h3>
            <p className="leading-relaxed text-slate">
              Each place includes current air quality and weather information
              based on its location.
            </p>
          </div>
        </div>
      </section>

      {/* AIR POLLUTION */}
      <section className="max-w-3xl border-t border-mist pt-10">
        <p className="mb-2 font-mono text-sm uppercase tracking-wider text-slate">
          Environmental context
        </p>
        <h2 className="mb-6 font-display text-3xl font-semibold text-ink">
          Understanding air pollution
        </h2>

        <div className="space-y-4 leading-relaxed text-slate">
          <p>
            Air pollution is the presence of harmful substances in the air. It
            can come from both human activities, such as traffic, industry and
            burning fossil fuels, and natural sources such as wildfires and
            dust.
          </p>

          <p>
            Air pollution can affect ecosystems as well as human health,
            particularly when people are exposed to high levels or for long
            periods of time. Pollution levels can also vary considerably between
            places and over time.
          </p>

          <p>
            PlacePulse shows information about four common air pollutants:
            PM2.5, PM10, nitrogen dioxide (NO₂) and ozone (O₃).
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="rounded-xl border border-mist bg-white/40 p-6 sm:p-8">
        <h2 className="mb-5 font-display text-3xl font-semibold text-ink">
          Understanding the categories
        </h2>
        <div className="space-y-4 leading-relaxed text-slate">
          <p>
            To make the environmental data easier to understand, PlacePulse uses
            European air quality categories ranging from Good to Extremely poor,
            based on thresholds from the European Environment Agency.
          </p>

          <p>
            You can hover over the ⓘ icons next to each pollutant to learn more
            about what it is, where it comes from and how it can affect health.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="border-t border-mist pt-10">
        <h2 className="mb-3 font-display text-3xl font-semibold text-ink">
          Want to understand air pollution in 3 minutes?
        </h2>

        <p className="mb-6 text-slate">
          Here's a quick introduction if you'd like to learn more.
        </p>
        <div className="aspect-video w-full max-w-3xl overflow-hidden rounded-xl border border-mist">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/e6rglsLy1Ys"
            title="Understanding air pollution"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="rounded-xl bg-moss px-6 py-10 text-center sm:px-10">
        <h2 className="mb-3 font-display text-3xl font-semibold text-white">
          Explore places
        </h2>

        <p className="mx-auto mb-6 max-w-xl leading-relaxed text-white/80">
          Discover places shared by other contributors and see their current
          environmental conditions.
        </p>

        <Link
          to="/places"
          className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-moss hover:bg-haze"
        >
          Explore places
        </Link>
      </section>

      {/* SOURCES */}
      <section className="border-t border-mist pt-10 pb-8">
        <h2 className="mb-4 font-display text-3xl font-semibold text-ink">
          Sources
        </h2>

        <p className="mb-6 max-w-2xl leading-relaxed text-slate">
          The environmental information displayed by PlacePulse is based on
          scientific sources and external environmental data.
        </p>

        <ul className="space-y-3 text-sm text-slate">
          <li>
            <a
              href="https://www.eea.europa.eu/en/topics/in-depth/air-pollution"
              target="_blank"
              rel="noreferrer"
              className="text-moss underline underline-offset-2 hover:text-ink"
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
              className="text-moss underline underline-offset-2 hover:text-ink"
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
              className="text-moss underline underline-offset-2 hover:text-ink"
            >
              Open-Meteo Air Quality API
            </a>
            {
              " — source of the current air-quality data displayed by PlacePulse."
            }
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
