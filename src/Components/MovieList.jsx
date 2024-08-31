import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
//   console.log(movies[0].poster_path
//     );
  return (
    <div className="px-6 bg-transparent ">
        <h1 className="text-4xl py-4  text-white">{title}</h1>
      <div className="flex overflow-x-scroll scroll-hiden">
        <div className="flex ">
            {movies?.map((movie)=>(
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          
        </div>
      </div>
    </div>
  );
}

export default MovieList;
