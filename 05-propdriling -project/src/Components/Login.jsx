import React from 'react'
import { useState } from 'react'

const Login = ({setFlag}) => {
   const[name,setName]=useState("")
   const[pass,setPass]=useState("")
   

  return (
    <div className='forms'>
      <h1>Login</h1>
      <form>
        <input onChange={(e)=>{setName(e.target.value)}}  type='text' placeholder='enter your name'></input>
        <h3>username:{name}</h3>
        <input onChange={(e)=>{setPass(e.target.value)}} type='password' placeholder='enter yor password'></input>
        <h3>password:{pass}</h3>
        <button>Submit</button>
      </form>
      <h2>you dont have an account? <span onClick={()=>setFlag((setFlag)=>!setFlag)}>Register </span></h2>
    </div>
  )
}

export default Login