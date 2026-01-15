import React, { useContext } from 'react'
import { AllData } from '../context/AllData'

const Taskbox = ({elem}) => {

  let {collected,setCollected,itemid,setItemid}=useContext(AllData)

  const handleDelete=(e)=>{
  let fillteredArr=collected.filter((value)=>value.id !== elem.id)
  console.log(fillteredArr)
  setCollected(fillteredArr)
  localStorage.setItem("data",JSON.stringify(fillteredArr))

  }
  
  const handleUpdate=()=>{
    setItemid(elem.id)
    console.log("render")
  }

  return (
  
  <div className='flex w-100 gap-5 p-5 bg-orange-200'>
      <p className='w-[50%]'>{elem.work}</p>
      <div className='flex gap-3'>
        <button onClick={handleUpdate} className='border bg-green-600 p-2 rounded'>Update</button>
        <button onClick={handleDelete} className='border bg-red-600 p-2 rounded'>Delete</button>
      </div>
    </div>
  
  )
}

export default Taskbox