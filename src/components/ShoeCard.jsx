import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick=()=>{
    if(bigShoeImage!==imgURL.bigShoe){
      changeBigShoeImage(imgURL.bigShoe)
    }

  }
  return (
    <div className={`border-8 rounded-xl ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl mmax-sm:p-4 ">
        <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain"></img>
      </div>
    </div>
  )
}

export default ShoeCard