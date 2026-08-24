import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditPlace() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contributor, setContributor] = useState("");
  const [category, setCategory] = useState("");
  const [contribution, setContribution] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5005/places/${id}`)
      .then((response) => {
        setContributor(response.data.contributor);
        setCategory(response.data.category);
        setContribution(response.data.contribution);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .patch(`http://localhost:5005/places/${id}`, {
        contributor,
        category,
        contribution,
      })
      .then(() => {
        navigate(`/places/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Edit</h1>

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
            onChange={(event) => setContribution(event.target.value)}
          />
        </label>

        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default EditPlace;
