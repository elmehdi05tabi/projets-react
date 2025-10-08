import React from 'react'
import SvgHoc from './SvgHoc'
function Sunset({width,height}) {
  return (
    <div>

<svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sunsetTitle sunsetDesc">
  <title id="sunsetTitle">Coucher du soleil</title>
  <desc id="sunsetDesc">Icône représentant un soleil descendant derrière l'horizon</desc>

  
  <defs>
    <linearGradient id="sunsetGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFA500"/>
      <stop offset="100%" stop-color="#FF4500"/>
    </linearGradient>
  </defs>


  <circle cx="12" cy="14" r="4" fill="url(#sunsetGradient)" />

 
  <rect x="2" y="18" width="20" height="1.5" rx="0.5" fill="#333" />

 
  <path d="M12 4 L12 7" stroke="#FFA500" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M6 6 L7.8 7.8" stroke="#FFA500" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M18 6 L16.2 7.8" stroke="#FFA500" stroke-width="1.4" stroke-linecap="round"/>

 
  <path d="M12 10 L12 12.5 M12 12.5 L10.5 11 M12 12.5 L13.5 11" 
        stroke="#FF4500" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>


  <path d="M5 17c0-1 1-2 2.5-2 0.6 0 1.2 0.2 1.6 0.5 0.3-0.9 1.1-1.5 2-1.5 1.2 0 2.2 0.9 2.4 2h-8.5z"
        fill="#ccc" opacity="0.8"/>
</svg>

    </div>
  )
}

export default SvgHoc(Sunset)