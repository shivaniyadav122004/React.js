import React from 'react'

const Button = ({inc,setInc}) => {
  console.log(setInc)
  
  return (
    <div>
      <button onClick={()=>{setInc((prev)=>prev+1)}}>Click me</button>
    </div>
  )
}

export default Button