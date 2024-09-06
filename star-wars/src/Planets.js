import React from "react";
import { gql, useQuery } from "@apollo/client";

const PLANETS_QUERY = gql`
  {
    allPlanets {
      climate
      createdAt
      diameter
      films {
        id
        title
      }
      gravity
      id
      name
      population
    }
  }
`;

function Planets() {
  const { loading, error, data } = useQuery(PLANETS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allPlanets.map(({ name, population, gravity, id, diameter }) => (
    <div key={id}>
      <p>
        {name}[{id}]: Population of {population}, diameter: {diameter}, and
        gravity of '{gravity}'
      </p>
    </div>
  ));
}

export default Planets;
