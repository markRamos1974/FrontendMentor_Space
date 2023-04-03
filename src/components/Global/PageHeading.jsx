import React from 'react'

function PageHeading({ number, context, component }) {
    return (
        <div className={`font-heading-small tracking-[2.7px] text-base sm:w-full md:w-full  md:text-xl md:mr-auto md:mb-16 lg:text-start lg:mb-0`}>
            <span className='text-hover-color font-bold mr-[1.1875rem] lg:text-[1.75rem]'>{number}</span>
            <span className='text-theme-white lg:text-[1.75rem]'>{context}</span>   
        </div>
    )
}

export default PageHeading