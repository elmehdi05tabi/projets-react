import React from 'react'
import SvgHoc from './SvgHoc'
function Sunrise({width,height}) {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={width} height={height} aria-labelledby="sunriseTitle" role="img">
  <title id="sunriseTitle">Sunrise</title>
  <defs>
    <radialGradient id="sunGrad" cx="0.5" cy="0.5" r="0.7">
      <stop offset="0%" stop-color="#FFD76B"/>
      <stop offset="100%" stop-color="#FF914D"/>
    </radialGradient>
  </defs>
  <g stroke="#FFB84D" stroke-linecap="round">
    <circle cx="64" cy="72" r="22" fill="url(#sunGrad)" stroke="none"/>
    <line x1="64" y1="26" x2="64" y2="48" stroke-width="3"/>
    <line x1="30" y1="54" x2="18" y2="40" stroke-width="3"/>
    <line x1="98" y1="54" x2="110" y2="40" stroke-width="3"/>
    <line x1="42" y1="92" x2="24" y2="92" stroke-width="3"/>
    <line x1="86" y1="92" x2="104" y2="92" stroke-width="3"/>
  </g>
  <path d="M24 92 Q64 70 104 92" fill="none" stroke="#FFA34A" stroke-width="4" stroke-linecap="round"/>
</svg>
    </div>
  )
}

export default SvgHoc(Sunrise)