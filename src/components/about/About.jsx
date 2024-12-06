//import React from 'react'
import myImage from "C:/Users/aakrit/Videos/res/Desktop/web_projects/React/newPortfolio/AakritPortfolio/src/components/about/aakimage.jpg"

function About() {

  return (
    
       <div className="flex flex-col items-center justify-center  min-h-screen "> 
        <div className="max-w-6xl w-full bg-transparent  backdrop-blur-lg shadow-allSides shadow-[#177266]  rounded-2xl overflow-hidden lg:py-10 lg:mb-10 flex flex-col md:flex-row"> 
          <div className="md:w-1/3 flex items-center justify-center p-4"> 
            <img src={myImage} alt="Your Image" className="w-48 h-48 rounded-[30px] object-cover"/> 
          </div> 
          <div className="md:w-2/3 p-6"> 
          <h2 className="text-3xl text-[#18786a] font-bold mb-2">
            About Me
          </h2> 
          <p className="text-white mb-4"> 
            I am a dedicated and innovative frontend developer with expertise in HTML, 
            CSS, JavaScript, and Tailwind CSS. With a keen interest in expanding my horizons, 
            I am currently diving into React JS. My backend knowledge includes MongoDB, 
            which I utilize to manage and store data efficiently. 
          </p> 
          <p className="text-white mb-4"> 
            In addition to my technical skills, I pride myself on being a strong communicator and an effective leader. 
            I excel in teamwork, fostering collaboration and driving projects to successful completion. 
            My commitment to continuous learning and passion for innovation make me a valuable asset to any team. 
          </p> 
        </div> 
       </div> 
       </div>
  
  )
}

export default About
