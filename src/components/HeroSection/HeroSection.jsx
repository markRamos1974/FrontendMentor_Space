import React, { useContext }from 'react'
import BodyText from './hero_section_components/BodyText'
import FirstText from './hero_section_components/FirstText'
import InteractiveButton from './hero_section_components/InteractiveButton'
import SpaceText from './hero_section_components/SpaceText'
import { AppContext } from '../../App'

function HeroSection() {
  const { isHamburgerMenuActive, setIsHamburgerMenuActive } = useContext(AppContext)

  const handleMenuClick = () => {
    if(isHamburgerMenuActive) {
      setIsHamburgerMenuActive(!isHamburgerMenuActive)
    }
  }

  return (
      <div className="flex flex-col hero-section text-[0.9375rem] text-center p-6 sm:pb-12 md:justify-between md:px-[9.9375rem] md:pt-[6.625rem] md:pb-0 lg:px-[10.6875rem] lg:pb-[7.5rem] lg:flex-row lg:pt-0 hero-section xl:pb-[13.5rem] xl:px-[20.5rem]" onClick={handleMenuClick}>
        <div className='hero_context h-full w-full flex flex-col items-center text-left sm:mb-[5.25rem] lg:mb-0 lg:justify-end lg:items-start '> 
          <FirstText />
          <SpaceText />
          <BodyText />
        </div>          
        <InteractiveButton />
      </div>
    
  )
}

export default HeroSection