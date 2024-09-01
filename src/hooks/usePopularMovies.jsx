import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";


const usePopluarMovies = ()=>{
    const dispatch = useDispatch();
    const usePopularMovies = useSelector(
      (store) => store.movies.usePopularMovies 
    );
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS )
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }

  useEffect(()=>{
   !usePopularMovies  && getPopularMovies()
   
  },[]);
}

export default usePopluarMovies;