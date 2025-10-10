import React from 'react'
import wallpaperDay from './wallpaper.jpg' ; 
import wallpaperNg from './wallpaperNg.jpg'; 
import './wallpaper.scss'
import { useSelector } from 'react-redux';
import Weather from '../weather/Weather';
function Wallpaper() {
  const weather = useSelector(({weather})=>weather) ;
  const img = weather.dt > weather.sys.sunset ? wallpaperNg:wallpaperDay 
  return (
    <div className='wallpaper-container'>
        <img className='wallpaper'
        src={img} 
        alt="wallpaper" />
    </div>
  )
}

export default Wallpaper