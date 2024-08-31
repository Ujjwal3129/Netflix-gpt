import React from 'react'
import {IMG_URL_CDN} from "../Utils/Constant"

function MovieCard({posterPath}) {
  return (
    <div className='w-48 p-4'>
      <img  src={IMG_URL_CDN + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
