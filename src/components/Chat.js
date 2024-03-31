import React, { useState,useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import styled from "styled-components";

// Chatbot theme
const styleChatBot = {
  background: "#f5f8fb",
  backgroundColor: "lightblue",
  headerBgColor: "#693DB1",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#693DB1",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// // Styled chatbot container
// const ChatbotContainer = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   background-color: #ef6c00;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   z-index: 9999;
// `;

// const ChatbotIcon = styled.span`
//   color: white;
//   font-size: 24px;
// `;

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
        { value: 1, label: "Hell yea", trigger: "4" },
        { value: 2, label: "Nah", trigger: "3" },
      ],
    },
    {
      id:"4",
      message: "What topic are you not sure about?",
      // trigger:"5",
    },
    // {
    //   id:"5",
    // },
    // {
    //   id: "6",
    //   message: () => topic,
    //   end: true,
    // },
    {
      id: "3",
      message: "Gud!",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={styleChatBot}>
      {/* <ChatbotContainer onClick={toggleChatbot}>
        <ChatbotIcon>💬</ChatbotIcon>
      </ChatbotContainer>
      {isOpen && <ChatBot steps={info} opened={isOpen} style={{ width: "90%", height: "90%" }} />} */}
      <ChatBot steps={info} opened={isOpen} style={{ width: "650px", height: "100vh" }} />
    </ThemeProvider>
    
  );
};

export default Chat;
