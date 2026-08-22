import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import PlaceCard from "../components/PlaceCard";

function Places() {
  const [places, setPlaces] = useState([]); //= creates an empty array initially

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

      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default Places;
