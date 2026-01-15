import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { MYdata } from '../Context/Context'

const Input = () => {
 const[inputval,setInputval]=useState("")

let {info,setInfo}= useContext(MYdata)

const handlechange=(e)=>{
  setInputval(e.target.value)



}

const handleClick=()=>{
setInfo([...info,inputval])

setInputval("")

}


  return (
    <div className='flex gap-5 items-center justify-center mt-20 ml-10'>
      <input className='border rounded p-4' onChange={handlechange}  value={inputval} type='text' placeholder='enter text'></input>
      <button className='border rounded bg-blue-400 p-4' onClick={handleClick} type='text'>Press</button>
    </div>
  )
}

export default Input