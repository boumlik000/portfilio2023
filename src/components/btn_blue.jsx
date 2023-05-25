import React from 'react';
 import '../styles/btn_blue.css';

function BtnBlue(props ) {
  

  return (
      <a className='btn btn_blue' href={props.link} onClick={props.onClick}> {props.text} </a>
  );
}

export default BtnBlue;