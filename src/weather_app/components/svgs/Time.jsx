import React from 'react'
import SvgHoc from './SvgHoc'
function Time({width,height}) {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="1.5" />
  <line x1="16" y1="2" x2="16" y2="6" stroke-width="1.5" />
  <line x1="8" y1="2" x2="8" y2="6" stroke-width="1.5" />
  <line x1="3" y1="10" x2="21" y2="10" stroke-width="1.5" />
</svg>


    </div>
  )
}

export default SvgHoc(Time)