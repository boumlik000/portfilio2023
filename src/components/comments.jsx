import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import "../styles/comment.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {MdOutlineNavigateNext,MdOutlineNavigateBefore} from 'react-icons/md';

// Initialize Swiper core components
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Comment({ galleryComments } ) {

  

  return (
    <div className="comments">
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      spaceBetween={30}
      slidesPerView={'auto'}
      coverflowEffect={
        {
          rotate:0,
          stretch:0,
          depth:100,
          modifier:2.5
        }
      }
      navigation={{
        nextEl:'.next',
        prevEl:'.prev',
        clickable:true,
      }}
      className='swiper-container2'
      
      pagination={{el:'.swiper-pagination',clickable: true}}
      modules={[EffectCoverflow ,Pagination , Navigation]}
      autoplay={{ delay: 4000 }}
    >
     {galleryComments.map(comment => (
          <SwiperSlide key={comment.id} className='swiper4'>
            <div className="slide-card my-3">
              <div className="circle-image">
                <img src={comment.image[0]} alt="Slide" />
              </div>
              <div className="slide-content">
                <h3 className="my-4 text-center">{comment.title}</h3>
                <p className='description'>{comment.description}</p>
              </div>
            </div>
          </SwiperSlide>
      ))}

      <div className="slider-controler">
        <div className=" slider-arrow">
          <span className="icons_comment prev">
            <MdOutlineNavigateBefore />
          </span>
          <span className="icons_comment next">
            <MdOutlineNavigateNext />
          </span>
        </div>
        {/* <div className=" slider-arrow">
        </div> */}
      </div>


      </Swiper>
     
    </div>
  );
}

export default Comment;