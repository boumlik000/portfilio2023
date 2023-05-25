import React, { useState, useEffect } from 'react';
import PageLoading from './loading';
import "./home.css";
import Navigation from '../components/nav';
import Profile from '../components/profile';
import TextProfile from '../components/textprofile';
import BtnBlue from '../components/btn_blue';
import BtnGris from '../components/btn_gris';
import Sidebar from '../components/sidebar';
import About from '../components/about';
import Title from '../components/title';
import Card from '../components/card';
import Comment from '../components/comments';
import { GalleryData } from '../components/filterdata/galleryapp';
import { GalleryComments } from '../components/filterdata/GalleryComment';
import ProgressBar from '../components/progressBar';
import { FaHtml5,FaCss3Alt,FaFigma,FaBootstrap,FaReact,FaSass,FaTwitter,FaLinkedin,FaEtsy,FaGithub,FaInstagram } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io5';
import {SiAdobeillustrator,SiAdobexd,SiAdobepremierepro,SiTailwindcss} from 'react-icons/si';
import FormContact from '../components/form';
import Footer from '../components/footer';

// ---------------icons



function Home(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the delay as needed
  }, []);
  return (
    
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <>
          <Navigation/>
          <Sidebar />
          <div className="container">
            <section className="row section_home" >
              <div className="col-md-4 d-flex  flex-column justify-content-center  align-items-center">
                <Profile />
              </div>
              <div className="col-md-8 d-flex  flex-column justify-content-center profile-text">
                <TextProfile  />
                <div className="small-links mt-4">
                  <span className=''>
                    <BtnBlue text="view my works" onClick={() => window.location.replace("#projects")}/>   
                  </span>
                  <span className='mt-4 mx-4'>
                    <BtnGris text="contact_me" onClick={() => window.location.replace("#contact")}/>
                  </span>
                </div>
                
              </div>
            </section>


            <div className="row d-flex justify-content-center align-items-center skills-tech m-auto mt-5">
              <div className="col-lg-1 col-md-2   tech-title p-1"> Tech Stack </div>

              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center ">
                <div className="icons">
                  <FaHtml5 className='html'/>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <FaCss3Alt className='css'/>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <IoLogoJavascript className='js'/>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <FaReact className='react' />
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <FaBootstrap className='bootstrap'/>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <FaSass className='sass'/>  </div>
                </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <SiTailwindcss className='tailwind'/>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <FaFigma className='figma'/>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <SiAdobeillustrator className='illustrator'/>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <SiAdobexd className='XD'/>
                </div> 
              </div>
              <div className="col-lg-1 col-md-2 col-sm-3 col-4 d-flex justify-content-center  ">
                <div className="icons">
                  <SiAdobepremierepro className='premierpro'/>
                </div>
              </div>
            </div>


            <section className="section_about  mt-5 " id='about' >
              <div className="row px-md-5 about-height">
                <div className="col-md-12 about_title">
                  <Title  title="About" second="About" />
                </div>
                <div className="row m-0 about_body">
                  <About />
                </div>
              </div>
            </section>
          
            <section className="section_skills  mt-5 pt-4"   id='skills'> 
              <div className="px-md-5">
                  <div className="col-md-12">
                    <Title  title="Skills" second="Skills"/>
                  </div>
                  <div className="row ps-0 m-0">
                    <div className="col-sm-6 my-3 p-0">
                      <ProgressBar title="HTML/CSS" value={90} count={"90%"} />
                    </div>
                    <div className="col-sm-6 my-3 p-0">
                      <ProgressBar title="Java Script" value={80} count={"80%"} />
                    </div>
                    <div className="col-sm-6 my-3 p-0">
                      <ProgressBar title="Figma" value={80} count={"80%"  }/>
                    </div>
                    <div className="col-sm-6 my-3 p-0">
                      <ProgressBar title="Bootstrap-Tailwind-sass" value={90} count={"90%"  }/>
                    </div>
                    <div className="col-sm-6 my-3 p-0">
                      <ProgressBar title="React Js" value={70} count={ "70%"}/>
                    </div>
                    <div className="col-sm-6 my-3 p-0">
                      <ProgressBar title="Adobe Illustrator/XD  " value={90} count={"90%" }/>
                    </div>
                  </div>
              </div>
            </section>

            <section className='section_projects mt-5 pt-4'id='projects' >
                <div className="col-md-12">
                  <Title  title="Projects" second="Projects"/>
                </div>
                <div className="p-0  mt-5">
                  {GalleryData.map((item) => (
                    <Card
                      key={item.id}
                      title={item.title}
                      image={item.image}
                      description={item.description}
                      tags={item.tags}
                      github={item.github}
                      web={item.web}
                    />
                  ))}
                </div>
            </section>
            
            <section className="section_comments mt-5 pt-4" id="comments">
              <div className="col-md-12">
                <Title  title="Comments" second="Comments"/>
              </div>
              <Comment galleryComments={GalleryComments} />
            </section>


            <section className="section_Contact my-5" id="contact">
              <div className="col-md-12 my-3">
                <Title  title="Contact" second="Contact"/>
              </div>
              <div className="row ">
                <div className="col-lg-6 order-lg-1 order-2  contact_me-description ">
                      <div className='px-5' >
                        <h2>Let's get in touch</h2>
                        <p>
                        I find great pleasure in engaging in conversations about fresh projects and design hurdles,
                        Kindly provide me with as much information as you can, enabling us to make the most of our initial discussion
                        . I look forward to delving into the details with you!
                        </p>
                      </div>
                      <div className='px-5 email-contact' >
                        <h2>My Email</h2>
                        <p><a href="/" style={{textDecoration:"none" ,color:"#000"}}>mohamedboumlik000@gmail.com</a></p>
                      </div>
                      <div className="social-media">
                        <span className="icons-media_contact">
                          <a href="https://twitter.com/mohamed01588858"className='FaTwitter' target='_blank'  rel="noreferrer"  ><FaTwitter/></a>
                        </span>
                        <span className="icons-media_contact">
                          <a href="https://www.linkedin.com/in/mohamed-boumlik-44b5b6267/" className='FaLinkedin' target='_blank' rel="noreferrer"  ><FaLinkedin /></a>
                        </span>
                        <span className="icons-media_contact">
                          <a href="https://github.com/boumlik000" className='FaGithub' target='_blank' rel="noreferrer"  ><FaGithub /></a>
                        </span>
                        <span className="icons-media_contact">
                          <a href="https://www.instagram.com/boumlik0/" className='FaInstagram' target='_blank' rel="noreferrer"  ><FaInstagram /></a>
                        </span>
                        <span className="icons-media_contact">
                          <a href="/" className='FaEtsy'  ><FaEtsy /></a>
                        </span>
                      </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1 contact_me-form">
                  <FormContact />
                </div>
              </div>     
            </section>

          </div>
          
          <section className="footer-section ">
            <Footer />
          </section>
        </>
      )}
    </>
    
  );
}

export default Home;