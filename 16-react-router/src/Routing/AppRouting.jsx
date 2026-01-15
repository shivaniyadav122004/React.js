import React from 'react'
import {  Routes, Route } from "react-router";
import Navbar from '../Navbar';
import Info from '../Info';

const AppRouting = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar></Navbar>}></Route>
        <Route path='/info' element={<Info></Info>} />
      </Routes>
    </div>
  )
}

export default AppRouting