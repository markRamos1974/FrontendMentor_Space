import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function InteractiveButton() {
    const [isHovered, setIsHovered] = useState(false)

    const handleOnMouseOut = () => {
        setIsHovered(false)
    }

    const handleOnMouseOver = () => {
        setIsHovered(true)
    }

    return (
        <div className='w-full
        flex 
        justify-center
        items-center

        sm:h-[9.375rem]  

        md:h-[15.125rem]  
        md:mb-[5.625rem]

        lg:h-[100%] 
        lg:justify-end 
        lg:items-end  
        lg:mb-0
'>

<Link to={"destination/1"}>
            
    
            <div className='relative 

                            sm:h-[9.375rem] 
                            sm:w-[9.375rem] 

                            md:w-[15.125rem]
                            md:h-[15.125rem] 

                            lg:h-[17.125rem] 
                            lg:w-[17.125rem] 
                            
                            hero-interactive-button' 
                            
                            onMouseOver={handleOnMouseOver} 
                            onMouseOut={handleOnMouseOut}
            >
                
                <div className={`rounded-full 
                                 absolute 
                                 top-0 
                                 left-0 
                                 right-0 
                                 bottom-0 
                                 background-interaction 
                                 origin-center 
                                 bg-theme-white
                                 ease-in-out duration-300
                                 opacity-10

                                 ${isHovered ? "scale-[150%]" : ""} 
                                 
                                 sm:h-[9.375rem] 
                                 sm:w-[9.375rem]  

                                 md:w-[15.125rem] 
                                 md:h-[15.125rem] 
            
                                 lg:w-[17.125rem] 
                                 lg:h-[17.125rem]
                `}> </div>

                <div className='absolute 
                                top-0 
                                left-0 
                                right-0
                                bottom-0 
                                bg-theme-white
                                flex 
                                justify-center 
                                items-center
                                
                                hover:cursor-pointer 
                                rounded-full  
                                
                                sm:h-[9.375rem] 
                                sm:w-[9.375rem] 
                                
                                md:w-[15.125rem] 
                                md:h-[15.125rem]   
                                
                                lg:w-[17.125rem] 
                                lg:h-[17.125rem]
                '>
                    <p className='text-dark-blue 
                                  font-heading 
                                  text-xl 
                                  tracking-[1.25px] 
                                  
                                  md:text-[2rem]
                    '>
                        EXPLORE
                    </p>
                </div> 
            </div>
        </Link>
        </div>
        
    )
}

export default InteractiveButton