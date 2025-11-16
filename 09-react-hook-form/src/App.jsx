import React from 'react'
import {useForm} from "react-hook-form"

const App = () => {
  const {register,handleSubmit,reset,formState:{errors}}=useForm()

  const handleFormSubmit=(data)=>{
    console.log(data)
    reset()
  }

  return (
    <div className='h-100 w-100 bg-blue-300 flex flex-col gap-8 m-10 rounded rounded-2xl p-10'>
      <h1 className='text-2xl'>React hook form</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col gap-8'>
        <input {...register("name",{required: true})} className='border '  type='text' placeholder='enter name'>
        </input>
        {errors.name && errors.name.type==="required"?(<p>name is req</p>):null}

        <input {...register("password",{required:true,minLength:7})} className='border' type='password' placeholder='enter pass'></input>
        {errors.password && errors.password.type==="required"?(<p>password is required</p>):null}
        {errors.password && errors.password.type==="minLength"?(<p className='text-red-800'>minimum length is 7</p>):null}

        <input className='border bg-green-400 w-50 rounded rounded-2xl ' type="submit"></input>
      </form>
    </div>
  )
}

export default App