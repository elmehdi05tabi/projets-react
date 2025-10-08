import React from 'react'
import SvgHoc from '../SvgHoc'
function FewClouds({width='25px',height='25px'}) {
  return (
    <div>
        <svg width={width} height={height}viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="few clouds day">
  <rect width="100%" height="100%" fill="transparent"/>
  <circle cx="60" cy="60" r="22" fill="#FFD54A"/>
  <g transform="translate(90,85)">
    <ellipse cx="30" cy="20" rx="40" ry="20" fill="#ECEFF1"/>
    <ellipse cx="10" cy="25" rx="22" ry="14" fill="#ECEFF1"/>
  </g>
</svg>

    </div>
  )
}

export default SvgHoc(FewClouds)