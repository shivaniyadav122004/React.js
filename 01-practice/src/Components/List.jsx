import React from 'react'
import { useContext } from 'react'
import { MyAllTask } from '../Context/Context'
import { useEffect } from 'react'

const List = ({elem}) => {
 
  let {itemid,setItemid,allData,setAlldata}=useContext(MyAllTask)

  const handleUpdate=()=>{
    setItemid(elem.id)
  }


const handleDelete=()=>{
    console.log(elem.id)
      const filleredDeleteitems=allData.filter((val)=>val.id !==elem.id)
      setAlldata(filleredDeleteitems)
      localStorage.setItem("work",JSON.stringify(filleredDeleteitems))
    
}
  return (
    <div className=' flex  w-[95%]'>
      <p>{elem.mytask}</p>
      <div className='flex gap-3 '>
        <button className='bg-green-300 border rounded p-1' onClick={handleUpdate}>Update</button>
         <button className=' border bg-red-400 rounded p-1' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default List