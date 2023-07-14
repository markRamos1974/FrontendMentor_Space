import React, { useState, createContext, useEffect } from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import { Route, Routes } from 'react-router-dom'
import Destination from './components/Destination/Destination'
import Crew from './components/Crew/Crew'
import Techonology from './components/Technology/Techonology'

//Backgroundss
import HomeMobile from './assets/home/background-home-mobile.jpg'
import HomeTablet from './assets/home/background-home-tablet.jpg'
import HomeDesktop from './assets/home/background-home-desktop.jpg'

import DestinationMobile from './assets/destination/background-destination-mobile.jpg'
import DestinationTablet from './assets/destination/background-destination-tablet.jpg'
import DestinationDesktop from './assets/destination/background-destination-desktop.jpg'

import CrewMobile from './assets/crew/background-crew-mobile.jpg'
import CrewTablet from './assets/crew/background-crew-tablet.jpg'
import CrewDesktop from './assets/crew/background-crew-desktop.jpg'

import TechMobile from './assets/technology/background-technology-mobile.jpg'
import TechTablet from './assets/technology/background-technology-tablet.jpg'
import TechDesktop from './assets/technology/background-technology-desktop.jpg'

export const AppContext = createContext()

const background = {
  home: {
    mobile: HomeMobile,
    tablet: HomeTablet,
    desktop: HomeDesktop,
  },
  destination:  {
    mobile: DestinationMobile,
    tablet: DestinationTablet,
    desktop: DestinationDesktop,
  },
  crew:  {
    mobile: CrewMobile,
    tablet: CrewTablet,
    desktop: CrewDesktop,
  },
  technology:  {
    mobile: TechMobile,
    tablet: TechTablet,
    desktop: TechDesktop,
  },
}


const App = () => {
  const [activeMenu, setActiveMenu] = useState("HOME")
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false) 
  const [screenIndex, setScreenIndex] = useState(window.innerWidth >= 1440 ? 2 : window.innerWidth >= 768 ? 1 : 0)

  window.addEventListener("resize", () => {
    const screenSize = window.innerWidth

    if(screenSize >= 1440) setScreenIndex(2)
    else if (screenSize >= 768) setScreenIndex(1)
    else setScreenIndex(0)
  })
 
  const handleRoute = () => {
    console.log(true)
    window.history.pushState("", "", "/FrontendMentor_Space/")
  }
  handleRoute()

  return (
      <AppContext.Provider value={{ 
                                    activeMenu, 
                                    setActiveMenu,
                                    isHamburgerMenuActive,
                                    setIsHamburgerMenuActive

                                  }}>
        <div className="App">
          <div className={`${isHamburgerMenuActive ? "mobile-menu-active" : "homepage"} h-screen bg-dark-blue bg-no-repeat  bg-cover relative`}
                style={
                  activeMenu === "HOME" ? { 
                    backgroundImage: screenIndex === 0 ? `url("${background.home.mobile}")` : screenIndex === 1 ? `url("${background.home.tablet}")` : `url("${background.home.desktop}")`
                  } : activeMenu === "DESTINATION" ? {
                    backgroundImage: screenIndex === 0 ? `url("${background.destination.mobile}")` : screenIndex === 1 ? `url("${background.destination.tablet}")` : `url("${background.destination.desktop}")`
                  } : activeMenu === "CREW" ? {
                    backgroundImage: screenIndex === 0 ? `url("${background.crew.mobile}")` : screenIndex === 1 ? `url("${background.crew.tablet}")` : `url("${background.crew.desktop}")`
                  } : activeMenu === "TECHNOLOGY" ? {
                    backgroundImage: screenIndex === 0 ? `url("${background.technology.mobile}")` : screenIndex === 1 ? `url("${background.technology.tablet}")` : `url("${background.technology.desktop}")`
                  } : {}}
          >
          <Header />
          <Routes>
            <Route element={<HeroSection />} path={"/FrontendMentor_Space/"}/>
            <Route element={<Destination setActiveMenu={setActiveMenu}/>} path={"/FrontendMentor_Space/destination/:pageNumber"}/>
            <Route element={<Crew setActiveMenu={setActiveMenu}/>} path={"/FrontendMentor_Space/crew/:pageNumber"} />
            <Route element={<Techonology setActiveMenu={setActiveMenu}/>} path={"/FrontendMentor_Space/technology/:pageNumber"} />
          </Routes>
         </div>
        
        
  
        </div>

      </AppContext.Provider>
      
       
   
   
  )


}

export default App
