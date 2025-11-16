import React, { useState } from 'react'
import "./index.css"
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {
  const [flag,setFlag]=useState(true)
 

  return (
    <div className='start'>
      
     {flag?<Login setFlag={setFlag}/>:<Register setFlag={setFlag}/>} 
   
    </div>
  )
}

export default App