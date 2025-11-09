import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboute from './pages/Aboute'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <div className='flex items-center justify-between bg-amber-700 text-black p-5 text-3xl'>
        <h1 className=' '>Mini Route Project</h1>
        <div className='flex gap-10 '>
          <a href='/'>Home</a>
          <a href='/aboute'>About</a>
          <a href='/contact'>Contact</a>
          <a href='/product'>Product</a>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboute' element={<Aboute/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      <div className='bg-amber-700 text-5xl text-black p-10 flex justify-center'>
        aimaa made this mini project
      </div>
    </div>
  )
}

export default App
