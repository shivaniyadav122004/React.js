import React from 'react'
import { Routes,Route } from 'react-router'
import Files from '../pages/Files'
import Recyle from '../pages/Recyle'
import Terminal from '../pages/Terminal'
import AllPages from '../allPages'


const Approuting = () => {
  return (
    <div>
     <Routes>
      {/* <Route path='' element={<Files/>}></Route>
      <Route path='/Recycle' element={<Recyle/>}></Route>
      <Route path='/Terminal' element={<Terminal/>}></Route> */}
      <Route path='/pages' element={<AllPages/>}></Route>

     </Routes>
    </div>
  )
}

export default Approuting