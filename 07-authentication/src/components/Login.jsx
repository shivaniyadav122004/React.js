import React, { useState } from 'react'

const Login = ({setToggle,setLocal,local}) => {
 
  const[allData,setAllData]=useState({
    name:"",
    username:"",
    password:""
  })
console.log(allData)

  const handleChange=(e)=>{
    let {name,value}=e.target      //ye humne destructuring kri hai e.target.name and e.target.value me se name or value ki 
    setAllData({...allData,[name]:value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    // setLocal(allData)
    let updatedarr=[...local,allData]
    setLocal((prev)=>[...prev,allData])
    localStorage.setItem("info",JSON.stringify(updatedarr))
    alert("data saved")

     setAllData({
    name:"",
    username:"",
    password:""
  })
  
  }

  return (
  
      <form onSubmit={handleSubmit}>
          <div className='h-100 w-120 p-3 flex flex-col bg-white gap-5 text-black rounded-2xl'>
          <h1 className='text-2xl flex items-center justify-center'>Login page</h1>
          <div className='flex flex-col items-center justify-center gap-5 text-black'>
        <input className='h-8 w-100 border border-black rounded-xl' 
        value={allData.name} name="name" onChange={handleChange} type='text' placeholder='name'></input>
        <input className='h-8 w-100 border border-black rounded-xl'
         value={allData.username} name="username" onChange={handleChange} type='text' placeholder='username'></input>
        <input className='h-8 w-100 border border-black rounded-xl'
          value={allData.password} name="password" onChange={handleChange} type='password' placeholder='password'></input>
        <button className="border h-10 w-20 rounded-xl bg-blue-700" >Login</button>
        <h2>you don't have an account?<span onClick={()=>setToggle((prev)=>!prev)} className='text-red-500'>SignUp</span></h2>
      </div>
       </div>
      </form>
     
   
  )
}

export default Login