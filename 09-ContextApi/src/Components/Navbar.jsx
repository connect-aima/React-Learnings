import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeDataConext } from '../Context/ThemeContext'

const Navbar = () => {
    const data=useContext(ThemeDataConext)
  return (
    <div className='flex items-center justify-between text-2xl font-bold p-5'>
     <h1>React</h1>
     <p>{data}</p>
     <Navbar2/>
    </div>
  )
}

export default Navbar
