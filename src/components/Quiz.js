import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Quiz.css";

const QuizContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 100px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #add8e6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999;
`;

const QuizIcon = styled.span`
  font-size: 24px;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 9999;
`;

const Timer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 18px;
`;

const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(10);
  const [timeUp, setTimeUp] = useState(false);

  const toggleQuiz = () => {
    setIsOpen(!isOpen);
    setTimer(10);
    setTimeUp(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    let interval;
    if (isOpen && timer >= 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            setTimeUp(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isOpen, timer]);

  return (
    <>
      <QuizContainer onClick={toggleQuiz}>
        <QuizIcon>❔</QuizIcon>
      </QuizContainer>
      {isOpen && (
        <ModalContent>
          <div className="question">
            <div className="question-section">
              <h2>Quiz time!</h2>
              <div className="question-text"> Question here</div>
              {timeUp ? <Timer>Time's up</Timer> : <Timer>{formatTime(timer)}</Timer>}
            </div>
            <div className="answer-section">
              <button>a</button>
              <button>Answer 2</button>
              <button>Answer 3</button>
            </div>
          </div>
        </ModalContent>
      )}
    </>
  );
};

export default Quiz;
