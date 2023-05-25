import React from 'react';
import '../styles/title.css';

function Title(props ) {
  

  return (
      <>
        <section className="wrapper my-4">
            <div className="top">{props.title}</div>
            <div className="bottom" aria-hidden="true">{props.second}</div>
        </section>
      </>
  );
}

export default Title;