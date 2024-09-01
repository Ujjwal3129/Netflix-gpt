import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideos } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/Constant";

const useMovieTrailer = (setTrailerId, movieId) => {
  // const dispatch = useDispatch();

  const trailerVideos = useSelector(
    (store) => store.movies.trailerVideos
  );

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : null;
    setTrailerId(trailer.key);
  };
  useEffect(() => {
  
   !trailerVideos && getMovieVideos();
  
}, []);

return(
    <div></div>
)

};


export default useMovieTrailer;
