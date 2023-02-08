import React from 'react'
import "./Psc.css"

function Psc({name, imgUrl}) {
  return (
    
    <div>
      <h5>{name}</h5>
      <img src={imgUrl}/>
    </div>
  )
}

export default Psc
