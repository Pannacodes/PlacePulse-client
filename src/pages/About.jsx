
import anna from "../images/anna.png";
import cats from "../images/cats.png";

function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
      {/* Intro */}
      <section className="mb-16">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
          About the project
        </p>

        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          About PlacePulse
        </h1>
        <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-slate sm:text-lg">
          <p>
            PlacePulse is a web application that connects places shared by
            people with environmental information about those locations.
          </p>

          <p>
            The project combines personal connections to places with
            environmental data, allowing users to explore air quality, weather
            conditions and other environmental indicators in a simple and
            accessible way.
          </p>
        </div>
      </section>

      {/* About me */}
      <section className="mb-16 border-t border-mist pt-10">
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
            The creatures behind PlacePulse
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink">
            Meet the team
          </h2>
        </div>
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Anna's picture */}
          <div className="overflow-hidden rounded-2xl border border-mist bg-haze">
            <img
              src={anna}
              alt="Anna"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Anna's text */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              Hi, I'm Anna!
            </h3>

            <p className="mt-4 leading-relaxed text-slate">
              I come from an environmental background, and I'm diving into a new
              way of channeling my curiosity: building things with code.
            </p>

            <p className="mt-4 leading-relaxed text-slate">
              PlacePulse brings together two things I enjoy — understanding the
              environment and creating things from scratch. It's one of the
              projects I built while learning web development :3
            </p>

            <p className="mt-4 leading-relaxed text-slate">
              When I'm not coding, you'll probably find me outdoors, walking by
              the sea or in the mountains, spending time with animals, gaming,
              or doing something hands-on like cooking or embroidering.
            </p>
          </div>
        </div>
      </section>

      {/* Cats */}
      <section className="mb-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Cats' picture */}
          <div className="order-2 overflow-hidden rounded-2xl border border-mist bg-haze md:order-1">
            <img
              src={cats}
              alt="Réglisse and Bélibast"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Cats' text */}
          <div className="order-1 md:order-2">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
              The actual development team
            </p>

            <h3 className="font-display text-3xl font-semibold text-ink">
              Réglisse & Bélibast
            </h3>

            <p className="mt-4 leading-relaxed text-slate">
              If you've worked with me, you've probably met Réglisse. She's an
              attention seeker and has figured out that walking in front of the
              laptop is a very effective way to get pats and scratches. When
              she's not on screen, she's usually sleeping right next to it.
            </p>

            <p className="mt-4 leading-relaxed text-slate">
              But surprise — there's another one!
            </p>

            <p className="mt-4 leading-relaxed text-slate">
              Béli is much more well behaved. He won't jump onto the table for
              attention, but he'll come and bump his head against my legs to
              let me know he's there and would also like some affection.
            </p>

            <p className="mt-5 font-medium text-moss">
              So technically, PlacePulse has had a two-cat development team all
              along.
            </p>
          </div>
        </div>
      </section>

      {/* Built with */}
      <section className="mb-16 border-t border-mist pt-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
          Technology
        </p>
        <h2 className="font-display text-3xl font-semibold text-ink">
          Built with
        </h2>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "React",
            "Tailwind",
            "React Router",
            "JSON Server",
            "Axios",

            "Open-Meteo Air Quality API",
          ].map((technology) => (
            <div
              key={technology}
              className="rounded-xl border border-mist bg-surface/60 px-5 py-4 text-sm font-medium text-ink"
            >
              {technology}
            </div>
          ))}
        </div>
      </section>

      {/* GitHub */}
      <section className="rounded-2xl border border-mist bg-surface p-6 sm:p-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
          Explore the code
        </p>
        <h2 className="font-display text-3xl font-semibold text-ink">
          Find me on GitHub
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-slate">
          You can find the PlacePulse project and my other work on my GitHub.
        </p>

        <a
          href="https://github.com/Pannacodes"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-lg border border-moss px-5 py-2.5 text-sm font-medium text-moss transition hover:bg-moss hover:text-surface"
        >
          Visit my GitHub →
        </a>
      </section>
    </main>
  );
}

export default About;
