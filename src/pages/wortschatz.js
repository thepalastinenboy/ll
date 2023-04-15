import React, { useState, useEffect } from "react";
import { BasicLayout } from "../layouts/basicLayout";
import "./Wortschatz.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BackButton } from "../components/header/backbutton";
import { Loader } from "../components";
import { GiSpeaker } from "react-icons/gi";
import { Helmet } from "react-helmet";

export const Wortschatz = ({ data, storageKey }) => {
  const [slideData, setSlideData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideNumber, setSlideNumber] = useState(1);
  const [targetIndex, setTargetIndex] = useState("");
  const [isFirstIndex, setIsFirstIndex] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState(-1);

  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const onReady = () => {
      console.log("ResponsiveVoice is ready");
    };
    const onStart = () => {
      setIsSpeaking(true);
    };
    const onEnd = () => {
      setIsSpeaking(false);
    };

    if (window.responsiveVoice) {
      window.responsiveVoice.OnReady = onReady;
      window.responsiveVoice.OnStart = onStart;
      window.responsiveVoice.OnEnd = onEnd;
    }

    return () => {
      if (window.responsiveVoice) {
        window.responsiveVoice.cancel();
        window.responsiveVoice.OnReady = null;
        window.responsiveVoice.OnStart = null;
        window.responsiveVoice.OnEnd = null;
      }
    };
  }, []);

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

  const speak = (text, index) => {
    if (window.responsiveVoice) {
      window.responsiveVoice.speak(text, "Deutsch Female", {
        onstart: () => {
          setSpeakingIndex(index);
        },
        onend: () => {
          setSpeakingIndex(-1);
        },
      });
    } else {
      console.error("ResponsiveVoice is not loaded");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BasicLayout headerTop>
          <div className="navbar navbar-transparent">
            <div className="navbar-bg"></div>
            <div className="navbar-inner">
              <div className="left">
                <BackButton />
              </div>

              <div className="title title-navbar-transparent">{storageKey}</div>
              <Helmet>
                <title>{`${storageKey} - B2 Lernen`}</title>
                <meta name="keywords" content={`Wortschatz, ${storageKey},deutsch ,b2 lernen`} />
              </Helmet>
              <div className="right save-b">
                <div className="link">
                  <span>
                    {slideNumber}/{slideData.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="b2-block no-border">
            <div className="wortschatz-v data-display">
              {slideData.length > 0 && (
                <div className="item-content single-post-content">
                  <div className="item-inner">
                    <div className="item-title-row margin-bottom">
                      <div className="item-title wortschatz-w">
                        {slideData[currentIndex][0]}
                      </div>
                      <div className="item-after">
                        <a onClick={() => speak(slideData[currentIndex][0], 0)}>
                          {speakingIndex === 0 ? (
                            <span>
                              <GiSpeaker fill="crimson" size="24" />
                            </span>
                          ) : (
                            <GiSpeaker size="24" />
                          )}
                        </a>
                      </div>
                    </div>
                    <div
                      style={{ fontWeight: 600, borderRadius: "unset" }}
                      className="badge bg-color-faqehgreen text-color-black margin-bottom"
                    >
                      Beispiel:
                    </div>
                    <div className="item-text">
                      <div className="margin-bottom">
                        {slideData[currentIndex][1]}
                      </div>
                      <div className="item-after">
                        <a onClick={() => speak(slideData[currentIndex][1], 1)}>
                          {speakingIndex === 1 ? (
                            <span>
                              <GiSpeaker fill="crimson" size="24" />
                            </span>
                          ) : (
                            <GiSpeaker size="24" />
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="button-container-nav">
                <div
                  onClick={handlePrevClick}
                  disabled={isFirstIndex}
                  style={{ marginRight: "4rem" }}
                >
                  <BsArrowLeft size="2em" />
                </div>
                <div onClick={handleNextClick}>
                  <BsArrowRight size="2em" />
                </div>
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
        </BasicLayout>
      )}
    </>
  );
};
