import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../components/Login'
import Register from '../components/Register'

const AuthPage = () => {

  let {toggle}=useSelector((state)=>state.toggle)
  console.log(toggle)
  return <div className='m-10'> { toggle? <Login/> :<Register/> }</div>
  
}

export default AuthPage