import React from 'react'
import SvgHoc from './SvgHoc'
function Pressure({width,height}) {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={width}height={height} aria-labelledby="pressureTitle" role="img">
  <title id="pressureTitle">Pressure</title>
  <defs>
    <linearGradient id="pressureGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8E9EFC"/>
      <stop offset="100%" stop-color="#5C7CFA"/>
    </linearGradient>
  </defs>
  <circle cx="64" cy="64" r="44" fill="none" stroke="url(#pressureGrad)" stroke-width="6"/>
  <circle cx="64" cy="64" r="6" fill="url(#pressureGrad)"/>
  <line x1="64" y1="64" x2="96" y2="42" stroke="url(#pressureGrad)" stroke-width="6" stroke-linecap="round"/>
</svg>

    </div>
  )
}

export default SvgHoc(Pressure)