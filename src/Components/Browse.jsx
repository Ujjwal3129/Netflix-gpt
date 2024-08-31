import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import Secondary from "./Secondary";
import usePopluarMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

function Browse() {
  useNowPlayingMovies();
  usePopluarMovies();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch/> : <>
      <MainContainer />
      <Secondary />
      </>}
      
      
    </div>
  );
}

export default Browse;
