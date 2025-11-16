import React from 'react'
import Notes from './Components/Notes'
import { useState } from 'react'

const App = () => {
  const[formdata,setFormdata]=useState(
    {
      task:"",
      text:""
    }
  )
  const [data,setData]=useState([])
  

console.log(formdata)
console.log(data)

const handleChange=(e)=>{
setFormdata({...formdata,[e.target.name]:e.target.value})
 }

const handleSubmit=(e)=>{
  e.preventDefault()
  setData((prev)=>[...prev,formdata])
  
  //  setFormdata({
  //   task:"",
  //   text:""
  //  })
}



  return (
    <>
     <div className='flex flex-col p-5 '>
      <form onSubmit={handleSubmit}
      className='flex flex-col h-80 w-100 bg-gray-500 gap-6'>
        <h1 className='text-xl'>create Notes</h1>
        <input  name="task" value={formdata.task} onChange={handleChange} className='border p-2 w-50% text-black' type='text' placeholder='enter your task name'></input>
        <textarea  name="text" value={formdata.text} onChange={handleChange}  className="border p-3 w-50%  " type="text area" placeholder='description '></textarea>
        <button className='bg-green-400 border rounded-full w-30 ml-30' >Create note</button>
      </form>
      
        {data.map((elem)=>{
          return <Notes elem={elem}/>
        })}
       
      </div>
  
    </>
   
  )
}

export default App