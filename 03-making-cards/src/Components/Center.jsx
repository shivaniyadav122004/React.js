import React from 'react'

const Center = ({brandName,day,typeOfEngineer,time,level}) => {

  return (
    <div className='center'>
      <h1>{brandName}<span> {day} </span></h1>
      <h1>{typeOfEngineer}</h1>
      <div className='time'>
        <button>{time}</button>
        <button>{level}</button>
      </div>
    </div>
  )
}

export default Center