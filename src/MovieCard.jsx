import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster} alt="movieImage" />
      </div>
      <div>
        <span>{movie.type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
