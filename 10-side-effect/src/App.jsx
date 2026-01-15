import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [change,setChange]=useState(true)
 console.log("hello")

 useEffect(()=>{
  console.log("shivani")
 },[change])

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>{count}</button>
      <button onClick={()=>setChange(!change)}>hellooo</button>
      {change}
      

    </div>
    
  )
}

export default App