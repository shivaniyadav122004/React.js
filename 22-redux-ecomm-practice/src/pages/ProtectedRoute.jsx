import React from 'react'
import Login from './Login'
import Register from './Register'
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {
  let {toggle}=useSelector((state)=>state.toggle)
  console.log(toggle)

  return <div> {toggle?<Login/>:<Register/>} </div>
}

export default ProtectedRoute


