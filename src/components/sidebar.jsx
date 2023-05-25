import React from 'react';
import '../styles/sidebar.css';
// import { faRectangleVerticalHistory } from '@fortawesome/free-brands-svg-icons';
import { GiSkills } from 'react-icons/gi'
import { SiAboutdotme } from 'react-icons/si'
import { VscProject } from 'react-icons/vsc'
import { FaComments,FaHome } from 'react-icons/fa'
import { MdConnectWithoutContact } from 'react-icons/md'






const Sidebar = () => {
  return (
   
        <nav>
          <ul>
            <li onClick={() => window.location.replace("#home")}>
              <a className="home-icon" href='#home' >
                <FaHome  className='icon' />
              </a>
            </li>
            <li onClick={() => window.location.replace("#about")}>
              <a className="about-icon" href='#about' >
              <SiAboutdotme  className='icon'/>
              </a>
            </li>
            <li onClick={() => window.location.replace("#skills")}>
              <a className="projects" href="#skills" >
              <GiSkills className='icon'/>
              </a>
            </li>
            <li onClick={() => window.location.replace("#projects")}>
              <a className="projects" href="#projects" >
              <VscProject  className='icon' />
              </a>
            </li>
            <li onClick={() => window.location.replace("#comments")}>
              <a className="comments" href="/" >
                <FaComments  className='icon'/>
              </a>
            </li>
            <li onClick={() => window.location.replace("#contact")}>
              <a className="contact" href="/" >
                <MdConnectWithoutContact  className='icon'/>
              </a>
            </li>
          </ul>
      </nav>
    
  );
};

export default Sidebar;