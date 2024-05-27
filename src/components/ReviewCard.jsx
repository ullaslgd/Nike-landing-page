import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = (props) => {
  return (
    <div className="flex justify-center items-center flex-col ">
        <img src={props.imgURL}alt={props.customerName}  className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6  max-w-sm text-center info-text">{props.feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <img 
          src={star}
          width={24}
          height={24}
          alt="star"
          className="object-contain m-0"/>
          <p className="text-xl font-montserrat text-slate-gray">{props.rating}</p>


        </div>
        <h3 className=" mt-3 text-3xl font-bold font-palanquin">{props.customerName}</h3>

    </div>
  )
}

export default ReviewCard