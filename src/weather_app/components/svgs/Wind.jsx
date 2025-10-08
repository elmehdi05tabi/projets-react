import React from 'react'
import SvgHoc from './SvgHoc'
function Wind({width,height}) {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={width} height={height} aria-labelledby="windTitle" role="img">
  <title id="windTitle">Wind</title>
  <defs>
    <linearGradient id="windGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7ED0FF"/>
      <stop offset="100%" stop-color="#1FA2FF"/>
    </linearGradient>
  </defs>
  <g fill="none" stroke="url(#windGrad)" stroke-width="6" stroke-linecap="round">
    <path d="M16 44 C40 32, 88 32, 110 44"/>
    <path d="M12 68 C32 60, 76 60, 104 74"/>
    <path d="M20 92 C48 80, 84 80, 108 92"/>
  </g>
</svg>

    </div>
  )
}

export default SvgHoc(Wind)