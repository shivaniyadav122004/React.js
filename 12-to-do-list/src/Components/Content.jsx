import React, { useContext } from 'react'
import Taskbox from './Taskbox'
import { AllData } from '../context/AllData'

const Content = () => {
  let {collected}=useContext(AllData)

  return (
    <div className='h-90 '>
      {collected.map((elem)=>{
        return <Taskbox key={elem.id}
         elem={elem}></Taskbox>
      })}
    </div>
  )
}

export default Content