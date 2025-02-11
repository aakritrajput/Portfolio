//import React from 'react'
import myImage from "./aakimage.jpg";

function About() {

  return (
    
       <div className="flex flex-col items-center justify-center  min-h-screen  mt-2"> 
        <div className="max-w-6xl w-full bg-transparent  backdrop-blur-lg shadow-allSides shadow-[#177266]  rounded-2xl overflow-hidden lg:py-10 lg:mb-10 flex flex-col md:flex-row"> 
          <div className="md:w-1/3 flex items-center justify-center p-4"> 
            <img src={myImage} alt="Your Image" className="w-48 h-48 sm:w-[210px] sm:h-auto rounded-[30px] border-[#177266] border-[2px] object-cover"/> 
          </div> 
          <div className="md:w-2/3 p-6"> 
          <h2 className="text-3xl text-[#18786a] font-bold mb-2">
            About Me
          </h2> 
          <p className="text-white mb-4"> 
          Hey there! I&apos;m Aakrit, a self-taught full-stack web developer with a passion for crafting modern, high-performance, and scalable web applications. From designing sleek user interfaces to building robust backend systems, I love every aspect of web development. <br /><br />
          My journey in tech started with curiosity and a strong drive to learn. With no formal CS degree, I&apos;ve built my skills from the ground up through hands-on projects and continuous self-improvement. I specialize in React, Node.js, MongoDB, and other web technologies, always exploring new tools and frameworks to enhance my development workflow.
          </p> 
          <p className="text-white mb-4"> 
            In addition to my technical skills, I pride myself on being a strong communicator and an effective leader. 
            I excel in teamwork, fostering collaboration and driving projects to successful completion. 
            My commitment to continuous learning and passion for innovation make me a valuable asset to any team. 
          </p> 
          <h3 className="text-2xl text-[#18786a] font-bold mb-2">
          What I Do
          </h3> 
          <p className="text-white mb-4"> 
            <ul className="">
              <li><b>Frontend Development</b> - Creating responsive, interactive, and visually appealing UI/UX experiences using React, Tailwind CSS, and Framer Motion.</li>
              <li><b>Backend Development</b> - Building scalable, secure, and efficient server-side applications with Node.js, Express.js, and MongoDB.</li>
              <li><b>Full-Stack Projects</b> - Developing complete web applications, from designing APIs to deploying fully functional products.</li>
              <li><b>Performance & Optimization</b> - Ensuring applications are fast, accessible, and user-friendly with clean and maintainable code.</li>
            </ul>
          </p> 
        </div> 
       </div> 
       </div>
  
  )
}

export default About
