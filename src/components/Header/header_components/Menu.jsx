import React, { useContext } from 'react'
import NavItem from './NavItem'
import App, { AppContext } from '../../../App'

function Menu( {  menus } ) {
  const { activeMenu, setActiveMenu } = useContext(AppContext)

  return (
    <div className='text-second-sub-heading
                    sm:hidden 
                    md:block 
    '>
      <div className='glass-container'>
          <nav className='px-12 
                          font-heading-small
                          lg:pl-[7.6875rem] 
                          lg:pr-[10.3125rem] 
          '>
              <ul className='flex'>

                  { menus.map(item => {

                    return <NavItem key={item.destination} activeMenu={activeMenu} 
                                    index={menus.indexOf(item)}
                                    setActiveMenu={setActiveMenu} 
                                    navNumber={item.navNumber} 
                                    destination={item.destination}
                                    last={item.isLastItem}
                            />
                  })}
   
              </ul>
          </nav>
      </div>
    </div>
  )
}

export default Menu


