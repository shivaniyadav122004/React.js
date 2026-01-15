import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,Addvalue} from './Features/CounterSlice'

const App = () => {
  const dispatch=useDispatch()

  let {count}=useSelector((state)=>state.counter)
  const [inpvalue,setInpvalue]=useState("")

  return (
    <div>
      <h1>Counter -- {count}</h1>
      <input onChange={(e)=>setInpvalue(e.target.value)} ></input>
      <button onClick={()=>dispatch(increment())}>increase</button>
      <button onClick={()=>dispatch(decrement())}>decreases</button>
      {/* <button onClick={()=>dispatch(Addvalue(50))}>add value</button> */}
      <button onClick={()=>dispatch(Addvalue(inpvalue))}>add value</button>
    </div>
  )
}

export default App