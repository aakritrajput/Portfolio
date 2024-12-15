import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const navOpener = () => {
    console.log("btn clicked");
    let nav = document.querySelector("#navbar");
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      nav.style.display = 'block';
      nav.style.backgroundColor = 'rgba(0,0,0,0.8)';
      nav.style.borderRadius = '30px';
      nav.style.width = '80vw';
      nav.style.textAlign = 'center';
      nav.style.padding = '15px';
      nav.style.margin = '10px';
      nav.style.gap = '20px';
      nav.style.position = 'fixed';
      nav.style.zIndex = '10'; // Ensure it's on top

      let childNodes = nav.children;
      for (let i = 0; i < childNodes.length; i++) {
        childNodes[i].style.marginBottom = '20px';
        console.log(childNodes[i]);
      }
    } else {
      nav.classList.add("hidden");
      nav.style.display = 'none';
    }
  };

  const location = useLocation(); 
  const baseClasses = "lg:p-2 p-1 transition-all duration-200 ease-in-out transform rounded-full relative px-4 py-2 before:bg-purple-800 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-full before:bg- before:transform before:scale-x-0 before:transition-all before:duration-300 before:ease-in-out focus:before:scale-x-100 hover:before:scale-x-100"; 
  const activeClasses = "text-purple-700"; 
  const inactiveClasses = "text-white hover:text-gray-400"

  return (
    <>
      <div className='flex w-auto justify-between lg:p-4 lg:m-3 lg:px-7 p-2 m-2 xs:p-[12px] xs:m-3 shadow-bottom'>
        <h1 className='text-white md:text-3xl xs:text-2xl text-xl font-mono'>Portfolio</h1>
        <ul className='sm:flex md:gap-10 sm:gap-6 hidden duration-300' id="navbar">
          <li> 
            <NavLink to="/" className={`${baseClasses} ${location.pathname === "/" ? activeClasses : inactiveClasses}`} > 
             Home 
            </NavLink> 
          </li> 
          <li> 
            <NavLink to="/about" className={`${baseClasses} ${location.pathname === "/about" ? activeClasses : inactiveClasses}`} > 
             About Me 
            </NavLink> 
          </li> 
          <li> 
            <NavLink to="/gallery" className={`${baseClasses} ${location.pathname === "/gallery" ? activeClasses : inactiveClasses}`} >
             Gallery 
            </NavLink> 
          </li> 
          <li> 
            <NavLink to="/contact" className={`${baseClasses} ${location.pathname === "/contact" ? activeClasses : inactiveClasses}`} > 
             Contact 
            </NavLink> 
          </li>
        </ul>

        <button className='text-white hover:text-[#7B53B6] text:xl flex sm:hidden' onClick={navOpener}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="18" r="2" fill="currentColor" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Header;
