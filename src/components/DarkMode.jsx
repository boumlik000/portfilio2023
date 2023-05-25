import React,{ useState, useEffect } from "react";
import {FaMoon,FaSun} from 'react-icons/fa';
import "../styles/DarkMode.css";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
      const root = document.documentElement; // Get the root element
  
      if (isDarkMode) {
        root.classList.add("dark-mode","active"); // Add the dark-mode class to enable dark mode
      } else {
        root.classList.remove("dark-mode","active");
        setTimeout(() => {
          root.classList.remove("dark-mode");
        }, 300); // Remove the dark-mode class to disable dark mode
      }
    }, [isDarkMode]);
  
    const handleToggle = () => {
      setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={isDarkMode}
                onChange={handleToggle}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <span className="sun" >
                    <FaSun />
                </span>
                <span className="moon" > 
                    <FaMoon />
                </span>
            </label>
        </div>
    );
};

export default DarkMode;
