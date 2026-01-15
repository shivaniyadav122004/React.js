import React from 'react'
import { useDispatch } from 'react-redux'
import { setToggle } from '../Features/toggleSlice'
import { useForm } from 'react-hook-form'
import { setUser } from '../Features/authSlice'

const Login = () => {
  const dispatch=useDispatch()
   let {register,handleSubmit,reset}=useForm()

   let LSD=JSON.parse(localStorage.getItem('registered users'))


  const formSubmit=(data)=>{
    console.log(data)
    let user=LSD.find((val)=>val.email===data.email && val.password===data.password)
    localStorage.setItem("login users",JSON.stringify(user))
    dispatch(setUser(user))
    if(user){
       alert("user succesfully loged in")
    }
    else{
      alert('you are not registered ')
    }
   

    reset()
  }


  return (
    <div className='h-100 w-200 bg-gray-400 p-3'>
      <h1>Welcome back</h1>

     <form onSubmit={handleSubmit(formSubmit)} className='flex flex-col gap-4'>
      <div className='flex flex-col'>
        <label>Email</label>
         <input {...register('email',{required:true})} id='email' type='email' autoComplete='email' placeholder='email' className='rounded border'></input>
       </div>
       <div className='flex flex-col'>
        <label>password</label>
        <input {...register('password',{required:true})} id='password' type ='password'  autoComplete='password'  placeholder='password' className='rounded border'></input>
       </div>
       <button type='submit' className='border bg-green-400'>Sign IN</button>
     </form>

     <p>Dont have an account ?<button onClick={()=>dispatch(setToggle(false))}>Register here</button></p>
  </div>
  )
}

export default Login