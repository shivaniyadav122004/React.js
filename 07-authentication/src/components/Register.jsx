import React from 'react'
import { useState } from 'react'

const Register = ({setToggle,regis,setRegis}) => {
  const[allData,setAllData]=useState({
    name:"",
    fullname:"",
    password:""

  })
  console.log(allData)

const handleSubmit=(e)=>{
  e.preventDefault()
  setRegis((prev)=>[...prev,allData])

  localStorage.setItem("registered user",JSON.stringify(regis))
  const stored=JSON.parse(localStorage.getItem("registered user"))
  console.log(stored)

  setAllData({
    name:"",
    fullname:"",
    password:""

  })
  
}

  const handleChange=(e)=>{
    setAllData({...allData,[e.target.name]:e.target.value})
  }



  return (
    <form >

    <div className='h-100 w-120 p-3 flex flex-col bg-white gap-5 text-black rounded-2xl'>
      <h1 className='text-2xl flex items-center justify-center'>Registration page</h1>
      <div className='flex flex-col items-center justify-center gap-5 text-black'>
        <input onChange={handleChange} value={allData.name} name="name" className='h-8 w-100 border border-black rounded-xl'  type='text' placeholder='name'></input>
        <input onChange={handleChange} value={allData.fullname}name="fullname" className='h-8 w-100 border border-black rounded-xl'type='text' placeholder='fullname'></input>
        <input onChange={handleChange} value={allData.password} name="password" className='h-8 w-100 border border-black rounded-xl' type='password' placeholder='password'></input>
        <button className="border h-10 w-20 rounded-xl bg-blue-700" type='submit'>SignUp</button>
        <h2>Already have an account?<span onClick={()=>setToggle((prev)=>!prev)}className='text-red-500'>Login</span></h2>
      </div>
      
    </div>
    </form>
  )
}

export default Register 