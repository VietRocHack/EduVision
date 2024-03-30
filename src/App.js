import React from "react";
import Student from "./pages/Student.js";
import Teacher from "./pages/Teacher.js";
import Home from "./pages/Home.js";
import { Routes, Route } from "react-router-dom";
import ChatBot from "./components/Chat.js";
import Quiz from "./components/Quiz.js";
import CreateMeeting from "./pages/CreateMeeting.js";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/teacher" element={<Teacher />}/>
      <Route path="/chatbot" element={<ChatBot />}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path="/joinmeeting" element={<CreateMeeting/>}/>
    </Routes>

  );
}

export default App;
