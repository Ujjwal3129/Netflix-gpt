
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useState } from "react";

function VideoBackgrounds({ movieId }) {
  
  const [trailerId , setTrailerId] = useState(null);
  // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(setTrailerId,movieId);
  
  // console.log("Redux state - Trailer Video:", trailerVideo);

  // const videoUrl = trailerVideo ? `https://www.youtube.com/embed/${trailerId}` : '';
  
  // console.log("YouTube URL:", videoUrl);

  return (
    <div className="w-screen " >
   
        <iframe
          className="w-full aspect-video"
          src={"https://www.youtube.com/embed/"+trailerId + "?&autoplay=1&mute=1" }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    
    </div>
  );
}

export default VideoBackgrounds;
