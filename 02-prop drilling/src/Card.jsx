import React from 'react'

const Card = (prop) => {
  console.log(prop)

  return (
    <>
    <div className='cards'>
      <h1>{prop.name}</h1>
      <h1>{prop.age}</h1>
    </div>
    </>
  )
}

export default Card