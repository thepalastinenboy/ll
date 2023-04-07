import React, { useState, useEffect } from "react";
import { BasicLayout } from "../layouts/basicLayout";
import { HeaderTop } from "../components";
import "./Wortschatz.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineRedo } from "react-icons/ai";
import { BackButton } from "../components/header/backbutton";

const Wortschatz = ({ data, storageKey }) => {
  const [slideData, setSlideData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideNumber, setSlideNumber] = useState(1);
  const [targetIndex, setTargetIndex] = useState("");
  const [isFirstIndex, setIsFirstIndex] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setSlideData(Object.entries(data));
    const savedIndex = localStorage.getItem(`${storageKey}_currentIndex`);
    if (savedIndex !== null) {
      setCurrentIndex(parseInt(savedIndex));
    }
    const savedNumber = localStorage.getItem(`${storageKey}_slideNumber`);
    if (savedNumber !== null) {
      setSlideNumber(parseInt(savedNumber));
    }
    setIsLoading(false);
  }, [data, storageKey]);

  useEffect(() => {
    if (!isFirstRender) {
      setIsFirstIndex(currentIndex === 0);
      localStorage.setItem(`${storageKey}_currentIndex`, currentIndex);
      localStorage.setItem(`${storageKey}_slideNumber`, slideNumber);
    } else {
      setIsFirstRender(false);
    }
  }, [currentIndex, slideNumber, storageKey]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideData.length - 1 : prevIndex - 1
    );
    setSlideNumber((prevNumber) => prevNumber - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
    );
    setSlideNumber((prevNumber) => prevNumber + 1);
  };

  const handleResetClick = () => {
    setCurrentIndex(0);
    setSlideNumber(1);
  };

  const handleGoToIndexClick = () => {
    const index = parseInt(targetIndex);
    if (index >= 1 && index <= slideData.length) {
      setCurrentIndex(index - 1);
      setSlideNumber(index);
      setTargetIndex("");
    }
  };

  const handleTargetIndexChange = (event) => {
    setTargetIndex(event.target.value);
  };

  return (
    <BasicLayout>
      {isLoading ? (
        <div
          className="loader-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div className="loader"></div>
        </div>
      ) : (
          <>
            <div className="navbar navbar-transparent">
              <div className="navbar-bg"></div>
              <div className="navbar-inner">
                <div className="left">
                  <BackButton />
                </div>
                <div className="title title-navbar-transparent">{storageKey}</div>
              </div>
            </div>
            <div className="b2-block no-border">
              <div className="wortschatz-v data-display">
                {slideData.length > 0 && (
                  <div className="wortschatz-v-item data-item single-post-content">
                    <h3 className="slide-number">{slideNumber}</h3>
                    <div className="wortschatz-w">
                      {slideData[currentIndex][0]}
                    </div>
                    <p>{slideData[currentIndex][1]}</p>
                  </div>
                )}
                <div className="button-container-nav">
                  <button onClick={handlePrevClick} disabled={isFirstIndex}>
                    <BsArrowLeft size="2em" />
                  </button>
                  <button onClick={handleNextClick}>
                    <BsArrowRight size="2em" />
                  </button>
                </div>
                {/* <button className="reset-button" onClick={handleResetClick}>
      <AiOutlineRedo  /> Reset
    </button>
    <div className="go-to-index-container">
      <input type="text" value={targetIndex} onChange={handleTargetIndexChange} placeholder="Go to slide #" />
      <button onClick={handleGoToIndexClick}>Go</button>
    </div> */}
              </div>
            </div>
            <div id="fix-f7"></div>
            </>
      )}
    </BasicLayout>
  );
};

export default Wortschatz;
