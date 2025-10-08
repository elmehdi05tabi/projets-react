import React from 'react'
import SvgHoc from '../SvgHoc'
function BrokenClouds({width='25px',height='25px'}) {
  return (
    <div>
        <svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="broken clouds day">
  <rect width="100%" height="100%" fill="transparent"/>
  <g transform="translate(40,80)" fill="#ECEFF1">
    <ellipse cx="60" cy="28" rx="60" ry="28"/>
    <ellipse cx="20" cy="36" rx="36" ry="20"/>
  </g>
  <g transform="translate(10,110)" fill="#F5F5F5">
    <ellipse cx="60" cy="20" rx="48" ry="18"/>
  </g>
</svg>

    </div>
  )
}

export default SvgHoc(BrokenClouds)