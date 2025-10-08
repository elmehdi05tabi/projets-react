import React from 'react'

function Snow() {
  return (
    <div>
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="snow day">
  <rect width="100%" height="100%" fill="transparent"/>
  <g transform="translate(30,60)" fill="#ECEFF1">
    <ellipse cx="60" cy="28" rx="60" ry="28"/>
    <ellipse cx="24" cy="36" rx="28" ry="16"/>
  </g>
  <g stroke="#90CAF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <g transform="translate(70,140)">
      <line x1="0" y1="-6" x2="0" y2="6"/>
      <line x1="-6" y1="0" x2="6" y2="0"/>
      <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5"/>
      <line x1="-4.5" y1="4.5" x2="4.5" y2="-4.5"/>
    </g>
    <g transform="translate(100,150)">
      <line x1="0" y1="-6" x2="0" y2="6"/>
      <line x1="-6" y1="0" x2="6" y2="0"/>
      <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5"/>
      <line x1="-4.5" y1="4.5" x2="4.5" y2="-4.5"/>
    </g>
  </g>
</svg>

    </div>
  )
}

export default Snow