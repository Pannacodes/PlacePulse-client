import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import PlaceCard from "../components/PlaceCard";
const api = import.meta.env.VITE_API_URL
function Places() {
  const [places, setPlaces] = useState([]); //= creates an empty array initially
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [countryFilter, setCountryFilter] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const search = event.target.value;
    setSearch(search);
  };

  const countries = ["All", ...new Set( places.map((place) => place.country))];
  const filteredPlaces = places.filter((place) => {
    const matchesSearch =
      place.location.toLowerCase().includes(search.toLowerCase()) ||
      place.contributor.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || place.category === categoryFilter;

    const matchesCountry =
      countryFilter === "All" || place.country === countryFilter;

    return matchesSearch && matchesCategory && matchesCountry;
  });

  useEffect(() => {
    axios
      .get(api + "/places")
      .then((response) => {
        setPlaces(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);
  // "When this page loads, get some data."

  if (loading) {
    return (
      <div className="py-16 text-center">
        <p className="font-mono text-sm text-slate">Loading places...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="py-16 text-center">
        <h1 className="mb-3 font-display text-3xl text-ink">
          Something went wrong
        </h1>

        <p className="text-slate">
          We couldn't load the places right now. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <section className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-mono text-sm uppercase tracking-wider text-slate">
            Explore
          </p>

          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Places 🌍
          </h1>

          <p className="mt-3 max-w-xl text-slate">
            Discover places shared by people around the world and explore their
            environmental conditions.
          </p>
        </div>
        <Link
          to="/places/add"
          className="inline-block self-start rounded-lg bg-moss px-5 py-3 font-medium text-surface hover:opacity-90 sm:self-auto"
        >
          + Add a place
        </Link>
      </section>

      {/* FILTERS */}
      <section className="rounded-xl border border-mist bg-surface/40 p-5 sm:p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <label className="mb-2 block text-sm font-medium text-ink">
              Search
            </label>
            <input
              type="text"
              placeholder="Search places or contributors..."
              value={search}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-mist bg-surface px-4 py-3 outline-none focus:border-moss"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              Connection
            </label>
            <select
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
              className="w-full rounded-lg border border-mist bg-surface px-4 py-3 outline-none focus:border-moss"
            >
              <option value="All">All connections</option>
              <option value="Where I live">Where I live</option>
              <option value="Where I grew up">Where I grew up</option>
              <option value="Where I am travelling">
                Where I am travelling
              </option>
              <option value="A place I love">A place I love</option>
              <option value="A place I discovered">A place I discovered</option>
              <option value="A place I used to live">
                A place I used to live
              </option>
              <option value="Just curious">Just curious</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-ink">
              Country
            </label>
            <select
              value={countryFilter}
              onChange={(event) => setCountryFilter(event.target.value)}
              className="w-full rounded-lg border border-mist bg-surface px-4 py-3 outline-none focus:border-moss"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink">
            {filteredPlaces.length}{" "}
            {filteredPlaces.length === 1 ? "place" : "places"}
          </h2>
        </div>

        {filteredPlaces.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-mist bg-surface/40 px-6 py-12 text-center">
            <h2 className="mb-2 font-display text-2xl text-ink">
              No places found
            </h2>

            <p className="text-slate">Try changing your search or filters.</p>
          </div>
        )}
      </section>
    </div>
  );
}
export default Places;
