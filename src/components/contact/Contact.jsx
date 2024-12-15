
function Contact() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen bg-transparent p-4 md:mt-5"> 
      <div className="max-w-2xl w-full bg-[#181818] shadow-lg shadow-[#6f4ba6] rounded-lg p-6"> 
        <h2 className="text-3xl text-[#6f4ba6] font-bold mb-4">Contact Me</h2> 
        <form className="flex flex-col space-y-4"> 
          <div className="flex flex-col"> 
            <label className="text-white mb-1" htmlFor="name">Name:</label> 
            <input type="text" id="name" className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6f4ba6]" /> 
          </div> 
          <div className="flex flex-col"> 
            <label className="text-white mb-1" htmlFor="email">Email:</label> 
            <input type="email" id="email" className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6f4ba6]" /> 
          </div> 
          <div className="flex flex-col"> 
            <label className="text-white mb-1" htmlFor="message">Message:</label> 
            <textarea id="message" rows="4" className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6f4ba6]"></textarea> 
          </div> 
          <button type="submit" className="bg-[#6f4ba6] text-white p-2 rounded hover:bg-[#7051a0] transition duration-200">
            Submit
          </button> 
        </form> 
        <div className="flex justify-center mt-4 space-x-4"> 
          <a href="https://www.linkedin.com/in/aakrit-rajput-529210333" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#0A66C2">  
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.47a2.07 2.07 0 110-4.15 2.07 2.07 0 010 4.15zm14.1 12.98h-3.55v-5.73c0-1.37-.49-2.3-1.73-2.3-.94 0-1.5.64-1.75 1.26-.09.21-.11.51-.11.81v5.97h-3.55s.05-9.72 0-10.72h3.55v1.52c.48-.74 1.32-1.8 3.2-1.8 2.34 0 4.1 1.53 4.1 4.82v6.18z"/>
            </svg>
          </a> 
          <a href="https://github.com/aakritrajput" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M12 .296c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.011-1.04-.017-2.042-3.338.725-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.004.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.622-5.476 5.921.43.372.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.217.694.824.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12"/>
            </svg>
          </a> 
          <a href="mailto:aakritrajput87@gmail.com" className="text-red-600 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#D44638">
              <path d="M12 12.713l11.985-7.163a2.001 2.001 0 0 0-1.995-1.99H2.01A2.003 2.003 0 0 0 .015 5.55l11.985 7.163zm0 2.574L0 8.513V18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8.513l-12 6.774z"/>
            </svg>
          </a>
        </div>
      </div> 
    </div>
  )
}

export default Contact
