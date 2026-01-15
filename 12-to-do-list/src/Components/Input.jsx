import React, { useContext, useEffect, useState } from 'react'
import { AllData } from '../context/AllData'
import { nanoid } from 'nanoid'

const Input = () => {
  const[task,setTask]=useState("")
  console.log(task)

  const {collected,setCollected,itemid,setItemid}=useContext(AllData)
  console.log(collected)

  useEffect(()=>{
    if(itemid){
   const fillteredUpdate=collected.find((val)=>val.id ===itemid)
   console.log(fillteredUpdate.work)
   setTask(fillteredUpdate.work)

    }
  
  },[itemid])

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(task===""){
      return
    }

    if(itemid){
    const updatedtask=collected.find((e)=>e.id===itemid)
    updatedtask.work=task

   let finallist=[...collected]
   setCollected(finallist)
   localStorage.setItem("data",JSON.stringify(finallist))
  
    setTask("")
    setItemid(null)
    return 
    }

    let updatedCollection=[...collected,{id:nanoid(), work:task}]
    // setCollected((prev)=>[...prev,task])
    setCollected(updatedCollection)
    localStorage.setItem("data",JSON.stringify(updatedCollection))
    setTask("")
  

  }
  
  
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex gap-10 '>
          <input className='border p-2 px-8 rounded' onChange={(e)=>setTask(e.target.value)} value={task} type='text' placeholder='enter your task '></input>
          {itemid?(<button className='border p-2 rounded bg-blue-800 text-xl' type='submit' >Update</button>):(<button className='border p-2 rounded bg-blue-800 text-xl' type='submit' >Add</button>)}
          
      </form>
     
    </div>
  )
}

export default Input