import React from 'react';
import '../styles/btn_gris.css';

function BtnGris(props) {
  

  return (
    <>
      <button className='btn btn_gris' onClick={props.onClick}>{props.text}</button>
    </>
  );
}

export default BtnGris;