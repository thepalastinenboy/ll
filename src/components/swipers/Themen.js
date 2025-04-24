import React, { useRef, useState, useEffect, useMemo } from "react";
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search");
  };

  const readableBackgrounds = [
    "#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9",
    "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9",
    "#DCEDC8", "#F0F4C3", "#FFF9C4", "#FFECB3", "#FFE0B2",
    "#FFCCBC", "#D7CCC8", "#F5F5F5", "#CFD8DC", "#E0F7FA"
  ];

  const [swiperRef, setSwiperRef] = useState(null);
  const [mainSubjects, setMainSubjects] = useState([]); // State to store main subjects
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const subjectColors = useMemo(() => {
    const existingColors = JSON.parse(localStorage.getItem("subjectColors") || "{}");
    const updatedColors = { ...existingColors };
  
    let usedColors = new Set(Object.values(existingColors));
    const availableColors = readableBackgrounds.filter(c => !usedColors.has(c));
  
    mainSubjects.forEach((subject) => {
      if (!updatedColors[subject.id]) {
        const randomColor =
          availableColors.length > 0
            ? availableColors.splice(Math.floor(Math.random() * availableColors.length), 1)[0]
            : readableBackgrounds[Math.floor(Math.random() * readableBackgrounds.length)];
        updatedColors[subject.id] = randomColor;
      }
    });
  
    localStorage.setItem("subjectColors", JSON.stringify(updatedColors));
    return updatedColors;
  }, [mainSubjects]);
  

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
            Alle FIAE Themen
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
              spaceBetween={10}
              navigation={{
                nextEl: ".next_s",
                prevEl: ".prev_s",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2.3,
                },
                576: {
                  slidesPerView: 3.2,
                },
                768: {
                  slidesPerView: 3.2,
                },
                1024: {
                  slidesPerView: 3.4,
                },
                1920: {
                  slidesPerView: 4.3,
                },
              }}
              modules={[Navigation]}
              className="swiper-container cards--12"
            >
              {mainSubjects.map((subject) => (
                <SwiperSlide key={subject.id}>
                  <div className="tttt" style={{ backgroundColor: subjectColors[subject.id] }}>
                    <div className="margin-bottom">
                      <div className="display-flex align-items-center justify-content-space-left">
                        <div className="post-author-infos">
                          <span className="post-author-name display-block text-semibold">
                            <Link
                              to={`/category/${subject.id}`}
                              className=""
                              style={{ color: "black" }} // ensure black text
                            >
                              {subject.name}
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
