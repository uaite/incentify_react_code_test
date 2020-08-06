import React from "react";
import { useQuery, gql } from "@apollo/client";

const STARSHIPS_QUERY = gql`
  {
    allStarships {
      id
      name
      manufacturer
      className: class
      costInCredits
      passengers
      crew
      cargoCapacity
      length
      hyperdriveRating
      maxAtmospheringSpeed
      films {
        id
        title
      }
    }
  }
`;

function Ships() {
  const { loading, error, data } = useQuery(STARSHIPS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allStarships.map(
    ({
      name,
      id,
      manufacturer,
      className,
      costInCredits,
      passengers,
      crew,
      cargoCapacity,
      length,
      hyperdriveRating,
      maxAtmospheringSpeed,
    }) => (
      <div key={id}>
        <p>
          {name}[{id}]: {className} class starship, manufactured by:{" "}
          {manufacturer}.
        </p>
        <p>Price in Credits: {costInCredits}</p>
        <p>
          Capacities: Crew {crew}, Passengers: {passengers}, Cargo:{" "}
          {cargoCapacity}.
        </p>
        <p>
          Stats: Length {length}m, HyperdriveRating: {hyperdriveRating}, Max
          Atmo Speed: {maxAtmospheringSpeed}
        </p>
      </div>
    )
  );
}

export default Ships;
