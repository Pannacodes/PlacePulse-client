import { Link } from "react-router-dom";


function PlaceCard({place}) {
  return (
    <article>

      <h2>{place.locationName}</h2>

      <p>{place.country}</p>

      <p>Added by @{place.contributor}</p>

      <Link to={`/places/${place.id}`}>
        Check @{place.contributor}'s air quality →
      </Link>

    </article>
  )
}

export default PlaceCard