import React from 'react'
import { useParams } from 'react-router-dom'

const AboutDetail = () => {
    const params=useParams()
  return (
    <div className='h-100 bg-green-300 flex items-center justify-center text-4xl text-black font-bold'>
    <h1>{params.id} details</h1>
    </div>
  )
}

export default AboutDetail
