import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Places() {
  const [places, setPlaces] = useState([]);

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

  return (
    <div>
      <h1>Explore Places 🌍</h1>

      <Link to="/places/add">
        <button>Add your place</button>
      </Link>

      {places.map((place) => (
        <div key={place.id}>
          <h2>{place.location}</h2>
          <p>Added by @{place.contributor}</p>

          <p>{place.country}</p>

          <Link to={`/places/${place.id}`}>
            Check {place.locationName}'s air quality →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Places;
