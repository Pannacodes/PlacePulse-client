import { Link } from "react-router-dom";


function PlaceCard({place}) {
  return (
    <Link to={`/places/${place.id}`}>
    <article>

      <h2>{place.location}</h2>

      <p>{place.country}</p>

      <p>Added by @{place.contributor}</p>

      
      <p>Check @{place.contributor}'s air quality</p>
      
    </article>
    </Link>
  )
}

export default PlaceCard