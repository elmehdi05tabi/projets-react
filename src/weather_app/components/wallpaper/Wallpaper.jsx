import React from 'react'
import image from './wallpaper.jpg' ; 
import './wallpaper.scss'
function Wallpaper() {
  return (
    <div className='wallpaper-container'>
        <img className='wallpaper'src={image} alt="wallpaper" />
    </div>
  )
}

export default Wallpaper