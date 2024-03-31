import React from 'react';
import { Card, Stack, Paper } from "@mui/material";
import Chat from '../components/Chat';
import Quiz from '../components/Quiz';
import backgroundImage from "../assets/banner-bg.png";

const Student = () => {
  return (
    
    <>
      <Stack
      direction="row" 
      spacing={4}
      sx={{
        backgroundColor: "black",
        backgroundImage: `url(${backgroundImage})`,
        justifyContent: "center",
        padding: "50px"
      }}
    >
      <Card sx={{height: "100%", borderRadius: "15px", width: "50%"}}>
        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          <Paper elevation={3} sx={{height: "100%", display: "flex", alignItems: "center", textAlign: "center"}}>
            0:00 - 0:10 
          </Paper>
          <Paper sx={{ marginBottom: 2, display: "flex", justifyContent: "space-between", padding: "10px", fontSize: "20px" }} elevation={3}>
            Introduction to the concept of gazing and computer vision.
            <br/>
            Explanation of how these technologies intersect and complement each other.
          </Paper>
        </Stack>

        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          <Paper elevation={3} sx={{height: "100%", display: "flex", alignItems: "center", textAlign: "center"}}>
            0:10 - 0:20
          </Paper>
          <Paper sx={{ marginBottom: 2,  display: "flex", justifyContent: "space-between", padding: "10px", fontSize: "20px" }} elevation={3}>
            Discussion on the role of computer vision in gazing applications.
            <br/>
            Examples of how computer vision enhances gazing systems for improved accuracy and functionality.
          </Paper>
        </Stack>

        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          <Paper elevation={3} sx={{height: "100%", display: "flex", alignItems: "center", textAlign: "center"}}>
            0:20 - 0:30 
          </Paper>
          <Paper sx={{ marginBottom: 2, height: "15vh", display: "flex", justifyContent: "space-between", padding: "10px", fontSize: "20px" }} elevation={3}>
            Explanation of the significance of gazing in computer vision.
            <br/>
            How human gaze tracking can enhance computer vision algorithms for better understanding of user behavior.
          </Paper>
        </Stack>

        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          <Paper elevation={3} sx={{height: "100%", display: "flex", alignItems: "center", textAlign: "center"}}>
            0:10 - 0:20 
          </Paper>
          <Paper sx={{ marginBottom: 2, height: "15vh", display: "flex", justifyContent: "space-between", padding: "10px", fontSize: "20px" }} elevation={3}>
            Insights into recent advancements in gazing and computer vision technologies.
            <br/>
            Discussion on challenges faced in integrating these technologies and ongoing research efforts to overcome them.
          </Paper>
        </Stack>

        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          <Paper elevation={3} sx={{height: "100%", display: "flex", alignItems: "center", textAlign: "center"}}>
            0:10 - 0:20 
          </Paper>
          <Paper sx={{ marginBottom: 2, height: "15vh", display: "flex", justifyContent: "space-between", padding: "10px", fontSize: "20px" }} elevation={3}>
            Overview of the ethical considerations surrounding the use of gazing and computer vision technologies.
            <br/>
            Discussion on privacy concerns, data security, and potential biases in algorithmic decision-making.
          </Paper>
        </Stack>
      </Card>

      <Card sx={{height: "100vh", borderRadius: "15px", width: "40%", backgroundColor: "lightblue", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Chat />
      </Card>
      <Quiz />
      
    </Stack>
    
    </>
  )
}

export default Student