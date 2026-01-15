import React from 'react'
import Input from './Components/input'
import Content from './Components/Content'

const App = () => {
  return (
    <div className='flex flex-col h-screen w-full bg-gray-300 gap-6 items-center justify-center'>
      <div>
         <h1 className='text-2xl '>My To Do List </h1>
      </div>
      <div className='flex flex-col gap-5 '>
        <Input></Input>
        <Content></Content>
       </div>
    </div>
  )
}

export default App