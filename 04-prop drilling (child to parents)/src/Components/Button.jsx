import React from 'react'
import { useState } from 'react'

const Button = ({Getdata}) => {
const [value,setValue]=useState("10")
Getdata(value)

  return (
    <div>button</div>
  )
}

export default Button