import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;
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
        if (!response.data.results) {
          alert("We couldn't find that location. Please check the spelling.");
          return;
        }
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

        axios.post(api + "/places", newPlace).then((response) => {
          console.log(response.data);
          navigate(`/places/`);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-10 sm:px-8 sm:py-14">
      <Link
        to="/places"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate transition hover:text-moss"
      >
        ← Back to places
      </Link>
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-moss">
          Share a place
        </p>

        <h1 className="font-[Fraunces] text-4xl font-bold text-ink sm:text-5xl">
          Add a place 🌍
        </h1>
        <p className="mt-3 text-slate">
          Tell us about a place that means something to you and discover its
          current environmental conditions.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-mist bg-surface p-6 sm:p-8"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            Your name
          </label>
          <input
            type="text"
            value={contributor}
            onChange={(event) => setContributor(event.target.value)}
            required
            className="w-full rounded-lg border border-mist bg-haze px-4 py-3 text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/20"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            Location
          </label>
          <input
            type="text"
            value={locationName}
            onChange={(event) => setLocationName(event.target.value)}
            placeholder="e.g. Barcelona"
            required
            className="w-full rounded-lg border border-mist bg-haze px-4 py-3 text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/20"
          />
          <p className="mt-2 text-sm text-slate">
            Enter a city, town or other location.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            How are you connected to this place?
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
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

        <div>
          <label className="mb-2 block text-sm font-medium text-ink">
            Your contribution {""}
            <span className="font-normal text-slate">(optional)</span>
          </label>
          <textarea
            value={contribution}
            placeholder="You can share a story, a comment, a detail you want people to know."
            onChange={(event) => setContribution(event.target.value)}
            rows="5"
            className="w-full resize-y rounded-lg border border-mist bg-haze px-4 py-3 text-ink outline-none transition placeholder:text-slate/70 focus:border-moss focus:ring-2 focus:ring-moss/20"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-moss px-5 py-3 font-medium text-surface transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-moss/40 focus:ring-offset-2 sm:w-auto"
        >
          Add place
        </button>
      </form>
    </main>
  );
}

export default AddPlace;
