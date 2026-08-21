import { Link } from "react-router-dom";

function Places() {
  return (
    <div>
      <h1>Explore Places 🌍</h1>

      <Link to="/places/add">
        <button>Add your place</button>
      </Link>
    </div>
  );
}

export default Places;
