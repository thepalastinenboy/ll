import React, { useState, useEffect } from 'react';
import { BasicLayout } from "../layouts/basicLayout";
import { HeaderTop } from "../components";
import data from './data.json';
import './Wortschatz.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiOutlineRedo } from 'react-icons/ai';
import { BackButton } from "../components/header/backbutton";

const Wortschatz = () => {
    const [slideData, setSlideData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideNumber, setSlideNumber] = useState(1);
    const [targetIndex, setTargetIndex] = useState('');
    const [isFirstIndex, setIsFirstIndex] = useState(true);
  
    useEffect(() => {
      setSlideData(Object.entries(data));
      const savedIndex = localStorage.getItem('currentIndex');
      if (savedIndex !== null) {
        setCurrentIndex(parseInt(savedIndex));
      }
      const savedNumber = localStorage.getItem('slideNumber');
      if (savedNumber !== null) {
        setSlideNumber(parseInt(savedNumber));
      }
    }, []);
  
    useEffect(() => {
      setIsFirstIndex(currentIndex === 0);
    }, [currentIndex]);
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slideData.length - 1 : prevIndex - 1));
      localStorage.setItem('currentIndex', currentIndex - 1);
      setSlideNumber((prevNumber) => prevNumber - 1);
      localStorage.setItem('slideNumber', slideNumber - 1);
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slideData.length - 1 ? 0 : prevIndex + 1));
      localStorage.setItem('currentIndex', currentIndex + 1);
      setSlideNumber((prevNumber) => prevNumber + 1);
      localStorage.setItem('slideNumber', slideNumber + 1);
    };
  
    const handleResetClick = () => {
      setCurrentIndex(0);
      setSlideNumber(1);
      localStorage.setItem('currentIndex', 0);
      localStorage.setItem('slideNumber', 1);
    };
  
    const handleGoToIndexClick = () => {
      const index = parseInt(targetIndex);
      if (index >= 1 && index <= slideData.length) {
        setCurrentIndex(index - 1);
        setSlideNumber(index);
        localStorage.setItem('currentIndex', index - 1);
        localStorage.setItem('slideNumber', index);
        setTargetIndex('');
      }
    };
  
    const handleTargetIndexChange = (event) => {
      setTargetIndex(event.target.value);
    };

  return (
    <BasicLayout>
    <div className="page page-home page-current">
      <div className="page-content">
      <div class="navbar navbar-transparent">
      <div class="navbar-bg"></div>
      <div class="navbar-inner">
        <div class="left">
          <BackButton />
        </div>
        <div class="title title-navbar-transparent">Wortschatz Verben</div>
      </div>
    </div>
        <div class="newsman-block no-border">


    <div className="wortschatz-v data-display">
      {slideData.length > 0 && (
        <div className="wortschatz-v-item data-item single-post-content">
          <h3 className="slide-number">{slideNumber}</h3>
          <div className="block-title-medium no-margin block-title text-semibold">{slideData[currentIndex][0]}</div>
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
        </div>
      </div>
    </BasicLayout>
  );
};

export default Wortschatz;