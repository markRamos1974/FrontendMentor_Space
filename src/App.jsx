import React, { useState, createContext } from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import { Route, Routes } from 'react-router-dom'
import Destination from './components/Destination/Destination'
import Crew from './components/Crew/Crew'
import Techonology from './components/Technology/Techonology'


export const AppContext = createContext()

const background = {
  home: "sm:bg-mobile md:bg-tablet lg:bg-desktop ",
  destination: "sm:bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop",
  crew: "sm:bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop",
  technology: "sm:bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop"
}


const App = () => {
  const [activeMenu, setActiveMenu] = useState("HOME")
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false)
 
  return (
      <AppContext.Provider value={{ 
                                    activeMenu, 
                                    setActiveMenu,
                                    isHamburgerMenuActive,
                                    setIsHamburgerMenuActive

                                  }}>
        <div className="App">
          <div className={`
                           ${isHamburgerMenuActive ? "mobile-menu-active" : "homepage"}
                           ${activeMenu === "HOME" ? background.home : null}
                           ${activeMenu === "DESTINATION" ? background.destination : null}
                           ${activeMenu === "CREW" ? background.crew : null}
                           ${activeMenu === "TECHNOLOGY" ? background.technology : null}
                           h-screen 
                         bg-dark-blue 
                           bg-no-repeat 
                           bg-cover 
                           relative
                           
                           
          `}>
          <Header />
          <Routes>
            <Route element={<HeroSection />} path={"/"}/>
            <Route element={<Destination setActiveMenu={setActiveMenu}/>} path={"/:destination"}/>
            <Route element={<Crew/>} path={"/crew"} />
            <Route element={<Techonology/>} path={"/technology"} />
          </Routes>
         </div>
        
        
  
        </div>

      </AppContext.Provider>
      
       
   
   
  )
}

export default App
