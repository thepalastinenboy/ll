import ubungs from "../../data/ubungs.json";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GermanLanguagePractice = () => {
  const { slug } = useParams();
  const practiceData = ubungs.practices.find((practice) => practice.slug === slug);

  if (!practiceData) {
    return <div>Practice not found.</div>;
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, currentQuestion]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < practiceData.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const currentQuestionData = practiceData.questions[currentQuestion] || {};

  return (
    <div className="practice-container">
      {showScore ? (
        <div>
          You scored {score} out of {practiceData.questions.length}.
        </div>
      ) : (
        <>
          <div className="practice-header">{practiceData.name}</div>
          <div className="practice-question-section">
            <div className="practice-question-count">
              <span>Question {currentQuestion + 1}</span>/
              {practiceData.questions.length}
            </div>
            <div className="practice-question-text">
              {currentQuestionData.sentence?.replace(
                "___",
                <input type='text' />
              )}
            </div>
          </div>
          <div className="practice-answer-section">
            {currentQuestionData.answerOptions?.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};


export default GermanLanguagePractice;
