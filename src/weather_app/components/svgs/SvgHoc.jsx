import React from 'react'

export default function SvgHoc(OriginalComponent) {
    const NewComponent = props=>{
        const newProps = {
            width : '25px',
            heigth : '25px',
            ...props 
        }
        return <OriginalComponent {...newProps}/>
    }

  return (
    NewComponent
  )
}
