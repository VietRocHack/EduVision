import React from 'react';
import { Typography, Grid, Button, Stack, Container } from "@mui/material";
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import backgroundImage from "../assets/banner-bg.png";
import graph from "../assets/graphs.png";

const Teacher = () => {
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
      <Card sx={{height: "70vh", borderRadius: "15px", width: "40%"}}>
        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          
          <Paper sx={{ marginBottom: 2, height: "20vh", padding: "10px", display: "flex", flexDirection: "column", fontFamily: 'Poppins, sans-serif', fontWeight: "500"}} elevation={3}>
            <Typography variant="h5" color="secondary" sx={{textAlign: "center"}}>CSC 172 - Data Structure and Algorithms</Typography>
            <Container sx={{display: "flex", flexDirection: "row", justifyContent: "space-around", padding: "30px"}}>
              <Card sx={{alignItems: "center", textAlign: "center", padding: "15px"}} elevation={6}>
                Class Attendace
                <br/>
                <Typography variant="h4" color="secondary" sx={{textAlign: "center"}}>32 / 45</Typography>
              </Card>
              <Card sx={{alignItems: "center", textAlign: "center", padding: "15px"}} elevation={6}>
                Concentration Rate
                <br/>
                <Typography variant="h4" color="secondary" sx={{textAlign: "center", color: "lightgreen"}}>High</Typography>
              </Card>
              <Button variant="outlined" color="error" sx={{width: "20%", "&:hover": {backgroundColor: "white", borderColor: "red", color: "red"}}}>
                End Class
              </Button>
            </Container>
          </Paper>

          <Paper sx={{ marginBottom: 2, height: "30vh" }} elevation={3}>
            <img src={graph} style={{ animation: "none", maxWidth: "60%" }}/>
          </Paper>
        
        </Stack>
      </Card>

      <Card sx={{height: "100vh", borderRadius: "15px", width: "60%"}}>
        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography sx={{fontSize: "20px", color: "black"}}>
            Cross-Dataset Generalization in Gaze Prediction: 
            <br/>
            What are the challenges and methods for training gaze estimation models on one dataset and applying them effectively to different environments or datasets with varying conditions?
            </Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Generate Quiz</Button>
          </Paper>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography sx={{fontSize: "20px", color: "black"}}>
              Multi-modal Fusion in Gaze Estimation: 
              <br/>
              How can computer vision techniques be integrated with other modalities (such as EEG signals or fMRI data) to enhance gaze estimation accuracy and robustness?
            </Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Generate Quiz</Button>
          </Paper>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography sx={{fontSize: "20px", color: "black"}}>
            Gaze-based Human-Computer Interaction (HCI) Challenges: 
            <br />
            What are the main technical obstacles in developing intuitive and efficient interfaces using gaze tracking, and how can these challenges be addressed to improve user experience?
            </Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Generate Quiz</Button>
          </Paper>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography sx={{fontSize: "20px", color: "black"}}>
            Ethical Implications of Gaze Tracking in Privacy-sensitive Applications: 
            <br />
            How can computer vision researchers ensure that gaze tracking technologies are deployed responsibly, particularly in areas such as surveillance, advertising, and data privacy?
            </Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Generate Quiz</Button>
          </Paper>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography sx={{fontSize: "20px", color: "black"}}>
            Gaze-based Attention Prediction in Dynamic Environments: 
            <br />
            What are the current limitations and future research directions for predicting human attention using gaze information in real-time scenarios with complex and dynamic visual stimuli, such as driving or video gaming?
            </Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Generate Quiz</Button>
          </Paper>
        </Stack>
      </Card>
    </Stack>
  
    </>
  )
}

export default Teacher