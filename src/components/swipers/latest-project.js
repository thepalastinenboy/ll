import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const LatestProjectsSwiper = () => {
  const gradientThemes = [
    "bg-gradient-red",
    "bg-gradient-blue",
    "bg-gradient-teal",
    "bg-gradient-violet"
  ];
  
  const getRandomClass = (() => {
    // shuffle the gradientThemes array
    const shuffledThemes = gradientThemes.sort(() => Math.random() - 0.5);
  
    // initialize a counter to keep track of used themes
    let counter = 0;
  
    return () => {
      // if all themes have been used once, reset the counter and shuffle the array again
      if (counter === gradientThemes.length) {
        counter = 0;
        shuffledThemes.sort(() => Math.random() - 0.5);
      }
  
      // return the next unused theme and increment the counter
      const theme = shuffledThemes[counter];
      counter++;
      return theme;
    }
  })();
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="b2-block">
      <div className="b2-block-title display-flex align-items-center justify-content-space-between">
        <div>
          <div className="block-title-medium no-margin block-title text-semibold">
            Übungen
          </div>
          <div className="b2-opacity block-title no-margin b2-block-subtitle">
            Etwas bla bla bla
          </div>
        </div>
        <div className="b2-badge">
          <Link to="uebungen" className="badge bg-color-faqehgreen text-color-black">
            Alle ansehen
          </Link>
        </div>
      </div>
      <div className="b2-block-content">
        <div className="authors-card">
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
                slidesPerView: "2.1",
              },
              400: {
                slidesPerView: "2.5",
              },
              768: {
                slidesPerView: "4.5",
              },
              1024: {
                slidesPerView: "5.5",
              },
              600: {
                slidesPerView: "3.2",
              },
              240: {
                slidesPerView: "1.1",
              },
              834: {
                slidesPerView: "4.5",
              },
              1920: {
                slidesPerView: "6.3",
              },
              360: {
                slidesPerView: "2.1",
              },
              576: {
                slidesPerView: "3.2",
              },
            }}
            modules={[Navigation]}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className="author-card">
                <div
                  className={`author-card-img  margin-bottom padding-half ${getRandomClass()}`}
                >
                  <div className="post-author">
                    <div className="post-author-infos">
                      <span className="post-author-name display-block text-semibold">
                        <Link to="/ubung/partiyip-i">Partizip I Übung</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="author-card">
                <div
                  className={`author-card-img  margin-bottom padding-half ${getRandomClass()}`}
                >
                  <div className="post-author">
                    <div className="post-author-infos">
                      <span className="post-author-name display-block text-semibold">
                      <Link to="/ubung/zweiteilige-konnektoren">Zweiteilige Konnektoren Übung</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="author-card">
                <div
                  className={`author-card-img  margin-bottom padding-half ${getRandomClass()}`}
                >
                  <div className="post-author">
                    <div className="post-author-infos">
                      <span className="post-author-name display-block text-semibold">
                      <Link to="/ubung/verben-mit-präpositionen">Verben mit Präpositionen Übung</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="author-card">
                <div
                  className={`author-card-img  margin-bottom padding-half ${getRandomClass()}`}
                >
                  <div className="post-author">
                    <div className="post-author-infos">
                      <span className="post-author-name display-block text-semibold">
                      <Link to="/ubung/practice-2">Übung 2</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LatestProjectsSwiper;
