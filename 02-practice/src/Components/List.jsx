import React from 'react'

const List = ({val}) => {
  return (
    <div className='flex gap-4 m-5 '>
      <p >{val}</p>
      <button className='border bg-green-500 p-3'>Update</button>
      <button className='border bg-red-400 p-3'>Delete</button>
    </div>
  )
}

export default List