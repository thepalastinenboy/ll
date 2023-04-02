import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const LatestProjectsSwiper = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="newsman-block">
    <div className="newsman-block-title display-flex align-items-center justify-content-space-between">
      <div>
        <div className="block-title-medium no-margin block-title text-semibold">
          Popular Authors
        </div>
        <div className="newsman-opacity block-title no-margin newsman-block-subtitle">
          Read trending news
        </div>
      </div>
      <div className="newsman-badge">
        <a href="#" className="badge bg-color-white text-color-black">
          SEE ALL
        </a>
      </div>
    </div>
    <div class="newsman-block-content">
              <div class="authors-card">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={10}
          navigation={{
            nextEl: ".next_s",
            prevEl: ".prev_s",
          }}
          autoHeight={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              "slidesPerView": "2.1"
            },
            400: {
              "slidesPerView": "2.5"
            },
            768: {
              "slidesPerView": "4.5"
            },
            1024: {
              "slidesPerView": "5.5"
            },
            600: {
              "slidesPerView": "3.2"
            },
            240: {
              "slidesPerView": "1.1"
            },
            834: {
              "slidesPerView": "4.5"
            },
            1920: {
              "slidesPerView": "6.3"
            },
            360: {
              "slidesPerView": "2.1"
            },
            576: {
              "slidesPerView": "3.2"
            }
          }}
          modules={[Navigation]}
          className="swiper-container"
        >
          <SwiperSlide>
        
            <div className="author-card">
              <div
                className="author-card-img bg-color-deeppurple margin-bottom padding-half"
                style={{ background: "url(./img/user2.png)" }}
              >
                <div className="newsman-badge">
                  <a href="#" className="badge bg-color-white text-color-black">
                    FOLLOW ME
                  </a>
                </div>
              </div>
              <div className="post-author">
                <div className="post-author-infos">
                  <span className="post-author-name display-block text-semibold">
                    <a href="/profile/">Megan Stelan</a>
                  </span>
                  <span className="post-author-extra newsman-opacity">
                    Data Science lover
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
        
        <div className="author-card">
          <div
            className="author-card-img bg-color-deeppurple margin-bottom padding-half"
            style={{ background: "url(./img/user2.png)" }}
          >
            <div className="newsman-badge">
              <a href="#" className="badge bg-color-white text-color-black">
                FOLLOW ME
              </a>
            </div>
          </div>
          <div className="post-author">
            <div className="post-author-infos">
              <span className="post-author-name display-block text-semibold">
                <a href="/profile/">Megan Stelan</a>
              </span>
              <span className="post-author-extra newsman-opacity">
                Data Science lover
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>


      <SwiperSlide>
        
        <div className="author-card">
          <div
            className="author-card-img bg-color-deeppurple margin-bottom padding-half"
            style={{ background: "url(./img/user2.png)" }}
          >
            <div className="newsman-badge">
              <a href="#" className="badge bg-color-white text-color-black">
                FOLLOW ME
              </a>
            </div>
          </div>
          <div className="post-author">
            <div className="post-author-infos">
              <span className="post-author-name display-block text-semibold">
                <a href="/profile/">Megan Stelan</a>
              </span>
              <span className="post-author-extra newsman-opacity">
                Data Science lover
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
        </Swiper>
        </div></div>
      </div>
  );
};

export default LatestProjectsSwiper;




