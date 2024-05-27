import React from 'react'


const Button = ({label,iconURL,backgroundcolor,bordercolor,textcolor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full leading-none
    ${backgroundcolor ?` ${backgroundcolor} ${bordercolor} ${textcolor}`:
    
   " bg-coral-red  text-white border-coral-red" } w-full}`}>{label} 
    {iconURL && <img src={iconURL} alt="arrow icon" className="ml-2 rounded-full w-5 h-5 "/>}</button>
  )
}

export default Button