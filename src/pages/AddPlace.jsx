import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddPlace() {
  const navigate = useNavigate();
  const [contributor, setContributor] = useState("");
  const [locationName, setLocationName] = useState("");
  const [category, setCategory] = useState("");
  const [contribution, setContribution] = useState("");
  // here with useState I have said "These pieces of state belong to this particular AddPlace component"

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1&language=en&format=json`,
      )
      .then((response) => {
        const location = response.data.results[0]; // = "Take the first location returned by Open-Meteo and call it location."

        const newPlace = {
          contributor,
          location: location.name,
          country: location.country,
          latitude: location.latitude,
          longitude: location.longitude,
          category,
          contribution,
        }; // = "Create the object that our PlacePulse database needs, using some information from the form and some information from Open-Meteo."

        axios
          .post("http://localhost:5005/places", newPlace)
          .then((response) => {
            console.log(response.data);
            navigate(`/places/`);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Add a place</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Your name
          <input
            type="text"
            value={contributor}
            onChange={(event) => setContributor(event.target.value)}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            value={locationName}
            onChange={(event) => setLocationName(event.target.value)}
          />
        </label>
        <label>
          How are you connected to this place?
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select one</option>
            <option value="Where I live">Where I live</option>
            <option value="Where I grew up">Where I grew up</option>
            <option value="Where I am travelling">Where I am travelling</option>
            <option value="A place I love">A place I love</option>
            <option value="A place I discovered">A place I discovered</option>
            <option value="A place I used to live">
              A place I used to live
            </option>
            <option value="Just curious">Just curious</option>
          </select>
        </label>
        <label>
          Your contribution
          <textarea
            value={contribution}
            placeholder="You can share a story, a comment, a detail you want people to know."
            onChange={(event) => setContribution(event.target.value)}
          />
        </label>
        <button type="submit">Add place</button>
      </form>
    </div>
  );
}

export default AddPlace;
