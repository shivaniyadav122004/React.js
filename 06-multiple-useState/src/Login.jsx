import React from 'react'

const Login = ({form,setForm}) => {
  console.log(form)

  return (
    <div>
      <input onChange={(e)=>{setForm({...form,place:e.target.value})}} type='text' placeholder='placee'></input>
    </div>
  )
}

export default Login