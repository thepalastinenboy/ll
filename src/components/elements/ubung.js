import ubungs from "../../data/ubungs.json";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BasicLayout } from "../../layouts/basicLayout";
import { BackButton } from "../header/backbutton";
import "./ubung.css";
import { CiBookmark } from "react-icons/ci";
import { FcBookmark } from "react-icons/fc";

const GermanLanguagePractice = () => {
  const { slug } = useParams();
  const practiceData = ubungs.practices.find(
    (practice) => practice.slug === slug
  );

  if (!practiceData) {
    return <div>Practice not found.</div>;
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0); // Add progress state
  const [isSavedForLater, setIsSavedForLater] = useState(false); // Add state for saved for later

  useEffect(() => {
    // Set isCompleted to true if the practice is marked as completed in local storage
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
  }, [practiceData.slug]);

  useEffect(() => {
    // Update local storage when isCompleted changes
    const storedCompletedPractices =
      JSON.parse(localStorage.getItem("completedPractices")) || [];
    if (isCompleted && !storedCompletedPractices.includes(practiceData.slug)) {
      localStorage.setItem(
        "completedPractices",
        JSON.stringify([...storedCompletedPractices, practiceData.slug])
      );
    }
  }, [isCompleted, practiceData.slug]);

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
        return "correct";
      } else if (incorrectAnswers.includes(currentQuestion)) {
        return practiceData.questions[currentQuestion].answerIndex === index
          ? "correct"
          : "incorrect";
      }
    }
    return "";
  };

  return (
    <BasicLayout>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg" />
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">
            {practiceData.name}
          </div>
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
      <div className="b2-block">
        <div className="block-content">
          {/* {isCompleted && (
            <div className="practice-completed-message">
              You have completed this practice!
            </div>
          )} */}
          {showScore ? (
            <div>
              Du hast von {score} von {practiceData.questions.length}Punkten erreicht.
              {practiceData.questions.map((question, index) => (
                <div
                  key={index}
                  className={`answer-section ${getAnswerClass(index)}`}
                >
                  <div className="question-text">{question.sentence}</div>
                  <div className="answer-text">
                    Correct answer:{" "}
                    {
                      question.answerOptions.find((option) => option.isCorrect)
                        .answerText
                    }
                  </div>
                </div>
              ))}
              <button
                className="remake-practice-button"
                onClick={handleRemakePracticeClick}
              >
                Remake Practice
              </button>
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
    </BasicLayout>
  );
};

export default GermanLanguagePractice;
