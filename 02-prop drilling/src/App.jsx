import React, { useState } from 'react'
import Card from './Card'
import Button from './Button'

const App = () => {
  const[count,setCount]=useState("hello gm")
  const [inc,setInc]=useState(0)

  return (
    <>
    <h1>helloo this is my information</h1>
    <Card count={count}/>
    <Card name="shivani" age={20}/>
    <Card name="shiv" age={30}/>
    <h2>count is {inc}</h2>
    <Button inc={inc} setInc={setInc}/>
    </>

  )
}

export default App