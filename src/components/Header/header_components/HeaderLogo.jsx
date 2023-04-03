import React from 'react'
import logo from '../../../assets/shared/logo.svg'


function HeaderLogo() {
  return (
        <>
       
            <img src={logo} 
                 alt="brand-logo" 
                 className='w-10 
                            h-10 
                            md:h-12 
                            md:w-12 
                            lg:w-12 
                            lg:h-12'/>
        </>
    
  )
}

export default HeaderLogo