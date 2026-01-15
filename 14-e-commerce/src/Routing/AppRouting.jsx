import React from 'react'
import { Route,Routes } from 'react-router'
import Products from '../Components/Products'
import Cart from '../Components/Cart'
import Home from '../Components/Home'

const AppRouting = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>} ></Route>
        <Route path='/carts' element={<Cart/>} ></Route>
      </Routes>
    </div>
  )
}

export default AppRouting