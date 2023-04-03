import React  from 'react'
import HamburgerMenu from './header_components/HamburgerMenu'
import HeaderLogo from './header_components/HeaderLogo'
import Menu from './header_components/Menu'


const navMenus = [
  {
    'navNumber': "00",
    'destination': "HOME",
    'isLastItem': false
  },
  {
    'navNumber': "01",
    'destination': "DESTINATION",
    'isLastItem': false
  },
  {
    'navNumber': "02",
    'destination': "CREW",
    'isLastItem': false
  },
  {
    'navNumber': "03",
    'destination': "TECHNOLOGY",
    'isLastItem': true
  }
]


function Header() {
  
 
  return (
    <div className='flex 
                    justify-between 
                    items-center 
                    
                    lg:pl-[3.4375rem] 
                    lg:pt-[2.5rem]
    '>

      <div className='flex 
                      justify-between 
                      items-center 
                      w-screen 
                      p-6
                      md:px-[2.4375rem]
      '>
        <HeaderLogo />

        <div className='bg-blend-normal 
                        opacity-25 
                        relative 
                        z-10 
                        w-full
                        
                        lg:h-[1px] 
                        lg:translate-x-[61px] 
                        lg:bg-theme-white 
        '></div>
        
        <HamburgerMenu  menus={navMenus}/>
        
      </div>

      <Menu menus={navMenus}/>
    </div>
    
  )
}

export default Header