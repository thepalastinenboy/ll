import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BasicLayout } from "../../layouts/basicLayout";
import { BackButton } from "../header/backbutton";
import "./ubung.css";
import { CiBookmark } from "react-icons/ci";
import { FcBookmark } from "react-icons/fc";
import PreloaderContent from "./preloader-content";
import { Helmet } from "react-helmet";

const GermanLanguagePractice = () => {
  const { slug } = useParams();
  const [practices, setPractices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const practiceData = practices.find((practice) => practice.slug === slug);

  useEffect(() => {
    fetch("https://www.b2lernen.de/api/ubungs-api.php")
      .then((response) => response.json())
      .then((data) => {
        setPractices(data.practices);
        setIsLoading(false);
      });
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0); // Add progress state
  const [isSavedForLater, setIsSavedForLater] = useState(false); // Add state for saved for later

  useEffect(() => {
    if (practiceData) {
      const storedCompletedPractices =
        JSON.parse(localStorage.getItem("completedPractices")) || [];
      if (storedCompletedPractices.includes(practiceData.slug)) {
        setIsCompleted(true);
      }
      const storedSavedPractices =
        JSON.parse(localStorage.getItem("savedPractices")) || [];
      if (storedSavedPractices.includes(practiceData.slug)) {
        setIsSavedForLater(true);
      }
    }
  }, [practiceData]);

  useEffect(() => {
    if (practiceData) {
      const storedCompletedPractices =
        JSON.parse(localStorage.getItem("completedPractices")) || [];
      if (
        isCompleted &&
        !storedCompletedPractices.includes(practiceData.slug)
      ) {
        localStorage.setItem(
          "completedPractices",
          JSON.stringify([...storedCompletedPractices, practiceData.slug])
        );
      }
    }
  }, [isCompleted, practiceData]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, currentQuestion]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < practiceData.questions.length) {
      setCurrentQuestion(nextQuestion);
      setProgress((nextQuestion / practiceData.questions.length) * 100); // Update progress
    } else {
      setShowScore(true);
      setIsCompleted(true); // Mark practice as completed
    }
  };

  const handleRemakePracticeClick = () => {
    setShowScore(false);
    setScore(0);
    setIncorrectAnswers([]);
    setCurrentQuestion(0);
    setIsCompleted(false);
    setProgress(0); // Reset progress
  };

  const handleSaveForLaterClick = () => {
    const storedSavedPractices =
      JSON.parse(localStorage.getItem("savedPractices")) || [];
    if (!isSavedForLater) {
      // Add current practice to saved practices
      localStorage.setItem(
        "savedPractices",
        JSON.stringify([...storedSavedPractices, practiceData.slug])
      );
      setIsSavedForLater(true);
    } else {
      // Remove current practice from saved practices
      const updatedSavedPractices = storedSavedPractices.filter(
        (slug) => slug !== practiceData.slug
      );
      localStorage.setItem(
        "savedPractices",
        JSON.stringify(updatedSavedPractices)
      );
      setIsSavedForLater(false);
    }
  };

  const getAnswerClass = (index) => {
    if (showScore) {
      if (practiceData.questions[currentQuestion].answerIndex === index) {
        return "an-correct";
      } else if (
        incorrectAnswers.includes(currentQuestion) &&
        practiceData.questions[currentQuestion].answerIndex !== index &&
        currentQuestion === incorrectAnswers.indexOf(index)
      ) {
        return "an-incorrect";
      }
    }
    return "";
  };

  if (!practiceData) {
    return (
      <BasicLayout headerTop>
        <div className="navbar navbar-transparent">
          <div className="navbar-bg" />
          <div className="navbar-inner">
            <div className="left">
              <BackButton />
            </div>
            <div className="title title-navbar-transparent">
              {practiceData && practiceData.name}
            </div>
            <div className="right save-b">
              <button className="button" onClick={practiceData &&  handleSaveForLaterClick}>
                { isSavedForLater ? (
                  <FcBookmark size="2em" color="#38ccc7" className="saved-a" />
                ) : (
                  <CiBookmark size="2em" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="b2-block no-border">
          <div className="b2-block-content">
            {isLoading ? <PreloaderContent /> : <div>Kein Übung gefunden</div> }
          </div>
        </div>
      </BasicLayout>
    );
  }
  return (
    <BasicLayout headerTop>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg" />
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">
            {practiceData && practiceData.name}
          </div>
          <Helmet>
                <title>{`${practiceData && practiceData.name} Übung - B2 Lernen`}</title>
                <meta name="keywords" content={`${practiceData && practiceData.name} Übung,deutsch ,b2 lernen`} />
              </Helmet>
          <div className="right save-b">
            <button className="button" onClick={handleSaveForLaterClick}>
              {isSavedForLater ? (
                <FcBookmark size="2em" color="#38ccc7" className="saved-a" />
              ) : (
                <CiBookmark size="2em" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <PreloaderContent /> 
      ) : (
        <div className="b2-block">
          <div className="block-content">
            {/* {isCompleted && (
            <div className="practice-completed-message">
              You have completed this practice!
            </div>
          )} */}
            {showScore ? (
              <div className="b2-block no-border">
                <div className="b2-block-content">
                  <div className="list-co-or-wr">
                    <h3 className="margin-bottom ">
                      {" "}
                      Du hast von <b>{score}</b> von{" "}
                      <b>{practiceData.questions.length}</b> Punkten erreicht.
                    </h3>
                    {practiceData.questions.map((question, index) => (
                      <div className="margin-bottom" key={index}>
                        <div
                          className={`display-flex align-items-center justify-content-space-between no-border`}
                        >
                          <div className="list-item-seved display-flex align-items-center">
                            <div className="post-author display-flex align-items-center">
                              <div>
                                <span className="post-author-name display-block">
                                  {question.sentence}
                                </span>
                              </div>
                            </div>
                            <div className="b2-badge">
                              {/* {getAnswerClass(index)} */}
                            </div>
                          </div>
                        </div>
                        <div className="answer-text text-semibold">
                          Richtige Antwort:{" "}
                          <span className="an-correct">
                            {
                              question.answerOptions.find(
                                (option) => option.isCorrect
                              ).answerText
                            }
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="block block-strong block-outline-ios">
                      <div className="grid grid-cols-3 grid-gap">
                        <button
                          className="button button-tonal"
                          onClick={handleRemakePracticeClick}
                        >
                          Nochmal machen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="practice-question-section">
                  <div className="practice-progress-section">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="practice-question-text">
                    {practiceData.questions[currentQuestion].sentence}
                  </div>
                </div>
                <div className="practice-answer-section">
                  {practiceData.questions[currentQuestion] &&
                    practiceData.questions[currentQuestion].answerOptions.map(
                      (answerOption, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                          className={getAnswerClass(index)}
                        >
                          {answerOption.answerText}
                        </button>
                      )
                    )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </BasicLayout>
  );
};

export default GermanLanguagePractice;
