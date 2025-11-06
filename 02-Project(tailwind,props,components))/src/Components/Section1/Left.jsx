import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Hero from './Hero'
import Arrow from './Arrow'

const Left = () => {
    return (
        <div className='text-white flex flex-col justify-between  h-full w-1/3'>
            <Hero/>
            <Arrow/>
        </div>
    )
}

export default Left
