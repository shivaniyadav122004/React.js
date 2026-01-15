import React from 'react'
import List from './List'
import { useContext } from 'react'
import { MyAllTask } from '../Context/Context'

const Taskbox = () => {
  
  const {allData,setAlldata}=useContext(MyAllTask)
  console.log(allData)

  return (
    <div className='h-80 w-100 bg-blue-200 p-4 gap-3'>
     {allData.map((elem,id)=>{
      return <List key={id} elem={elem}></List>
     })}
    </div>
  )
}

export default Taskbox