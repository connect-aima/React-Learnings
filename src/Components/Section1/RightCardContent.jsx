import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute h-full w-full p-4 top-0 left-0  flex flex-col justify-between'>
                <h1 className='text-black rounded-full bg-white m-3 w-10 h-10 px-4 font-bold py-2'>{props.id+1}</h1>
                <div>
                    <p className='mb-5 px-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sint ipsum exercitationem provident recusandae quisquam?</p>
                    <div className='flex justify-between items-center'>
                        <button className='px-5 py-2 rounded-full font-medium bg-blue-500 '>{props.tag} </button>
                        <button className='px-5 py-2 rounded-full font-medium bg-blue-500 '><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent
