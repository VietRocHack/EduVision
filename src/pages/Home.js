import React, { useState, useEffect, createRef } from 'react';
import { Typography, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/banner-bg.png";
import landingPageImage from "../assets/landing-page-picture.png";
import TrackVisibility from 'react-on-screen';
import { Col } from "react-bootstrap";
import "animate.css";
import "./Home.css";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Virtual Learning", "Instant Support", "Having Fun" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Box sx={{
        height: "100vh",
        alignContent: "center",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#5CBD95",
        backgroundImage: `url(${backgroundImage})`,
        
      }}>
        
        <Container sx={{width: "40%", padding: "60px", borderRadius: "30px", marginTop: "10%"}}>
          <Typography variant="h1" color="secondary" gutterBottom sx={{fontFamily: 'Georgia, serif', animation: "leftright 5s linear infinite"}}>
            EduVision
          </Typography>

          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Welcome to a new area of`}</h1>
                <h1>
                  <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Virtual Learning", "Instant Support", "Having Fun" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              }
            </TrackVisibility>
          </Col>

          <Box sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "50px",
          }}>
            <Link to="/student" style={{ textDecoration: 'none' }}>
              <button class="button-64" role="button"><span class="text">I am a Student</span></button>
            </Link>
          
            <Link to="/joinmeeting" style={{ textDecoration: 'none' }}>
              <button class="button-64" role="button"><span class="text">I am a Teacher</span></button>
            </Link>
          </Box>


        </Container>

        <Box sx={{backgroundImage: `url(${landingPageImage})`, width: "40%", animation: "updown 3s linear infinite"}}></Box>

    </Box>
  )
}

export default Home