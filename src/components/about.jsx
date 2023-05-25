import React from 'react';
 import '../styles/about.css';

function About(props ) {
  

  return (
     <>
        
        <div className="row p-0  mt-5">
         <div className="col-md-8 experience1   ">
               <p className='paragraph_about mt-4'>
                     <span className='h3'> Hi, im <i className='h1'>Mohamed Boumlik</i></span>
                     a Front-end Developer and Designer with a passion
                     for creating engaging and user-friendly web
                     experiences. With expertise in HTML, CSS, JavaScript,
                     jQuery, Bootstrap, SASS, and Webpack,
                     I specialize in building responsive and scalable
                     websites. I also have extensive knowledge in design tools such as Illustrator, Photoshop
                     , and Premier Pro, which allows me to create stunning visual designs.
               </p>
         </div>
         <div className="col-md-4 experience  ">
               <span className='number'>18</span>
               <p className='text-center'>
                  <span className='span0'>Months of</span>
                  <span className='span1'>Experience</span>
               </p>
         </div>
        </div>

        <div className="row m-0 pe-0 ps-0 pb-4">
         <div className="col-sm-6 statistics">
               <span>Name:</span>
               <h5>Mohamed Boumlik</h5>
         </div>
         <div className="col-sm-6 statistics">
               <span>Email:</span>
               <h5 className='email'><a href="/">mohamedboumlik000@gmail.com</a></h5>
         </div>
         <div className="col-sm-6 statistics">
               <span>Date of Birth:</span>
               <h5>11 November,2001</h5>
         </div>
         <div className="col-sm-6 statistics">
               <span>From:</span>
               <h5>Marrakech, Morocco</h5>
         </div>
        </div>
        
     </>
  );
}

export default About;