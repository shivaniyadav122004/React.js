import { Link } from 'react-router'
import React from 'react'
import Terminal from './pages/Terminal'
import Recyle from './pages/Recyle'
import Files from './pages/Files'

const AllPages = () => {
  return (
    <div>
      <Link to='/pages'>
      <Terminal/>
      <Recyle/>
      <Files/>
      
      </Link>
    </div>
  )
}

export default AllPages