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
      <Card sx={{height: "100vh", borderRadius: "15px", width: "50%"}}>
        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          <Paper sx={{ marginBottom: 2, height: "30vh", display: "flex", justifyContent: "space-between", padding: "10px" }} elevation={3}>
            <Paper elevation={3}></Paper>
            <Paper elevation={3} sx={{width: "20%"}}></Paper>
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