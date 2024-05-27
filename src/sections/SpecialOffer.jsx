import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain'/>
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold "> <span className="text-coral-red">Special</span> Offer</h2>
        
        <p className="mt-4 lg:max-w-lg info-text">Get your favorite pair of shoes at an unbeatable price. Limited time offer!</p>
        <p className="mt-4 lg:max-w-lg info-text">Don't miss out on this amazing opportunity to upgrade your shoe collection.</p>
        <div className='mt-11 flex flex-wrap gap-4 '>
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" backgroundcolor="white" bordercolor="border-slate-gray" textcolor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer