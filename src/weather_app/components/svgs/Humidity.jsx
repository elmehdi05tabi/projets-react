import React from 'react'
import SvgHoc from './SvgHoc'
function Humidity({width,height}) {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={width} height={height} aria-labelledby="humidityTitle" role="img">
  <title id="humidityTitle">Humidity</title>
  <defs>
    <linearGradient id="humidityGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#56CCF2"/>
      <stop offset="100%" stop-color="#2F80ED"/>
    </linearGradient>
  </defs>
  <path d="M64 16 C40 48, 28 68, 28 84 a36 36 0 0 0 72 0 c0-16-12-36-36-68z" fill="url(#humidityGrad)"/>
</svg>

    </div>
  )
}

export default SvgHoc(Humidity)