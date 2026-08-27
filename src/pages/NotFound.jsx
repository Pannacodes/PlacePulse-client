import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
      <section className="flex max-w-2xl flex-col items-center text-center">
        {/* Eyebrow */}
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-moss">
          404 · Lost in space
        </p>

        {/* Heading */}
        <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          Whoops, you seem to be on on another Planet.
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-lg text-base leading-relaxed text-slate sm:text-lg">
          We couldn't find the place you were looking for. Maybe it's somewhere
          a little further away...
        </p>

        {/* GIF */}
        <div className="my-8 overflow-hidden bg-haze p-2">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnNnd3F0MDBqa2piZGZ3bjhvemh3dmNrcWthMTlscm12djlsc25paCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XzXgeTP0VaJfG/giphy.gif"
            alt="Funny astronaut playing golf animation"
          />
        </div>

        {/* Return button */}
        <Link
          to="/places"
          className="rounded-lg bg-moss px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-ink"
        >
          Explore places on Planet Earth →
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
