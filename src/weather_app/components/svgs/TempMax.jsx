import React from 'react'
import SvgHoc from './SvgHoc'
function TempMax({width,height}) {
  return (
    <div>
<svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="maxTitle maxDesc">
  <title id="maxTitle">Température maximale</title>
  <desc id="maxDesc">Thermomètre avec remplissage élevé et flèche vers le haut</desc>
  <defs>
    <linearGradient id="gWarm" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#ff7b00"/>
      <stop offset="100%" stop-color="#ff2d2d"/>
    </linearGradient>
  </defs>
  
  <rect x="10.5" y="2" width="3" height="14" rx="1.5" fill="none" stroke="#333" stroke-width="1.2"/>

  <circle cx="12" cy="19" r="4" fill="none" stroke="#333" stroke-width="1.2"/>
  
  <rect x="11" y="6" width="2" height="11" rx="1" fill="url(#gWarm)"/>
  <circle cx="12" cy="19" r="3" fill="url(#gWarm)"/>

  <path d="M18 8 L18 3 M18 3 L16 5 M18 3 L20 5" stroke="#ff2d2d" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>

    </div>
  )
}

export default SvgHoc(TempMax)