import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Quiz.css";
import { Typography } from "@mui/material";

const QuizContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
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
  const [quiz, setQuiz] = useState({});
  const [loading, setLoading] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const toggleQuiz = () => {
    setIsOpen(!isOpen);
    setTimer(10);
    setTimeUp(false);
    setAnsweredCorrectly(false);
    if (!isOpen) {
      handleQuiz();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleQuiz = () => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const json_data = JSON.stringify({
          action: "get_quiz",
          timestamp: Date.now() / 1000,
        });
        const response = await fetch("http://10.65.74.230:5001/create_quiz", {
          method: "POST",
          body: json_data,
        });
        if (response.ok) {
          const res = await response.json();
          const { response: answer } = res;
          console.log(answer);
          setQuiz(answer);
        }
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  };

  const checkAns = (selectedChoice) => {
    console.log(selectedChoice, quiz.correctAns)
    if (selectedChoice === quiz.correctAns.charAt(0)) {
      setAnsweredCorrectly(true);
      console.log("That's right");
    } else {
      setAnsweredCorrectly(false);
      console.log("Wrong!");
    }
    setTimer(0);
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
      {loading ? (
        <>
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "9999",
              color: "black",
              fontSize: "25px",
            }}
          >
            Be Ready, 10 seconds count down!
          </Typography>
        </>
      ) : (
        isOpen && (
          <ModalContent>
            <div className="question">
              <div className="question-section">
                <h2>Quiz time!</h2>
                <div className="question-text">{quiz.question}</div>
                {timeUp ? (
                  <Timer>Time's up</Timer>
                ) : (
                  <Timer>{formatTime(timer)}</Timer>
                )}
                {
                  answeredCorrectly && <div style={{ color: 'green' }}>That's a correct answer!!!</div>
                }
              </div>
              <div className="answer-section">
                <button
                  onClick={() => checkAns(quiz.choices[0].charAt(0))}
                  disabled={timeUp || answeredCorrectly}
                >
                  {quiz.choices[0]}
                </button>
                <button
                  onClick={() => checkAns(quiz.choices[1].charAt(0))}
                  disabled={timeUp || answeredCorrectly}
                >
                  {quiz.choices[1]}
                </button>
                <button
                  onClick={() => checkAns(quiz.choices[2].charAt(0))}
                  disabled={timeUp || answeredCorrectly}
                >
                  {quiz.choices[2]}
                </button>
                <button
                  onClick={() => checkAns(quiz.choices[3].charAt(0))}
                  disabled={timeUp || answeredCorrectly}
                >
                  {quiz.choices[3]}
                </button>
              </div>
            </div>
          </ModalContent>
        )
      )}
    </>
  );
};

export default Quiz;
