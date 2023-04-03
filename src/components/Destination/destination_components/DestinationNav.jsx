import React, { useState } from 'react'


const navList = ["MOON", "MARS", "EUROPA", "TITAN"]

const listTagStyles = {
    active: `border-b-[3px]`,
    inActive: `text-light-blue`,
    isHovered: ``
}


function DestinationNav({ setActiveDestination }) {
    const [destinationDisplay, setDestinationDisplay] = useState("MOON")

    const handleDestinationMenuCick = destination => {
        setDestinationDisplay(destination)
        setActiveDestination(destination)

        
    }

    return (
        <div className='text-theme-white w-full flex justify-center font-heading-small tracking-[2.36px mb-5] md:mb-8 lg:justify-start'>
            <ul className='flex destination-nav-items'>
                {navList.map(item => {
                   return <li key={item} 
                              className={`cursor-pointer 
                                          h-7 
                                          mr-[1.625rem]  
                                          md:mr-[2.125rem] 
                                          ${destinationDisplay !== item ? "hover:border-b-[3px] hover:border-hover-color" : ""}
                                          ${item === destinationDisplay ? listTagStyles.active : listTagStyles.inActive}
                                          
                              `}

                              onClick={() => handleDestinationMenuCick(item)}
                              

                           >    
                                <p className='translate-y-[-6px] tracking-[2.36px] text-[0.875rem] md:text-base'>{item}</p>
                          </li>      
                })}
            </ul>
        </div>
    )
}

export default DestinationNav