import React from "react";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    allFilms {
      id
      title
      episodeId
      director
      releaseDate
    }
  }
`;

function Films() {
  const { loading, error, data } = useQuery(FILMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allFilms.map(
    ({ id, title, episodeId, director, releaseDate }) => (
      <div key={id}>
        <p>
          Episode {episodeId} - {title} [{id}]: Directed by {director}, Released{" "}
          {releaseDate}
        </p>
      </div>
    )
  );
}

export default Films;
