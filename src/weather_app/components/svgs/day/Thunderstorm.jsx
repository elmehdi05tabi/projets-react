import React from 'react'

function Thunderstorm() {
  return (
    <div>
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="thunderstorm day">
  <rect width="100%" height="100%" fill="transparent"/>
  <g transform="translate(30,40)" fill="#ECEFF1">
    <ellipse cx="60" cy="38" rx="68" ry="30"/>
    <ellipse cx="18" cy="56" rx="28" ry="18"/>
  </g>
  <polygon points="100,120 88,140 108,140 92,170 132,130 112,130" fill="#FFEB3B" stroke="#FBC02D" stroke-width="1"/>
  <g stroke="#0277BD" stroke-width="3" stroke-linecap="round">
    <line x1="80" y1="150" x2="80" y2="165"/>
    <line x1="110" y1="150" x2="110" y2="165"/>
  </g>
</svg>

    </div>
  )
}

export default Thunderstorm