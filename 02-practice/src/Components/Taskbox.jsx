import React from 'react'
import { useContext } from 'react'
import { MYdata } from '../Context/Context'
import List from './List'

const Taskbox = () => {
  const {info,setInfo}= useContext(MYdata)

  return (
    <div className='flex flex-col items-center justify-center'>
        {info.map((val,id)=>{
          return <List  key={id} val={val}></List>
        })}
    </div>
  )
}

export default Taskbox