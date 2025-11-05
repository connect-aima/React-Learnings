import React from 'react'
import Navbar from './Navbar'
import Page1 from './Page1'

const Section1 = (props) => {
  return (
    <div className='h-full w-full bg-white'>
     <Navbar />
     <Page1 users={props.users} />
    </div>
  )
}

export default Section1
