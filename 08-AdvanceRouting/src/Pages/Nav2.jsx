import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
    let navigate = useNavigate()
  return (
    <div className='flex items-center gap-3 font-bold text-black  bg-amber-800 p-3'>
           <button onClick={()=>{
                navigate('/')
           }} 
           className='border border-amber-50 bg-amber-300 rounded p-2 '
           >Back to home</button>
           <button onClick={()=>{
                navigate(-1)
           }} 
            className='border border-amber-50 bg-amber-300 rounded p-2 '
            >Back</button>
           <button onClick={()=>{
                navigate(+1)
           }} 
            className='border border-amber-50 bg-amber-300 rounded p-2 '
            >Next</button>
        </div>
  )
}

export default Nav2
