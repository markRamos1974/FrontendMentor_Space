import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { AppContext } from "../../../App"

const NavItem = ({ destination, last, navNumber, activeMenu, setActiveMenu, isMobile , index}) => {
    const { isHamburgerMenuActive, setIsHamburgerMenuActive} = useContext(AppContext)

    const handleActiveMenu = () => {
      if(isHamburgerMenuActive) {
        setIsHamburgerMenuActive(!isHamburgerMenuActive)
      }
      setActiveMenu(destination)
    }
  
    return (
      <li className={`
  
                    text-theme-white 
                      outline-offset-[-30px]
                      ${destination === activeMenu && isMobile? "sm:border-r-[0.1875rem]  md:border-r-0" : ""} 
                      ${last ? "" : "sm:mr-0 md:mr-[2.625rem] lg:mr-12" }  
                      flex 
                      items-center
  
                    `} 
                      
                       
      >
        <Link onClick={handleActiveMenu} to={destination === "HOME" ?  "/FrontendMentor_Space/" : "/FrontendMentor_Space/" + destination.toLowerCase() + "/" +index} 
              className={`
              
  
                          tracking-[2.36px]
                          flex 
                          justify-center
                          items-center
                          text-base
  
                          ${ destination === activeMenu && !isMobile ? "border-b-[0.1875rem]" : "hover:border-b-[0.1875rem] border-hover-color" } 
                          
                          sm:h-[3rem] 
                          md:h-24   
  
              `}>
  
          <div className='sm:font-bold 
                          sm:mr-[0.6875rem]
  
                          md:hidden  
                          lg:block 
                          lg:font-bold 
                          lg:mr-[0.6875rem] 
          '>
            {navNumber}
          </div>
          <div className={`flex 
                           justify-center 
                           items-center 
                           
                           md:h-24
          `}>
            {destination}
          </div>
        </Link>
      </li>
    )
}

export default NavItem