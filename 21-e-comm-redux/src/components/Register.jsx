import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setToggle } from '../Features/toggleSlice'
import { useForm } from 'react-hook-form';

const Register = () => {

  const [regUsers,setRegUsers]=useState(()=>JSON.parse(localStorage.getItem('registered users'))|| [])

  let dispatch=useDispatch()
  let {register,handleSubmit}=useForm()

  const formSubmit=(data)=>{
    console.log(data)
    let arr=[...regUsers,data]
    setRegUsers(arr)
    localStorage.setItem("registered users",JSON.stringify(arr))
    
  }
  
  
  return (
    <div className='h-100 w-200 bg-gray-400 p-3'>
          <h1>Register page</h1>
    
    
         <form onSubmit={handleSubmit(formSubmit)} className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label>Email</label>
             <input {...register("email",{required:true})} id='email' type='email' autoComplete='email 'placeholder='email' className='rounded border'></input>
           </div>
           <div className='flex flex-col'>
            <label>password</label>
            <input {...register('password',{required:true})} id='password' type ='password' autoComplete='password' placeholder='password' className='rounded border'></input>
           </div>
           <button type='submit' className='border bg-green-400'>Sign IN</button>
         </form>
    
         <p>already have an account ?<button onClick={()=>dispatch(setToggle(true))}>login here </button></p>
      </div>
  )
}

export default Register