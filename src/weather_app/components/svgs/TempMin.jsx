import React from 'react'
import SvgHoc from './SvgHoc'
function TempMin({width,height}) {
  return (
    <div>
<svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="minTitle minDesc">
  <title id="minTitle">Température minimale</title>
  <desc id="minDesc">Thermomètre avec remplissage bas et flèche vers le bas</desc>
  <defs>
    <linearGradient id="gCool" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#7fd3ff"/>
      <stop offset="100%" stop-color="#2d9cff"/>
    </linearGradient>
  </defs>
  <rect x="10.5" y="2" width="3" height="14" rx="1.5" fill="none" stroke="#333" stroke-width="1.2"/>
  <circle cx="12" cy="19" r="4" fill="none" stroke="#333" stroke-width="1.2"/>
  <rect x="11" y="14.5" width="2" height="2.5" rx="1" fill="url(#gCool)"/>
  <circle cx="12" cy="19" r="2.2" fill="url(#gCool)"/>
  <path d="M18 11 L18 16 M18 16 L16 14 M18 16 L20 14" stroke="#2d9cff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>

    </div>
  )
}

export default SvgHoc(TempMin)