import React, { useEffect } from 'react'

function DestinationContext({ data }) {

    const animateContext = () => {
        const h1 = document.querySelector(".planet-name")
        const p = document.querySelector(".planet-body-text")
        const line = document.querySelector(".line")
        const statistics = document.querySelector(".statistics") 
        const elements = [h1, p, line, statistics]

        
       
       
        let duration = 100
        for(let i = 0; i < elements.length; i++){
            elements[i].style.transform = "translateY(100px)"
            elements[i].style.opacity = "0"
            
            

            setTimeout(() => {
                elements[i].style.transition = "all 300ms ease-in-out"
                elements[i].style.transform = "translateY(0px)"
                elements[i].style.opacity = "1"
                elements[2].style.opacity = "0.25"
            
            },duration += 100)

            elements[i].style.transition = ""
       }
    }
  
    useEffect(() => {
        animateContext()
    },[data.planetName])

    return (
        <div className='active-destination-context text-theme-white'>
            <h1 className='text-position planet-name font-heading text-[3.5rem] text-theme-white md:text-[5rem] lg:text-start lg:text-[6.25rem]'>{data.planetName}</h1>
            <p className='text-position planet-body-text lanet-body-text text-light-blue text-body-text pb-8 text-[0.9375rem] leading-[1.5625rem] w-[20.4375rem] m-auto md:w-[35.8125rem] md:text-base md:pb-[3.0625rem] lg:text-left lg:w-[27.75rem] lg:m-0 lg:text-[1.125rem] lg:leading-[32px] lg:pb-[3.375rem]' >{data.bodyText}</p>
            <div className='text-position bg-theme-white line bg-blend-normal opacity-25 h-[1px] mb-8 w-[20.4375rem] m-auto md:w-[35.8125rem] lg:w-[27.75rem] lg:mb-7'></div>
            <div className='text-position statistics md:flex md:justify-center md:items-center lg:justify-start'>
                <Statistics context="AVG. DISTANCE" data={data.distance} />
                <Statistics context="EST. TRAVEL TIME" data={data.travel} />
            </div>
           


        </div>
  )
}

const Statistics = ({ context, data }) => {
    return <div className={` statistics ${context === "AVG. DISTANCE" ? "mb-8 md:mb-0 md:mr-[6.25rem] lg:mr-[4.9375rem] lg:m-0" : ""} lg:text-start`}>
        <p className='font-heading-small text-light-blue tracking-[2.36px] text-[0.875rem]'>{context}</p>
        <h1 className='font-heading text-theme-white text-[1.75rem]'>{data}</h1>
    </div>
}

export default DestinationContext