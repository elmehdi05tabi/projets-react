import React from 'react'
import SvgHoc from '../SvgHoc'
 function ClearSky({width='25px',height='25px'}) {
  return (
    <div>
        <svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="clear sky day">
  <rect width={width} height={height} fill="transparent"/>
  <circle cx="100" cy="100" r="30" fill="#FFD54A"/>
  <g stroke="#FFD54A" stroke-width="4" stroke-linecap="round">
    <line x1="100" y1="20" x2="100" y2="50"/>
    <line x1="100" y1="150" x2="100" y2="180"/>
    <line x1="20" y1="100" x2="50" y2="100"/>
    <line x1="150" y1="100" x2="180" y2="100"/>
    <line x1="40" y1="40" x2="60" y2="60"/>
    <line x1="140" y1="140" x2="160" y2="160"/>
    <line x1="40" y1="160" x2="60" y2="140"/>
    <line x1="140" y1="60" x2="160" y2="40"/>
  </g>
</svg>
    </div>
  )
}
export default SvgHoc(ClearSky)