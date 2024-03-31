import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Quiz.css";
import { Typography } from "@mui/material";

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

const Container = styled.div`
  position: relative;
`;

const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  z-index: 9998; /* Make sure this is below the modal */
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.8);;
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

const AnswerButton = styled.button`
  background-color: ${({ answeredCorrectly, correct }) =>
    answeredCorrectly ? (correct ? "lightgreen" : "orange") : "inherit"};
`;

const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(10);
  const [timeUp, setTimeUp] = useState(false);
  const [quiz, setQuiz] = useState({});
  const [loading, setLoading] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [answeredWrong, setAnsweredWrong] = useState(false)

  const toggleQuiz = () => {
    setIsOpen(!isOpen);
    setTimer(10);
    setTimeUp(false);
    setAnsweredCorrectly(false);
    setAnsweredWrong(false);
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
        const response = await fetch(
          "https://9c4a-192-31-236-2.ngrok-free.app/create_quiz",
          {
            method: "POST",
            body: json_data,
          }
        );
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
    console.log(selectedChoice, quiz.correctAns);
    if (selectedChoice === quiz.correctAns.charAt(0)) {
      setAnsweredCorrectly(true);
      console.log("That's right");
    } else {
      setAnsweredWrong(true);
      setAnsweredCorrectly(true)
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
          {/* <Typography
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
            <BlurBackground />
            <div style={{backgroundColor: "white", padding: "25px", border: "1px solid black"}}>
              Be Ready, 10 seconds count down!
            </div>
          </Typography> */}
          <div style={{ position: "relative" }}>
            <BlurBackground />
            <div style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "25px", border: "1px solid black", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "9999", color: "black", borderRadius: "10px" }}>
              Be Ready, counting down till the question!
            </div>
          </div>
        </>
      ) : (
        isOpen && (
          <Container>
            <BlurBackground />
            <ModalContent>
            
                <div className="question">
                  <div style={{marginLeft: "20px"}}>
                  <div className="question-section">       
                    <h2 style={{ marginBottom: "10px", color: "black", fontSize: "40px" }}>Quiz time!</h2>
                    <div className="question-text">{quiz.question}</div>
    
                    {answeredWrong && (
                      <div style={{ color: "red" }}>
                        Wrong!!!
                      </div>
                    )}
                  </div>
                  <div className="answer-section">
                    {quiz.choices.map((choice, index) => (
                      <AnswerButton
                        key={index}
                        onClick={() => checkAns(choice.charAt(0))}
                        disabled={timeUp || answeredCorrectly}
                        answeredCorrectly={answeredCorrectly}
                        correct={choice.charAt(0) === quiz.correctAns.charAt(0)}
                      >
                        {choice}
                      </AnswerButton>
                    ))}
                  </div>
                  {timeUp ? (
                    <Timer style={{ marginLeft: "250px", marginBottom: "100px", color: "black", fontSize: "35px" }}>Time's up</Timer>
                  ) : (
                    <Timer style={{ marginLeft: "265px", marginBottom: "100px", color: "black", fontSize: "35px" }}>{formatTime(timer)}</Timer>
                  )}
                  </div>
                </div>
            </ModalContent>
          </Container>
        )
      )}
    </>
  );
};

export default Quiz;
