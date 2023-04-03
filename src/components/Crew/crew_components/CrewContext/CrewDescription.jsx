import React from 'react'

function CrewDescription({ description, sliderIndexPosition }) {
  return (
    <p className={`text-[0.9375rem] 
                  leading-[1.5625rem] 
                  text-light-blue 
                  font-body-text 
                  
                  md:text-base 
                  md:mb-[2.5rem]
  
                  lg:text-[1.125rem]
                  lg:leading-[2rem]

                  lg:w-[27.75rem]
                 
                  
                  `}>

                  {description}
    </p>
  )
}

export default CrewDescription