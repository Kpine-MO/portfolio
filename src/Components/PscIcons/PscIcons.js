import React from 'react'
import "./PscIcons.css"
import { ImBin } from "react-icons/im"
import { BsInfo } from "react-icons/bs"

function PscIcons() {

  return (
    <div>
      <div className='pscIcons'>
        <ImBin/>
        <span className='boundry'></span>
        <BsInfo/>
      </div>
    </div>
  )
}

export default PscIcons
