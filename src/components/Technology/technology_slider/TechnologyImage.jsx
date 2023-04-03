import React, { useEffect, useState } from 'react'

function TechnologyImage({ imageLandscape, imagePortrait }) {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth)
  })

  return (
    <div>
        <img src={screenSize >= 1440 ? imagePortrait : imageLandscape} alt="technology-image" className='w-screen lg:w-full lg:h-full'/>
    </div>
  )
}

export default TechnologyImage