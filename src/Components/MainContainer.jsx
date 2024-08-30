import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackgrounds from './VideoBackgrounds';
import Videotits from './Videotits';


function MainContainer() {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(movies ==null ) return;
    // console.log(movies);

    const mainMovie = movies[0];
    // console.log(mainMovie);

    const {title, overview,id} = mainMovie;
  return (
    <div>
        <Videotits title={title} overview={overview}/>
      <VideoBackgrounds movieId={id}/>
    
    </div>
  )
}

export default MainContainer
