import React, { useEffect, useState } from 'react'
import DestinationContext from './destination_components/DestinationContext'
import DestinationImage from './destination_components/DestinationImage'
import DestinationNav from './destination_components/DestinationNav'
import DestinationData from "../../../data.json"

import { useParams } from 'react-router-dom'
import PageHeading from '../Global/PageHeading'

import MOON from '../../assets/destination/image-moon.png'
import MARS from '../../assets/destination/image-mars.png'
import EUROPA from '../../assets/destination/image-europa.png'
import TITAN from '../../assets/destination/image-titan.png'



function Destination({ setActiveMenu }) {
  const [planetData] = useState({MOON, MARS, EUROPA, TITAN})
  const [activeDestination, setActiveDestination] = useState("MOON")
  const [data] = useState(DestinationData.destinations[0])
  const { destination } = useParams()

  //Persisting backgrounds
  useEffect(() => {
    setActiveMenu(destination.toUpperCase())
  },[])
  return (
    <div className='w-full destination px-6 pb-[3.625rem] relative md:pt-10 md:px-[2.4375rem] md:pb-[3.875rem] lg:px-[10.1875rem] lg:flex lg:pt-[4.75rem] lg:items-end'>
      
      <div className='header-image text-center w-full flex flex-col items-center mb-[1.625rem] md:text-start md:mb-[3.3125rem] lg:items-start lg:mb-0 '>
      <div className='mb-[2rem] w-full text-center md:text-start lg:mb-[5.9375rem]'>
          <PageHeading number={"01"}  context={"PICK YOUR DESTINATION"} component={"destination"}/>
      </div>
        
        <div className='lg:flex'>
          
          <DestinationImage image={planetData[activeDestination]} activeDestination={activeDestination}/>
          <div className='destination-details text-center bottom-1'>
            <DestinationNav setActiveDestination={setActiveDestination}/>
            <DestinationContext data={{ planetName: data[activeDestination].name, 
                                        bodyText: data[activeDestination].description,
                                        distance: data[activeDestination].distance.toUpperCase(),
                                        travel: data[activeDestination].travel.toUpperCase()

            }}/>
         </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default Destination