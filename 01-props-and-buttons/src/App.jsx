import React, { useState } from 'react'
import Contact from './Contact'

const App = () => {

  let[count,setCount]=useState(10)
  const [greet,setGreet]=useState("helllo,,")


  return (
    <div>
      <h1>this is my count -{count}</h1>
      <button onClick={(e)=>{
        setCount(++count) //pehle ++ isliye use kiya kyuki hum chahteh hai pehle value bde fir print ho hamare ui pr ya hum setCount((prev)=>prev+1) bhi likh skte hai 
        console.log(count)
      }}>Increement</button>
      <Contact rio={greet}/>
    </div>
  )
}

export default App