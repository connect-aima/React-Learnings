import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between font-bold text-black text-3xl bg-amber-800 p-5'>
            <h2>React</h2>
            <div className='flex gap-8'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
