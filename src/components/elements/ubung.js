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
  const { id } = useParams(); // Extract the `id` parameter from the URL
  const [practices, setPractices] = useState([]); // Store all practices
  const [isLoading, setIsLoading] = useState(true);
  const practiceData = practices.find((practice) => practice.id === parseInt(id)); // Match by `id`

  // Fetch practices data
  useEffect(() => {
    fetch("https://wh467262.ispot.cc/note-website-backend/api/practices/practices/")
      .then((response) => response.json())
      .then((data) => {
        setPractices(data); // Store all practices
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching practices:", error);
        setIsLoading(false);
      });
  }, []);

  // State for the current question and progress
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0); // Progress state
  const [isSavedForLater, setIsSavedForLater] = useState(false); // Saved state

  // Check if the practice is already completed or saved
  useEffect(() => {
    if (practiceData) {
      const storedCompletedPractices =
        JSON.parse(localStorage.getItem("completedPractices")) || [];
      setIsCompleted(storedCompletedPractices.includes(practiceData.id));

      const storedSavedPractices =
        JSON.parse(localStorage.getItem("savedPractices")) || [];
      setIsSavedForLater(storedSavedPractices.includes(practiceData.id));
    }
  }, [practiceData]);

  // Save completed practice to localStorage
  useEffect(() => {
    if (practiceData && isCompleted) {
      const storedCompletedPractices =
        JSON.parse(localStorage.getItem("completedPractices")) || [];
      if (!storedCompletedPractices.includes(practiceData.id)) {
        localStorage.setItem(
          "completedPractices",
          JSON.stringify([...storedCompletedPractices, practiceData.id])
        );
      }
    }
  }, [isCompleted, practiceData]);

  // Handle answer click
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, currentQuestion]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < practiceData.questions.length) {
      setCurrentQuestion(nextQuestion);
      setProgress((nextQuestion / practiceData.questions.length) * 100);
    } else {
      setShowScore(true);
      setIsCompleted(true);
    }
  };

  // Handle "Remake Practice" button
  const handleRemakePracticeClick = () => {
    setShowScore(false);
    setScore(0);
    setIncorrectAnswers([]);
    setCurrentQuestion(0);
    setIsCompleted(false);
    setProgress(0);
  };

  // Handle "Save for Later" button
  const handleSaveForLaterClick = () => {
    const storedSavedPractices =
      JSON.parse(localStorage.getItem("savedPractices")) || [];
    if (!isSavedForLater) {
      localStorage.setItem(
        "savedPractices",
        JSON.stringify([...storedSavedPractices, practiceData.id])
      );
      setIsSavedForLater(true);
    } else {
      const updatedSavedPractices = storedSavedPractices.filter(
        (pid) => pid !== practiceData.id
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
      const currentAnswer = practiceData.questions[currentQuestion];
      if (currentAnswer.answerOptions[index].isCorrect) {
        return "an-correct"; // Correct answer
      } else if (
        incorrectAnswers.includes(currentQuestion) &&
        !currentAnswer.answerOptions[index].isCorrect
      ) {
        return "an-incorrect"; // Incorrect answer
      }
    }
    return ""; // Default class
  };

  // Render loading state
  if (isLoading) {
    return (
      <BasicLayout headerTop>
        <PreloaderContent />
      </BasicLayout>
    );
  }

  // Render error state
  if (!practiceData) {
    return (
      <BasicLayout headerTop>
        <div className="navbar navbar-transparent">
          <div className="navbar-bg" />
          <div className="navbar-inner">
            <div className="left">
              <BackButton />
            </div>
            <div className="title title-navbar-transparent">Keine Übung gefunden</div>
          </div>
        </div>
        <div className="b2-block no-border">
          <div className="b2-block-content">
            <div>Die angeforderte Übung wurde nicht gefunden.</div>
          </div>
        </div>
      </BasicLayout>
    );
  }

  // Render the practice
  return (
    <BasicLayout headerTop>
      <Helmet>
        <title>{`${practiceData.title} Übung - B2 Lernen`}</title>
        <meta name="keywords" content={`${practiceData.title}, Übung, Deutsch, B2 Lernen`} />
      </Helmet>
      <div className="navbar navbar-transparent">
        <div className="navbar-bg" />
        <div className="navbar-inner">
          <div className="left">
            <BackButton />
          </div>
          <div className="title title-navbar-transparent">{practiceData.title}</div>
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
          {showScore ? (
            <div className="b2-block no-border">
              <div className="b2-block-content">
                <div className="list-co-or-wr">
                  <h3 className="margin-bottom">
                    Du hast <b>{score}</b> von <b>{practiceData.questions.length}</b> Punkten erreicht.
                  </h3>
                  {practiceData.questions.map((question, index) => (
                    <div className="margin-bottom" key={index}>
                      <div className="display-flex align-items-center justify-content-space-between no-border">
                        <div className="list-item-seved display-flex align-items-center">
                          <div className="post-author display-flex align-items-center">
                            <span className="post-author-name display-block">
                              {question.text}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="answer-text text-semibold">
                        Richtige Antwort:{" "}
                        <span className="an-correct">
                          {
                            question.answers.find((a) => a.is_correct).text
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
                  {practiceData.questions[currentQuestion].text}
                </div>
              </div>
              <div className="practice-answer-section">
                {practiceData.questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(answer.is_correct)}
                    className={getAnswerClass(index)} // Use getAnswerClass here
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </BasicLayout>
  );
};

export default GermanLanguagePractice;