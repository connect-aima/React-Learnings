import React from 'react'
import RightCard from './RightCard'

const Right = (props) => {
    console.log(props)
    return (
        <div id='right' className='text-white overflow-x-auto h-full w-2/3 p-4 flex flex-nowrap gap-5 rounded-4xl'>
            {props.users.map(function(e,idx){
                return <RightCard key={idx} id={idx} img={e.img} tag={e.tag} />
            })}
        </div>
    )
}

export default Right
