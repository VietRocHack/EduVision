import React from "react";
import Student from "./pages/Student.js";
import Teacher from "./pages/Teacher.js";
import Home from "./pages/Home.js";
import { Routes, Route } from "react-router-dom";
import ChatBot from "./components/Chat.js";
import Quiz from "./components/Quiz.js";
import CreateMeeting from "./pages/CreateMeeting.js";
import JoinMeeting from "./pages/JoinMeeting.js";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = "https://pititobfoebuuxznzusu.supabase.co"
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdGl0b2Jmb2VidXV4em56dXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4NDc2OTgsImV4cCI6MjAyNzQyMzY5OH0.kdou62ln6MeOYdUdvo48J7H1LUB9vrUbMbqKS0e5WHg"
export const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/teacher" element={<Teacher />}/>
      <Route path="/chatbot" element={<ChatBot />}/>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path="/createmeeting" element={<CreateMeeting/>}/>
      <Route path="/joinmeeting" element={<JoinMeeting/>}/>
    </Routes>

  );
}

export default App;
