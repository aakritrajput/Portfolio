import myResume from './Resume_Aakrit.pdf'
import { motion } from 'motion/react'
import myImage from "../../../public/aakritpassphoto.png"
import OvalComponent from "./OvalComponent.jsx"
import CertificationsSection from "./CertificationSection.jsx"
import Experience from './Experience.jsx';
import TechStack from './TechStack.jsx'
import GithubStats from './GithubStats.jsx'
import WorkWithMe from './WorkWithMe.jsx'
import Footer from '../footer/Footer.jsx'

const groupedSkills = {
  "Frontend": ["Next.js","HTML", "CSS", "JavaScript","TypeScript", "React", "Tailwind CSS"],
  "Backend": ["Django","Node.js", "Express.js", "Nodemailer", "Twilio", "JWT"],
  "ML & AI": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Turi Create", "Jupyter Notebook"],
  "Databases": ["MongoDB", "MySQL", "Appwrite", "Cloudinary"],
  "Tools & Deployment": ["Git", "Github", "Vercel", "Render", "Postman", "RESTful APIs", "Python", "C Language"],
};
function Home() {
  return (
    <div className="relative p-2 sm:p-6 bg-transparent rounded-lg shadow-lg"> 
      <OvalComponent/>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 w-auto mx-auto px-5 xs:px-7 rounded-3xl bg-transparent   sm:px-10 sm:pb-10 pb-2 items-center justify-center">
        <div >
          <motion.h1
            initial={{ y: -40, opacity: 0, backgroundPosition: "0% 50%" }}
            animate={{ y: 0, opacity: 1, backgroundPosition: "200% 50%" }}
            transition={{ duration: 2, ease: "anticipate" }}
            className="gradient-text lg:text-[60px] md:text-[45px] sm:text-[38px] xs:text-[28px] text-[24px] mt-[12px] xs:mt-auto font-bold font-main text-[#6f4ba6] lg:pl-[120px] lg:mt-[150px] neon-glow"
          >
          Hi, I am Aakrit
          </motion.h1>
          <motion.p 
            initial={{y: -40, opacity: 0.1}} 
            animate={{y: 0 , opacity:1}} 
            transition={{duration:2 , ease: "anticipate"}} 
            className="text-[#bfb1c6] lg:pl-[120px] mt-3 md:text-[18px] sm:text-[16px] text-[15px]">
            A self-taught full-stack developer passionate about building modern, scalable, and high-performance web applications. With expertise in frontend, backend, and databases, I thrive on crafting seamless user experiences with clean and efficient code.
          </motion.p>
          <a href={myResume} download>
            <motion.button initial={{y: -40, opacity: 0.1}} animate={{y: 0 , opacity:1}} transition={{duration:2 , ease: "anticipate"}} className="text-[#6f4ba6] hover:text-[#956bd4] border-[3px] text-[18px] lg:ml-[120px]  hover:shadow-[0_0_30px_0_#6f4ba6] border-[#6f4ba6] hover:border-[#956bd4] p-1 mt-[20px] px-4 rounded-full hidden sm:flex">Resume</motion.button>
          </a>
        </div>
        <div>
          <motion.div animate={{x:[0, 20, 20, 0 , 0], y:[0,-20, 0, -20, 0] , size: [1 , 0.9 , 1 , 0.8 , 1]}} transition={{duration: 4 }} drag dragConstraints={{left: 0 , right: 0 , top: 0 , bottom: 0}} className="w-full flex justify-center">
             <img className="rounded-[50%] border-[2px] border-[#956bd4] lg:max-h-[350px] md:max-h-[300px] transition-all duration-200 ease-in-out transform hover:shadow-[0_0_80px_0_#6f4ba6] shadow-[0_0_30px_0_#6f4ba6] xs:max-h-[230px] max-h-[180px] lg:ml-[25%] lg:mt-[20%] md:ml-[10%] mt-[10%]" src={myImage} alt="Aakrit Rajput - Fullstack Developer" />
          </motion.div>
          <div  className="w-full flex justify-center">
            <a href={myResume} download>
             <motion.button initial={{y: -40, opacity: 0.1}} animate={{y: 0 , opacity:1}} transition={{duration:2 , ease: "anticipate"}}  className="text-[#6f4ba6]  hover:text-[#956bd4] border-[3px] text-[18px] lg:ml-[120px] border-[#6f4ba6] hover:border-[#956bd4] p-1 hover:shadow-[0_0_30px_0_#6f4ba6]   mt-[20px] px-4 rounded-full sm:hidden flex items-center ">Resume</motion.button>
            </a>
          </div>
        </div>
      </div> 
      <div className=" relative flex justify-center   space-x-4 mt-[30px] gap-10 sm:gap-2 sm:mt-4 rounded-md transition-all duration-200 ease-in-out transform  "> 
          <a href="https://www.linkedin.com/in/aakrit-rajput-529210333" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:shadow-[0_0_30px_0_#3B82F6]"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#0A66C2">  
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.47a2.07 2.07 0 110-4.15 2.07 2.07 0 010 4.15zm14.1 12.98h-3.55v-5.73c0-1.37-.49-2.3-1.73-2.3-.94 0-1.5.64-1.75 1.26-.09.21-.11.51-.11.81v5.97h-3.55s.05-9.72 0-10.72h3.55v1.52c.48-.74 1.32-1.8 3.2-1.8 2.34 0 4.1 1.53 4.1 4.82v6.18z"/>
            </svg>
          </a> 
          <a href="https://github.com/aakritrajput" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline hover:shadow-[0_0_30px_0_#6B7280]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M12 .296c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.011-1.04-.017-2.042-3.338.725-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.004.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.622-5.476 5.921.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.217.694.824.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12"/>
            </svg>
          </a> 
          <a href="mailto:aakritrajput87@gmail.com" className="text-red-600 hover:underline hover:shadow-[0_0_30px_0_#EF4444]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#D44638">
              <path d="M12 12.713l11.985-7.163a2.001 2.001 0 0 0-1.995-1.99H2.01A2.003 2.003 0 0 0 .015 5.55l11.985 7.163zm0 2.574L0 8.513V18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8.513l-12 6.774z"/>
            </svg>
          </a>
      </div>
      <div className="w-full px-4 rounded-md sm:px-10 py-5 my-16 text-white bg-gradient-to-br from-[#00ffd5]/10 via-[#1a1a1a]/60 to-black/80">
        <h2 className="text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6f4ba6] to-[#00ffd5] mb-12">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(groupedSkills).map(([group, skills], groupIndex, arr) => {
            const isLastOdd = arr.length % 2 === 1 && groupIndex === arr.length - 1;
            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-xl p-5 shadow-md border border-white/10 bg-white/10 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:shadow-[0_0_30px_#6f4ba6]/70 ${
                  isLastOdd ? "md:col-span-2 flex justify-center" : ""
                }`}
              >
                <div className="w-full md:max-w-xl">
                  <h3 className="text-xl font-semibold text-[#6f4ba6] mb-4 border-b border-[#6f4ba6] pb-1">
                    {group}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 text-sm rounded-full bg-gradient-to-br from-[#6f4ba6] via-gray-800 to-black border border-[#6f4ba6] text-white shadow-md hover:shadow-[0_0_20px_#6f4ba6] transition-all"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
      <TechStack/>
      <Experience/>
      <CertificationsSection/>
      <WorkWithMe/>
      <GithubStats/>
      <div className="w-full flex my-10 text-center items-center flex-col justify-center">
        <h1 className='text-white font-bold text-[30px] py-5'>My LinkedIn&apos;s latest project post !!</h1>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7285879454399160320" 
            className="w-full md:w-3/4 h-[500px] overflow-auto rounded-lg shadow-lg border border-gray-300">
        </iframe>
      </div>
      <Footer/>
    </div>
  )
}

export default Home

