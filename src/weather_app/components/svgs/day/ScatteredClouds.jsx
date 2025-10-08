import React from 'react'

function ScatteredClouds() {
  return (
    <div>
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="scattered clouds day">
  <rect width="100%" height="100%" fill="transparent"/>
  <circle cx="40" cy="50" r="20" fill="#FFD54A"/>
  <g transform="translate(70,90)">
    <ellipse cx="20" cy="18" rx="36" ry="18" fill="#ECEFF1"/>
    <ellipse cx="2" cy="22" rx="22" ry="14" fill="#ECEFF1"/>
  </g>
  <g transform="translate(110,110)">
    <ellipse cx="24" cy="18" rx="44" ry="22" fill="#ECEFF1"/>
    <ellipse cx="44" cy="22" rx="20" ry="12" fill="#ECEFF1"/>
  </g>
</svg>

    </div>
  )
}

export default ScatteredClouds