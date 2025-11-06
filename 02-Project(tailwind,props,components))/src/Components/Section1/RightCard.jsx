import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div  className='h-full shrink-0  w-60  relative bg-amber-300 rounded-3xl '>
            <img className='h-full w-full object-cover brightness-50' src={props.img} alt="" />
            <RightCardContent id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard
