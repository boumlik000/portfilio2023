import React from 'react';
import "../styles/card.css"
import SwiperCore ,{ Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import {FaGithub,FaLink} from 'react-icons/fa';


SwiperCore.use([Navigation, Pagination, Autoplay]);

function Card(props ) {
    const { title, image, description, tags, github, web } = props;

  return (
     
    <>
        <div className="row pt-5 p-md-4 p-2 card-projects mt-4">
            <div className="col-lg-8 card_description ">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="tags">
                    <div className="tags_projects">
                        {tags.map((tag, index) => (
                            <span key={index} className='tag'>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="icons_projects ">
                        {github && (
                            <span className='mx-2'>
                                <a href={github} target='_blank' rel="noreferrer"><FaGithub /></a>
                            </span>
                        )}
                        {web && (
                            <span className='mx-2'>
                                <a href={web} target='_blank' rel="noreferrer"><FaLink /></a>
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-lg-4 carouseel_projects py-2  px-0">
                <Swiper 
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={
                    {
                        rotate:0,
                        stretch:0,
                        depth:100,
                        modifier:2.5
                    }
                    }
                    className='swiper-container'
                    
                    pagination={{el:'.swiper-pagination',clickable: true}}
                    modules={[EffectCoverflow ,Pagination , Navigation]}
                    autoplay={{ delay: 4000 }}
                >
                    {image.map((imageUrl, index) => (
                        <SwiperSlide key={index} className='swiper-slider-projects'>
                        <div className="slide-card-project mx-auto">
                            <img src={imageUrl} alt="" className='img_carousel_project' />
                        </div>
                        </SwiperSlide>
                    ))}
                    
                    <div className="slider-controler_projects">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div>
        
    </>
           
  );
}

export default Card;