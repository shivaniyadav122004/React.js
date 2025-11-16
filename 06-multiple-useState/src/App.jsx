import React, { useState } from 'react'
import Login from './Login'

const App = () => {
  const [form,setForm]=useState({
    name:"",
    pass:"",
    number:""
  
  })

  console.log(form)
  
  // const control=(e)=>{
  //   console.log(e)
  //   setForm({...form,pass:e.target.value,num:e.target.value})
  // }
  const control=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  
  return (

    <>
    <input onChange={(e)=>{setForm({...form,name:e.target.value})}} type='text' placeholder='enter your name'></input>
    <input onChange={(e)=>{setForm({...form,pass:e.target.value})}} type='password' placeholder='enterr yur password'></input>

    <input name='number' onChange={control}  type="text" placeholder='enter you number'></input>
    <input name="pass" onChange={control} type='pass' placeholder='enter your paass'></input>

    <Login form={form} setForm={setForm}/>
         
    </>
  )
}

export default App