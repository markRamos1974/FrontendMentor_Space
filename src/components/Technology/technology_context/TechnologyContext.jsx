import React from 'react'
import TechnologyBody from './technology_context_components/TechnologyBody'
import TechnologyTitle from './technology_context_components/TechnologyTitle'

function TechnologyContext({ contextData }) {
  return (
    <div className='tech-context text-[0.875rem] mt-[1.625rem] flex justify-center items-center md:mt-[2.75rem] lg:mt-0'>
        <div className='text-center lg:text-start'>
            <p className='text-light-blue font-heading-small md:text-base'><span className='tracking-[2.36px]'>THE TERMINOLOGY</span>...</p>
            <TechnologyTitle title={contextData.name}/>
            <TechnologyBody description={contextData.description}/>
        </div>
        
    </div>
  )
}

export default TechnologyContext