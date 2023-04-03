import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import CrewImage from './crew_image_slider_/CrewImage'
import 'swiper/css';

import DOUGLAS from '../../../../assets/crew/image-douglas-hurley.png'
import MARK_SHUTTLEWORTH from '../../../../assets/crew/image-mark-shuttleworth.png'
import VICTOR from '../../../../assets/crew/image-victor-glover.png'
import ANSARI from '../../../../assets/crew/image-anousheh-ansari.png'

function CrewImageSlider({ sliderIndexPosition, data, setSliderIndexPosition}) {

    const [crewImageData] = useState({
                "Douglas Hurley": DOUGLAS, 
                "Mark Shuttleworth": MARK_SHUTTLEWORTH, 
                "Victor Glover": VICTOR,
                "Anousheh Ansari": ANSARI
    })

    useEffect(() => {
        const swiper = document.querySelector('.swiper').swiper;
        swiper.slideTo(sliderIndexPosition)

       

    },[sliderIndexPosition])
    
 

   
    return (
        <div className="slider-container w-full lg:w-[35.504375rem] ">
            
            <Swiper onSlideChange={slide => setSliderIndexPosition(slide.realIndex)}>

                {data.map(crewMember => {
                    return <SwiperSlide key={crewMember.name}>
                        <CrewImage active={data.indexOf(crewMember) === sliderIndexPosition} key={crewMember.name} imagePath={crewImageData[crewMember.name]} name={crewMember.name}/>
                    </SwiperSlide>

                })}
            </Swiper>
              
            <div className='mx-auto h-[1px] bg-theme-white opacity-25 px-6 w-[21.2rem] md:w-full'></div>
        </div>
        
    )
}

export default CrewImageSlider