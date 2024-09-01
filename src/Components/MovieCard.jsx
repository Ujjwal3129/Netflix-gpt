import React from 'react'
import {IMG_URL_CDN} from "../Utils/Constant"

function MovieCard({posterPath}) {
  if(!posterPath) return null;
  return (
    <div className='w-48 md:p-4 p-6'>
      <img  src={IMG_URL_CDN + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
