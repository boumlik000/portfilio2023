import React from 'react';
import '../styles/footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const creatorName = 'Boumlik Mohamed';

  return (
    <div className="footer_section row ">
      <span className='h6 col-md-6'>Copyright  &copy; {currentYear} <span className='creator-name'>{creatorName}</span></span>
      <span className='h6 col-md-6'>designed buy <span className='creator-name'>{creatorName}</span></span>
    </div>
  );
}

export default Footer;