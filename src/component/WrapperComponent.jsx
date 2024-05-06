import React from 'react'



export default function WrapperComponent({innerComponent,children}) {
  return (
    <div style={{border:"2px solid black"}}>
      {innerComponent}
      {children}
    </div>
  )
}
