import React, { useContext, useState } from 'react'
import {File,Recycle,Terminal} from 'lucide-react';
import Approuting from './Routing/Approuting';
import { Link } from 'react-router'
import { MyData } from './Context/Context';


const App = () => {

let {openfile,setOpenfile,setRecyclewindow,setTerminal}=useContext(MyData)

const handleFile=()=>{
  setOpenfile(true)
  
}
const handleRecycle=()=>{
setRecyclewindow(true)
}
const handleTerminal=()=>{
  setTerminal(true)
}

  return (
    <div>
      <Link to='/pages'>  <div className=' h-180 bg-blue-300'><img className='h-full w-full object-cover' src='https://images.unsplash.com/photo-1696643830146-44a8755f1905?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
      </div></Link>
    
      <div className='h-25 bg-purple-200 flex gap-15 pl-[50%] pt-5'>
        <Link  to='/pages'><File size={30} onClick={handleFile}/></Link>
         <Link  to='/pages'><Recycle size={30} onClick={handleRecycle}/></Link>
          <Link  to='/pages'><Terminal size={30} onClick={handleTerminal}/></Link>
    </div>
    <Approuting/>
    </div>
  )
}

export default App