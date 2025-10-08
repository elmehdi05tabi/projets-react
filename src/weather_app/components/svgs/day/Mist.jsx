import React from 'react'
import SvgHoc from '../SvgHoc'
function Mist({width='25px',height='25px'}) {
  return (
    <div>
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="mist day">
  <rect width="100%" height="100%" fill="transparent"/>
  <g transform="translate(20,70)" fill="#ECEFF1">
    <ellipse cx="60" cy="28" rx="60" ry="28"/>
    <ellipse cx="20" cy="36" rx="28" ry="16"/>
  </g>
  <g stroke="#B0BEC5" stroke-width="4" stroke-linecap="round">
    <line x1="20" y1="140" x2="180" y2="140"/>
    <line x1="40" y1="155" x2="160" y2="155"/>
    <line x1="10" y1="125" x2="120" y2="125"/>
  </g>
</svg>

    </div>
  )
}

export default Mist