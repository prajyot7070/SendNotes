import React from 'react'
import { Routes, Route } from 'react-router-dom'


import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App