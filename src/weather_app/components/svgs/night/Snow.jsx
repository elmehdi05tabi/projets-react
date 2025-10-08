import React from 'react'

function Snow() {
  return (
    <div>
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="snow night">
  <rect width="100%" height="100%" fill="transparent"/>
  <path d="M130 60a26 26 0 1 1-34 34 36 36 0 1 0 34-34z" fill="#F0E68C"/>
  <g transform="translate(30,75)" fill="#90A4AE">
    <ellipse cx="60" cy="28" rx="60" ry="28"/>
    <ellipse cx="24" cy="36" rx="28" ry="16"/>
  </g>
  <g stroke="#E3F2FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <g transform="translate(70,140)">
      <line x1="0" y1="-6" x2="0" y2="6"/>
      <line x1="-6" y1="0" x2="6" y2="0"/>
      <line x1="-4.5" y1="-4.5" x2="4.5" y2="4.5"/>
      <line x1="-4.5" y1="4.5" x2="4.5" y2="-4.5"/>
    </g>
    <g transform="translate(110,150)">
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