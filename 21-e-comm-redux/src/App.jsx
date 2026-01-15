import React from 'react'
import AppRouter from './router/AppRouter'
import { useLocation } from 'react-router'
import Navbar from './components/Navbar'

const App = () => {
  let {pathname}=useLocation()
  console.log(pathname)

  return (
    <div>
      {pathname==='/'? null:<Navbar/>}
      <div>
        <AppRouter/>
      </div>
      
    </div>
  )
}

export default App