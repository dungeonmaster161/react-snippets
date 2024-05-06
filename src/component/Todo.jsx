import React from 'react'

export default function Todo({id,title,description}) {
  return (
    <div>
      <>
        <h1>Id : {id}</h1>
        <h1> Title : {title} </h1>
        <h5> Description : {description} </h5>
      </>
    </div>
  )
}
