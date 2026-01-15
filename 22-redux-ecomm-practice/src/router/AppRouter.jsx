import React from 'react'
import ProtectedRoute from '../pages/ProtectedRoute'
import Authpage from '../pages/Authpage'
import { Route, Routes } from 'react-router'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
          </ProtectedRoute>
        }></Route>
      </Routes>
    </div>
  )
}

export default AppRouter