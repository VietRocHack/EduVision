import React, { useState,useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import styled from "styled-components";

// Chatbot theme
const styleChatBot = {
  background: "#f5f8fb",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// Styled chatbot container
const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ef6c00;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999;
`;

const ChatbotIcon = styled.span`
  color: white;
  font-size: 24px;
`;

const Chat = () => {
  const [topic, setTopic] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleAnswer = async () => {
      try {
        const json_data = JSON.stringify({
          action: "get-answer",
          timestamp: Date.now() / 1000,
        });
        const response = await fetch(" https://9c4a-192-31-236-2.ngrok-free.app/find_answer", {
          method: "POST",
          body: json_data,
        });
        if (response.ok) {
          const responseData = await response.json();
          const { response: answer } = responseData;
          console.log(typeof(answer));
          setTopic(answer);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    handleAnswer()
  },[]);

  const info = [
    {
      id: "1",
      message: "Do you have any questions?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Hell yea", trigger: "3" },
        { value: 2, label: "Nah", trigger: "4" },
      ],
    },
    {
      id: "3",
      message: () => topic,
      end: true,
    },
    {
      id: "4",
      message: "Gud!",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={styleChatBot}>
      <ChatbotContainer onClick={toggleChatbot}>
        <ChatbotIcon>💬</ChatbotIcon>
      </ChatbotContainer>
      {isOpen && <ChatBot steps={info} opened={isOpen} style={{ width: "100%", height: "100%" }} />}
    </ThemeProvider>
    
  );
};

export default Chat;
