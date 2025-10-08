import React from 'react'

function Rain() {
  return (
    <div>
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="rain day">
  <rect width="100%" height="100%" fill="transparent"/>
  <g transform="translate(30,60)">
    <ellipse cx="60" cy="28" rx="60" ry="28" fill="#ECEFF1"/>
    <ellipse cx="24" cy="36" rx="28" ry="16" fill="#ECEFF1"/>
  </g>
  <g stroke="#0277BD" stroke-width="5" stroke-linecap="round">
    <line x1="70" y1="130" x2="70" y2="160"/>
    <line x1="90" y1="130" x2="90" y2="160"/>
    <line x1="110" y1="130" x2="110" y2="160"/>
  </g>
</svg>
    </div>
  )
}

export default Rain