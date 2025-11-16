import React from 'react'
import {Bookmark} from "lucide-react"


const Top = ({brandLogo}) => {
  return (
    
      <div className='top'>
        <img className='amazon-logo' src={brandLogo}></img>
        <button>Save <Bookmark size={40}/></button>
      </div>
    
  )
}

export default Top