import React from 'react';
import "../styles/nav.css";
import { Navbar} from 'react-bootstrap'
import DarkMode from './DarkMode';


function Navigation(props) {
  

  return (
      <>  
        <Navbar collapseOnSelect expand="md" className='scrolled  my-4 ' id='home'>
                <DarkMode />
                <Navbar.Brand href="#home" className='brand'>Mohamed Boumlik</Navbar.Brand>
        </Navbar>
      </>
  );
}

export default Navigation;