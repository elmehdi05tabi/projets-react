import React from 'react'
import SvgHoc from './SvgHoc'
function Temp({width,height}) {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={width} height={height} aria-labelledby="tempTitle" role="img">
  <title id="tempTitle">Temperature</title>
  <defs>
    <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FF6A6A"/>
      <stop offset="100%" stopColor="#FF2E63"/>
    </linearGradient>
  </defs>
  <rect x="50" y="24" width="28" height="64" rx="14" fill="none" stroke="url(#tempGrad)" stroke-width="6"/>
  <circle cx="64" cy="96" r="18" fill="url(#tempGrad)"/>
  <line x1="64" y1="24" x2="64" y2="76" stroke="url(#tempGrad)" stroke-width="6" strokeLinecap="round"/>
</svg>

    </div>
  )
}
export default SvgHoc(Temp)
