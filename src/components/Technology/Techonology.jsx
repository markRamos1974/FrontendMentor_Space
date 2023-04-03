import React, { useState } from 'react'
import PageHeading from '../Global/PageHeading'
import CrewData from "../../../data.json"
import TechnologyCarousel from './technology_slider/TechnologyCarousel';
import SliderIndicator from './technology_slider_indicator/SliderIndicator';
import TechnologyContext from './technology_context/TechnologyContext';
import data from '../../../data.json'

function Techonology() {
  const [activeSlideIndex, setActiveSlide] = useState(0)
  return (
  
    <div className='technology section lg:pl-[10.4375rem] lg:pb-[5.625rem] '>
      <div className=' text-center md:text-start md:pl-[2.4375rem] md:mt-10 lg:pl-0 lg:mb-[1.625rem] lg:mt-[4.75rem]'> 
        <PageHeading number={"03"} context={"SPACE LAUNCH 101"} component={"technology"}/>
      </div>
      <div className='lg:flex lg:flex-row-reverse lg:justify-between lg:items-start'>
        <TechnologyCarousel data={CrewData} setSlideIndex={setActiveSlide} activeSlideIndex={activeSlideIndex}/>
        <div className='mt-[2.125rem] md:mt-14 lg:flex lg:justify-center lg:items-start lg:mt-[6.9375rem]'>
          <SliderIndicator activeSlideIndex={activeSlideIndex} setSlideIndex={setActiveSlide}/>
          <TechnologyContext contextData={data.technology[activeSlideIndex]}/>
        </div>
      </div>
     

          
    </div>
  )
}

export default Techonology