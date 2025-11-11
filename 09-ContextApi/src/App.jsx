import React, { useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [theme, settheme] = useState('light')
  return (
    <div className='bg-blue-300'>
     <Navbar/>
    </div>
  )
}
export default App
