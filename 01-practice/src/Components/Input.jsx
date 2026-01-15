import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { MyAllTask } from '../Context/Context'
import { nanoid } from 'nanoid'

const Input = () => {

 const [task,setTask]=useState("")
 console.log(task)

 const {allData,setAlldata,itemid,setItemid}=useContext(MyAllTask)

 const handleinput=(e)=>{
  setTask(e.target.value)
 }

  useEffect(()=>{
  console.log("chlaa")
  if(itemid){
  const fillteredUpdateitem=allData.find((val)=>val.id===itemid)
  console.log(fillteredUpdateitem.mytask)
  setTask(fillteredUpdateitem.mytask)
  }

 },[itemid])

 const handleFormsubmit=(e)=>{
  e.preventDefault()

  if(task===""){
    return
  }

  if(itemid){
      const updateddata=allData.find((val)=>val.id ===itemid)
      updateddata.mytask=task

      let finaldata=[...allData]
      setAlldata(finaldata)
      localStorage.setItem("work",JSON.stringify(finaldata))

      setTask("")
      setItemid("")
      return


  }
  let upd=[...allData,{id:nanoid(),mytask:task}]
  setAlldata(upd)
  localStorage.setItem("work",JSON.stringify(upd))
  setTask("")

 }
 console.log(allData)

  return (
    <div>
      <form className='flex gap-5' onSubmit={handleFormsubmit}>
        <input className='border rounded p-2' onChange={handleinput} value={task} type='text' placeholder='enter your task'></input>
        <button className ='border rounded bg-blue-400 font-bold p-2' type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default Input