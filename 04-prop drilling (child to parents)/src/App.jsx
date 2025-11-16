import React from 'react'
import Button from './Components/button'

const App = () => {

let Getdata=(value)=>{
  console.log(value)
}

  return (
    <div>
      <Button Getdata={Getdata}/>
    </div>
  )
}

export default App