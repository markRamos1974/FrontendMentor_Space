import React, { useState, useEffect } from 'react'
import PageHeading from '../Global/PageHeading'
import CrewDescription from './crew_components/CrewContext/CrewDescription'
import CrewName from './crew_components/CrewContext/CrewName'
import CrewRole from './crew_components/CrewContext/CrewRole'
import CrewImageSlider from './crew_components/CrewImageSlider/CrewImageSlider'
import SliderIndicator from './crew_components/CrewImageSlider/crew_image_slider_/SliderIndicator'
import CrewData from "../../../data.json"
import { useParams } from 'react-router-dom'

function Crew({ setActiveMenu }) {
  const { pageNumber } = useParams()
  const [sliderIndexPosition, setSliderIndexPosition] = useState(0)
  const [data] = useState(CrewData.crew)

  useEffect(() => {
    if(pageNumber == '1') setActiveMenu("DESTINATION")
    if(pageNumber == '2') setActiveMenu("CREW")
    if(pageNumber == '3') setActiveMenu("TECHNOLOGY")
    

  },[])


  return (
    <div className='Crew px-6 md:mt-10 text-center md:text-start lg:px-[10.4375rem] lg:mt-[4.75rem] xl:px-[20rem]'>
      <PageHeading number={"02"} context={"MEET YOUR CREW"} component="Crew"/>
      <div className='items-container md:flex md:flex-col-reverse md:justify-between lg:flex-row-reverse lg:items-start'>
        <div className={`carousel 
                         mt-8 
                         md:mt-0 
                       
  
                         
                         `}>
          <CrewImageSlider sliderIndexPosition={sliderIndexPosition} data={data} setSliderIndexPosition={setSliderIndexPosition}/>
        </div>
        <div className={`mt-8 w-[20.4375rem] text-center mx-auto md:flex md:flex-col-reverse lg:m-0 lg:h-[35.75rem] lg:justify-between lg:pb-[5.125rem] lg:pt-[10rem]
                        
                        ${sliderIndexPosition === 0 ? "md:w-[28.625rem] lg:w-[35.504375rem]" : null}
                        ${sliderIndexPosition === 1 ? "md:w-[32.5rem]" : null}
                        ${sliderIndexPosition === 2 ? "md:w-[37rem]" : null}
                        ${sliderIndexPosition === 3 ? "md:w-[33.5rem]" : null}
                        
        
                        crew-context-container

          `}>
          <SliderIndicator sliderIndexPosition={sliderIndexPosition} setSliderIndexPosition={setSliderIndexPosition} />
          <div className='crew-details-section lg:text-start  lg:w-[38.375rem] '>
            <CrewRole Role={data[sliderIndexPosition].role} />
            <CrewName CrewName={data[sliderIndexPosition].name} />
            <CrewDescription description={data[sliderIndexPosition].bio} sliderIndexPosition={sliderIndexPosition}/>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Crew