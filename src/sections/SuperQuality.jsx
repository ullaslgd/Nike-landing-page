 import React from 'react'
 import Button from '../components/Button'
  import{ shoe8}  from '../assets/images'
 
 const SuperQuality = () => {
   return (
     <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col ">
      <h2  className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold ">We provide you <span className="text-coral-red">Super</span>
      <span className="text-coral-red">Quality</span> Shoes</h2>
        
        <p className="mt-4 lg:max-w-lg info-text"></p>
        <p className="mt-4 lg:max-w-lg info-text ">Our super quality shoes are crafted with precision and attention to detail. Each pair is made from the finest materials to ensure durability and comfort. Whether you're hitting the gym or going for a casual stroll, our shoes will provide the perfect fit and support. Experience the difference of our super quality shoes today!</p>
        <div className='mt-11 '>
        <Button label="view detail" />
        </div>
        
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoes8" width={570} height={522} className='onject-contain'/>

      </div>
     </section>
   )
 }
 
 export default SuperQuality