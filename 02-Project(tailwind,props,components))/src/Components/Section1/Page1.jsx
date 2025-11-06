import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1 = (props) => {
  return (
    <div className=' px-18 flex gap-10 items-center py-3 h-[85vh]'>
      <Left />
      <Right users={props.users} />
    </div>
  )
}

export default Page1
