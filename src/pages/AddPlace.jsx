import { useState } from "react";
import axios from "axios";

function AddPlace() {
  const [contributor, setContributor] = useState("");
  const [locationName, setLocationName] = useState("");
  const [category, setCategory] = useState("");
  const [contribution, setContribution] = useState("");
  // here with useState I have said "These pieces of state belong to this particular AddPlace component"

  const handleSubmit = (event) => {
    event.preventDefault();
    //this prevents the browser from reloading
    const newPlace = {
      contributor,
      locationName,
      category,
      contribution,
    };

    axios
      .post("http://localhost:5005/places", newPlace)
      .then((response) => {
        console.log(response.data);
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
            <option value="A place I used to live">A place I used to live</option>
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
