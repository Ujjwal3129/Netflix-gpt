import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constant";


const usePopluarMovies = ()=>{
    const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS )
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }

  useEffect(()=>{
    getPopularMovies()
   
  },[]);
}

export default usePopluarMovies;