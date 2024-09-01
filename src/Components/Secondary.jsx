import React from "react";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

function Secondary() {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
      <div className=" mt-0  md:-mt-44 pl-4 md:pl-12 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
      </div>  
    )
  );
}

export default Secondary;
