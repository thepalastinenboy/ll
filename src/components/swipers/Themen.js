import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const ThemenSwiper = () => {
  const gradientThemes = [
    "bg-gradient-red",
    "bg-gradient-blue",
    "bg-gradient-teal",
    "bg-gradient-violet",
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search");
  };

  const getRandomClass = (() => {
    // Shuffle the gradientThemes array
    const shuffledThemes = gradientThemes.sort(() => Math.random() - 0.5);

    // Initialize a counter to keep track of used themes
    let counter = 0;

    return () => {
      // If all themes have been used once, reset the counter and shuffle the array again
      if (counter === gradientThemes.length) {
        counter = 0;
        shuffledThemes.sort(() => Math.random() - 0.5);
      }

      // Return the next unused theme and increment the counter
      const theme = shuffledThemes[counter];
      counter++;
      return theme;
    };
  })();

  const [swiperRef, setSwiperRef] = useState(null);
  const [mainSubjects, setMainSubjects] = useState([]); // State to store main subjects
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch main subjects from the API
  useEffect(() => {
    const fetchMainSubjects = async () => {
      try {
        const response = await fetch(
          "https://wh467262.ispot.cc/note-website-backend/api/subjects/main-subjects/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMainSubjects(data); // Store the fetched main subjects
      } catch (error) {
        console.error("Error fetching main subjects:", error);
      } finally {
        setIsLoading(false); // Update loading state
      }
    };

    fetchMainSubjects();
  }, []);

  return (
    <div className="b2-block">
      <div className="b2-block-title display-flex align-items-center justify-content-space-between">
        <div>
          <div className="block-title-medium no-margin block-title text-semibold">
            Themen
          </div>
          <div className="b2-opacity block-title no-margin b2-block-subtitle">
            Alle B2 Themen
          </div>
        </div>
        <div className="b2-badge">
          <Link
            to="/Kategorie-Liste"
            className="badge bg-color-faqehgreen text-color-black"
          >
            Alle
          </Link>
        </div>
      </div>
      <div className="b2-block-content">
        <div className="b2-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Suchen"
            className="input"
            onClick={handleClick}
          />
        </div>
        <div className="authors-card margin-top padding-top">
          {isLoading ? (
            <p>Loading...</p> // Display a loading message while fetching data
          ) : (
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
                  slidesPerView: "3.3",
                },
                400: {
                  slidesPerView: "3.5",
                },
                768: {
                  slidesPerView: "5.5",
                },
                1024: {
                  slidesPerView: "6.5",
                },
                600: {
                  slidesPerView: "3.2",
                },
                240: {
                  slidesPerView: "2.3",
                },
                834: {
                  slidesPerView: "4.5",
                },
                1920: {
                  slidesPerView: "6.3",
                },
                360: {
                  slidesPerView: "3.3",
                },
                576: {
                  slidesPerView: "4.2",
                },
              }}
              modules={[Navigation]}
              className="swiper-container"
            >
              {mainSubjects.map((subject) => (
                <SwiperSlide key={subject.id}>
                  <div className="">
                    <div
                      className={`margin-bottom`}
                    >
                      <div className="display-flex align-items-center justify-content-space-left">
                        <div className="post-author-infos">
                          <span className="post-author-name display-block text-semibold">
                            <Link
                              to={`/category/${subject.id}`} // Use subject slug for routing
                              className={``}
                            >
                              {subject.name} {/* Display the main subject name */}
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemenSwiper;