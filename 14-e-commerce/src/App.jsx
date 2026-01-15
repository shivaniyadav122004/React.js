import React from 'react'
import AppRouting from './Routing/AppRouting'
import Navbar from './Components/Navbar'


const App = () => {
  return (

    <div>
      <Navbar></Navbar>
      <AppRouting></AppRouting>
    </div>
  )
}

export default App