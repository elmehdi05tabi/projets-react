import React from 'react'
function Location({width='25px',height='25px'}) {
  return (
    <div>
        <svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="location">
  <rect width="100%" height="100%" fill="transparent"/>
  <path d="M100 60c-20 0-36 16-36 36 0 26 36 68 36 68s36-42 36-68c0-20-16-36-36-36z" fill="#E53935"/>
  <circle cx="100" cy="96" r="10" fill="#FFFFFF"/>
</svg>

    </div>
  )
}

export default Location