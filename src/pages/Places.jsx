import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import PlaceCard from "../components/PlaceCard";

function Places() {
  const [places, setPlaces] = useState([]); //= creates an empty array initially
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [countryFilter, setCountryFilter] = useState("All");

  const handleInputChange = (event) => {
    const search = event.target.value;
    setSearch(search);
  };

  const countries = ["All", ...new Set(places.map((place) => place.country))];

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
      .get("http://localhost:5005/places")
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // "When this page loads, get some data."

  return (
    <div>
      <h1>Explore Places 🌍</h1>

      <Link to="/places/add">
        <button>Add a place</button>
      </Link>

      <input
        type="text"
        placeholder="Search places or contributors..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <select
        value={categoryFilter}
        onChange={(event) => setCategoryFilter(event.target.value)}
      >
        <option value="All">All connections</option>
        <option value="Where I live">Where I live</option>
        <option value="Where I grew up">Where I grew up</option>
        <option value="Where I am travelling">Where I am travelling</option>
        <option value="A place I love">A place I love</option>
        <option value="A place I discovered">A place I discovered</option>
        <option value="A place I used to live">A place I used to live</option>
        <option value="Just curious">Just curious</option>
      </select>

      <select
        value={countryFilter}
        onChange={(event) => setCountryFilter(event.target.value)}
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {filteredPlaces.length > 0 ? (
        filteredPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))
      ) : (
        <p>No places found. Try changing your search or filters.</p>
      )}
    </div>
  );
}
export default Places;
