import React from 'react'

const Notes = ({elem}) => {
  

  return (
    <div className='p-4 bg-blue-400'>
       <h1>{elem.task}</h1>
       <h1>{elem.text}</h1>
    </div>
  )
}

export default Notes