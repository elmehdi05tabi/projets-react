import React from 'react'

function Thunderstorm() {
  return (
    <div>
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="thunderstorm night">
  <rect width="100%" height="100%" fill="transparent"/>
  <path d="M140 60a20 20 0 1 1-26 30 36 36 0 1 0 26-30z" fill="#F0E68C"/>
  <g transform="translate(20,60)" fill="#78909C">
    <ellipse cx="60" cy="38" rx="68" ry="30"/>
    <ellipse cx="18" cy="56" rx="28" ry="18"/>
  </g>
  <polygon points="98,118 86,140 106,140 92,168 130,126 110,126" fill="#FFF176" stroke="#FBC02D" stroke-width="1"/>
  <g stroke="#4FC3F7" stroke-width="3" stroke-linecap="round">
    <line x1="75" y1="150" x2="75" y2="165"/>
    <line x1="105" y1="150" x2="105" y2="165"/>
  </g>
</svg>

    </div>
  )
}

export default Thunderstorm