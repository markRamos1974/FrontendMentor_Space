import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import CrewImage from './crew_image_slider_/CrewImage'
import 'swiper/css';


function CrewImageSlider({ sliderIndexPosition, data, setSliderIndexPosition}) {

    useEffect(() => {
        const swiper = document.querySelector('.swiper').swiper;
        swiper.slideTo(sliderIndexPosition)

       

    },[sliderIndexPosition])
    
 

   
    return (
        <div className="slider-container w-full lg:w-[35.504375rem] ">
            
            <Swiper onSlideChange={slide => setSliderIndexPosition(slide.realIndex)}>

                {data.map(crewMemeber => {
                    return <SwiperSlide key={crewMemeber.name}>
                        <CrewImage active={data.indexOf(crewMemeber) === sliderIndexPosition} key={crewMemeber.name} imagePath={crewMemeber.images.png} name={crewMemeber.name}/>
                    </SwiperSlide>

                })}
            </Swiper>
              
            <div className='mx-auto h-[1px] bg-theme-white opacity-25 px-6 w-[21.2rem] md:w-full'></div>
        </div>
        
    )
}

export default CrewImageSlider