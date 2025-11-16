import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
   const[toggle,setToggle] =useState(true)
   const [local,setLocal]=useState(()=>{
     return JSON.parse(localStorage.getItem("info")) || []
   })
   const[regis,setRegis]=useState([])
   
   
  return (
    <>
   
    <div className='h-screen w-full flex items-center justify-center bg-black '>
    {toggle?<Login setToggle={setToggle} local={local} setLocal={setLocal} />:<Register setToggle={setToggle} regis={regis} setRegis={setRegis}/>}
     
    </div>
    <div>{local.map((elem)=>{
      return <h1 className='text-white'>{elem.name}</h1>
    })}</div>
     </>
  )
}

export default App 