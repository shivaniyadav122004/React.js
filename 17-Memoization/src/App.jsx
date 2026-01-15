import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import Child from './Components/Child'
import { useCallback } from 'react'

const App = () => {
 let [count,setCount]= useState(0)

const handleClick=()=>{
  setCount(count+1)
}

const value=useMemo(()=>{
var num=1
for(let i=0;i<=100000;i++){
  num=num+i
  
}
console.log(num)
return num;  
},[])

// const fnc=()=>{
//   console.log("helllooo")
//   return "me fun hun"
// }

const fnc=useCallback(()=>{
  console.log("helllooo")
  return "me function hun"

},[])


// //isme fnc me koi change nhi aa rha hai fir bhi child wala page rerender ho raha tha kyuki fnc ka referec change ho rha hai app ke rerender hone pr to isse bachne ke liye aata haii useCallback wo fnc ki value na yaad krke blki uska referrence yaad krega jisse child page rerender nhi hoga 


  return (
    <div>
      
      <button onClick={handleClick}>click</button>
      <h1>{count}</h1>  
      <h1>{value}</h1>

      <Child fnc={fnc}/>
      
      

    
    </div>
  )
}

export default App