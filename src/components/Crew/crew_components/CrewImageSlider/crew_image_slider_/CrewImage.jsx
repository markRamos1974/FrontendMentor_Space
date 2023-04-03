import React from 'react'

function CrewImage({ imagePath, active, name }) {
 
  return (
    <section className={`
                        h-[13.9375rem] 
                        w-screen 
                        flex 
                        justify-center
                        items-center
                        md:h-[33.25rem]
                        ${name.toUpperCase() == "DOUGLAS HURLEY" ? "md:w-[28.523125rem]" : ""}
                        ${name.toUpperCase() == "MARK SHUTTLEWORTH" ? "md:w-[23.053125rem]" : ""}
                        ${name.toUpperCase() == "VICTOR GLOVER" ? "md:w-[27.068125rem]" : ""}
                        ${name.toUpperCase() == "ANOUSHEH ANSARI" ? "md:w-[33.719375rem]" : ""}
                        md:h-[35.75rem]

                        lg:w-[100%]
                        relattive

                      
                     
                        
                        
                        
    `}>
      <img src={imagePath} alt="crewImage"  className={`crewImage h-full transition ease-out duration-300 ${active ? "opacity-100" : "opacity-0"}`} draggable={false }/>
    </section>
    
   
  )
}
// 
export default CrewImage