import React, { useState, useContext } from 'react'
import NavItem from './NavItem'
import { AppContext } from '../../../App'


function HamburgerMenu({ menus }) {
  const { activeMenu, setActiveMenu, isHamburgerMenuActive, setIsHamburgerMenuActive } = useContext(AppContext)

  const top = "origin-bottom-left rotate-45 "
  const bottom = "origin-top-left rotate-[-45deg] "

  const handleClick = () =>{
    setIsHamburgerMenuActive(!isHamburgerMenuActive)
  }


  return (
  <>
    <div className='relative 
                    z-10 
                    flex-row 
                    w-6 
                    h-[1.3125rem] 
                    cursor-pointer
                    md:hidden 
                    
                    hamburger-menu' 
                    
                    onClick={handleClick}
    >
        <div className={`w-[1.5rem] h-[0.1875rem] bg-theme-white mb-[0.375rem] ease-in-out duration-300 ${isHamburgerMenuActive ? top: null}`}></div>
        <div className={`w-[1.5rem] h-[0.1875rem] bg-theme-white mb-[0.375rem] ease-in-out duration-300 ${isHamburgerMenuActive ? "opacity-0" : null}`}></div>
        <div className={`w-[1.5rem] h-[0.1875rem] bg-theme-white ease-in-out duration-300 ${isHamburgerMenuActive ? bottom: null}`}></div>
    </div>

    <div className={`z-[6] 
                     absolute 
                     right-0 
                     top-0 
                     overflow-hidden 
                     
                     md:hidden
    `}>

      <div className={`h-screen
                       w-0 
                       ease-in-out 
                       duration-300 
                       text-base 
                       font-heading-small 
                       tracking-third-sub-heading 
                       
                       ${isHamburgerMenuActive ? `w-[15.875rem]` : ""} 

                       sm:pt-[7.375rem]

                       mobile-menu
      `}>
        <ul className='ml-8'>
        {
            menus.map(item => {
              return <NavItem key={item.navNumber} 
                        isMobile={true} 
                        activeMenu={activeMenu} 
                        setActiveMenu={setActiveMenu} 
                        navNumber={item.navNumber} 
                        destination={item.destination}/>
              })
          }
        </ul>
      </div>
    </div>
  </>
    
  )
}

export default HamburgerMenu