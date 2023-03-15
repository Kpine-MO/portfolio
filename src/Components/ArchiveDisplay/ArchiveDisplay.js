import React from 'react'
import "./ArchiveDisplay.css"

function ArchiveDisplay({year,title,madeAt,buildWith,link}) {
  return (
    <div className='projectTable'>   
            <td className='headData year'>{year}</td>
            <td className='headData titleGrow'>{title}</td>
            <td className='headData made'>{madeAt}</td>
            <td className='headData build'>{buildWith}</td>
            <td className='headData link'>{link}</td>
    </div>
  )
}

export default ArchiveDisplay
