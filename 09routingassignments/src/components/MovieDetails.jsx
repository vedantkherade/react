import React from "react";
import { useParams } from "react-router-dom";


const movies = [
  { id: "tt101", title: "Inception", year: 2010 },
  { id: "tt102", title: "Avatar", year: 2009 },
  { id: "tt103", title: "Interstellar", year: 2014 },
];

export default function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }
  return (
    <div>
      <h2>Movie Details</h2>
      <p>
        <strong>Title:</strong> {movie.title}
      </p>
      <p>
        <strong>Year:</strong> {movie.year}
      </p>
    </div>
  );
}
