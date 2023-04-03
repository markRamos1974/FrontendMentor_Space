import React from 'react'

const slideNumber = [0, 1, 2]
function SliderIndicator({ activeSlideIndex, setSlideIndex }) {

   


    return (
        <div className='flex justify-center lg:block lg:mr-[5rem]'>
            {slideNumber.map(number => {
                return <div key={number} onClick={() => setSlideIndex(number)} className={`${activeSlideIndex === number ? "bg-theme-white border-theme-white" : "text-theme-white border-[#4D4D56] border-2"} ${number === 2 ? "" : "mr-[1rem] md:mr-4 lg:mr-0 lg:mb-[2rem]"} cursor-pointer flex justify-center items-center w-10 h-10 border-[1px] rounded-full transition-[background] duration-300 ease-in-out md:w-[3.75rem] md:h-[3.75rem] lg:w-[5rem] lg:h-[5rem] `}>
                    <p className='text-base font-heading md:text-2xl lg:text-[2rem]'>{number + 1}</p>
                </div>
            })}
        </div>
    )
}

export default SliderIndicator