import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import TechnologyImage from './TechnologyImage';

function TechnologyCarousel({ data, setSlideIndex, activeSlideIndex }) {

    useEffect(() => {
        const swiper = document.querySelector('.swiper').swiper;
        swiper.slideTo(activeSlideIndex)

    },[activeSlideIndex])

    return (
        <div className='mt-8 lg:mt-0'>
            <Swiper className='h-[10.625rem] md:h-[19.375rem] lg:w-[32.1875rem] lg:h-[32.9375rem] relative tech-slider' onSlideChange={slide => setSlideIndex(slide.realIndex)}>
                {
                    data.technology.map(tech => {
                        return <SwiperSlide key={tech.name}>
                            <TechnologyImage imageLandscape={tech.images.landscape} imagePortrait={tech.images.portrait} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
        
    )
}

export default TechnologyCarousel