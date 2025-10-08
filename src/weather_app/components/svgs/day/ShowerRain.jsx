import React from 'react'

function ShowerRain() {
  return (
    <div>
       <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="shower rain day">
  <rect width="100%" height="100%" fill="transparent"/>
  <g transform="translate(40,60)">
    <ellipse cx="60" cy="28" rx="60" ry="28" fill="#ECEFF1"/>
    <ellipse cx="24" cy="36" rx="28" ry="16" fill="#ECEFF1"/>
  </g>
  <g stroke="#039BE5" stroke-width="4" stroke-linecap="round">
    <line x1="70" y1="140" x2="82" y2="120"/>
    <line x1="95" y1="140" x2="107" y2="120"/>
    <line x1="120" y1="140" x2="132" y2="120"/>
  </g>
</svg>

    </div>
  )
}

export default ShowerRain