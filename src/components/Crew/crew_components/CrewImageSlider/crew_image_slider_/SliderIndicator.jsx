import React from 'react'
const indexes = [0, 1, 2, 3]
function SliderIndicator({ setSliderIndexPosition, sliderIndexPosition }) {

    const handleIndexSelection = (index) => {
        setSliderIndexPosition(index)
    }

    return (
        <div className=' slider-indicators flex justify-center items-center mb-8 md:mb-[2.5rem] lg:justify-start lg:mb-0 '>
            {indexes.map(item => {
                return <div  key={item} onClick={() => handleIndexSelection(item)} className={`w-[10px] h-[10px] rounded-full bg-theme-white ${sliderIndexPosition === item ? null : "opacity-25" } cursor-pointer`}></div>
            })}
        </div>
  )
}

export default SliderIndicator