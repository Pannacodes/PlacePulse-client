import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Whoops you seem to be on on another Planet.</h1>
      <p>
        We couldn't find the place you were looking for.
      </p>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnNnd3F0MDBqa2piZGZ3bjhvemh3dmNrcWthMTlscm12djlsc25paCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XzXgeTP0VaJfG/giphy.gif"
        alt="Funny astronaut playing golf animation"
      />

      <br />

      <Link to="/places">
        <button>Explore places on Planet Earth</button>
      </Link>
    </div>
  );
}

export default NotFound;
