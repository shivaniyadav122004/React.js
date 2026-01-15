import React from 'react'
import { Route, Routes } from 'react-router'
import PublicRoute from '../components/PublicRoute'
import AuthPage from '../pages/authPage'
import Home from '../pages/Home'
import ProtectedRoute from '../components/ProtectedRoute'
import Users from '../pages/Users'


const AppRouter = () => {
  return (
    <div>
         <Routes>
          <Route path='/' element={
            <PublicRoute>
               <AuthPage/>
            </PublicRoute>
          }
          />
          <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
        path='/users'
        element={
          <ProtectedRoute>
            <Users/>
          </ProtectedRoute>
        }></Route>
         </Routes>
    
    </div>
  )
}

  

export default AppRouter