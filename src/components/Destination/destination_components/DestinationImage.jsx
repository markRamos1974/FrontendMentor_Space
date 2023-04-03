import React, { useEffect } from 'react'


function DestinationImage({ image }) {

  //Animate the image 
  useEffect(() => {
    const image = document.querySelector(".planet-image")
    image.style.transform = "translateX(-50px)"
    image.style.opacity = "0"

    setTimeout(() => {
      image.style.transition = "all 300ms ease-in-out"
      image.style.transform = "translateX(0px)"
      image.style.opacity = "1"
      
    },400)

    image.style.transition = ""
   
  },[image])

  return (
    <img src={image} alt="planet" className='planet-image w-[10.625rem]  mx-auto h-[10.625rem] mb-[1.625rem] md:w-[18.75rem] md:mb-[3.3125rem] md:h-[18.75rem] lg:w-[27.8125rem] lg:h-[27.8125rem] lg:mx-[9.8125rem] lg:ml-[3.9375rem]' />
  )
}

export default DestinationImage