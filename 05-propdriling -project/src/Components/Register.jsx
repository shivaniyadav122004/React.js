import React from 'react'

const Register = ({ setFlag }) => {
  console.log(setFlag)

  return (
    <div className='forms'>
      <h1>Register</h1>
      <form>
        <input  type='text' placeholder='enter your email '></input>
        <input type='text' placeholder='enter your name '></input>
        <input type='password' placeholder='enter yor password'></input>
        <button>submit</button>
      </form>
      <h2>already have an account ?.<span onClick={()=>setFlag((setFlag)=>!setFlag)}>Login</span></h2>
    </div>
  )
}

export default Register