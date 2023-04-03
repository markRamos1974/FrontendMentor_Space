import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import TechnologyImage from './TechnologyImage';

import TechLandScape1 from '../../../assets/technology/image-launch-vehicle-landscape.jpg'
import TechLandScape2 from '../../../assets/technology/image-spaceport-landscape.jpg'
import TechLandScape3 from '../../../assets/technology/image-space-capsule-landscape.jpg'

import TechPortrait1 from '../../../assets/technology/image-launch-vehicle-portrait.jpg'
import TechPortrait2 from '../../../assets/technology/image-spaceport-portrait.jpg'
import TechPortrait3 from '../../../assets/technology/image-space-capsule-portrait.jpg'

function TechnologyCarousel({ data, setSlideIndex, activeSlideIndex }) {
    const [portrait] = useState({
        "Launch vehicle": TechPortrait1, 
        "Spaceport": TechPortrait2, 
        "Space capsule": TechPortrait3
    })

    const [landscape] = useState({
        "Launch vehicle": TechLandScape1, 
        "Spaceport": TechLandScape2, 
        "Space capsule": TechLandScape3
    })

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
                            <TechnologyImage imageLandscape={landscape[tech.name]} imagePortrait={portrait[tech.name]} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
        
    )
}

export default TechnologyCarousel