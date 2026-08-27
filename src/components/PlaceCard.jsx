import { Link } from "react-router-dom";

function PlaceCard({ place }) {
  return (
    <Link to={`/places/${place.id}`} className="group block h-full">
      <article className="flex h-full flex-col justify-between rounded-xl border border-mist bg-surface/50 p-6 transition hover:-translate-y-1 hover:border-moss">
        <div>
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-slate">
                {place.country}
              </p>
              <h2 className="font-display text-2xl font-semibold text-ink group-hover:text-moss">
                {place.location}
              </h2>
            </div>

            <span className="text-lg text-slate">→</span>
          </div>

          <p className="mb-3 text-sm text-slate">
            Added by{" "}
            <span className="font-medium text-ink">@{place.contributor}</span>
          </p>

          <p className="text-sm leading-relaxed text-slate">
            {place.contribution
              ? place.contribution
              : "No contribution added yet."}
          </p>
        </div>
        <div className="mt-6 border-t border-mist pt-4">
          <p className="text-sm font-medium text-moss">
            Check @{place.contributor}'s air quality →
          </p>
        </div>
      </article>
    </Link>
  );
}

export default PlaceCard;
