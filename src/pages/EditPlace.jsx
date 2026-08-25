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
    <main className="mx-auto w-full max-w-2xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
          Update your place
        </p>

        <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
          Edit place
        </h1>
        <p className="mt-3 text-slate">
          Update your connection or contribution to this place.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-mist bg-white p-6 sm:p-8"
      >
        {/* Your name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            Your name
          </label>
          <input
            type="text"
            value={contributor}
            onChange={(event) => setContributor(event.target.value)}
            className="w-full rounded-lg border border-mist bg-haze px-4 py-3 text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/20"
          />
        </div>

        {/* Connection */}
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            How are you connected to this place?
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-lg border border-mist bg-haze px-4 py-3 text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/20"
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
        </div>

        {/* Contribution */}
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            Your contribution{" "}
            <span className="font-normal text-slate">(optional)</span>
          </label>
          <textarea
            value={contribution}
            onChange={(event) => setContribution(event.target.value)}
            rows="5"
            placeholder="You can share a story, a comment, a detail you want people to know."
            className="w-full resize-y rounded-lg border border-mist bg-haze px-4 py-3 text-ink outline-none transition placeholder:text-slate/70 focus:border-moss focus:ring-2 focus:ring-moss/20"
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          className="w-full rounded-lg bg-moss px-5 py-3 font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-moss/40 focus:ring-offset-2 sm:w-auto"
        >
          Save changes
        </button>
      </form>
    </main>
  );
}

export default EditPlace;
