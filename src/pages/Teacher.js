import React from 'react';
import { Typography, Grid, Button, Stack } from "@mui/material";
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import backgroundImage from "../assets/banner-bg.png";
import graph from "../assets/graphs.png";
//import Chart from "./Chart.js";

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
      <Card sx={{height: "90vh", borderRadius: "15px", width: "40%"}}>
        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          
          <Paper sx={{ marginBottom: 2, height: "20vh", padding: "10px", display: "flex", flexDirection: "column", fontFamily: 'Poppins, sans-serif', fontWeight: "500"}} elevation={3}>
            <Card elevation={6} sx={{marginBottom: "20px"}}>
              <Typography variant="h5" color="secondary" sx={{textAlign: "center"}}>CSC 172 - Data Structure and Algorithms</Typography>
            </Card>
            
            <Paper elevation={6} sx={{display: "flex", flexDirection: "row", justifyContent: "space-around", padding: "20px"}}>
              <Card xs={{alignItems: "center", textAlign: "center"}} elevation={6}>
                Class Attendace
                <br/>
                <Typography variant="h4" color="secondary" sx={{textAlign: "center"}}>32 / 45</Typography>
              </Card>
              <Card xs={{alignItems: "center", textAlign: "center"}} elevation={6}>
                Concentration Rate
                <br/>
                <Typography variant="h4" color="secondary" sx={{textAlign: "center"}}>Medium</Typography>
              </Card>
              <Button variant="outlined" color="error" sx={{width: "20%", "&:hover": {backgroundColor: "white", borderColor: "red", color: "red"}}}>
                End Class
              </Button>
            </Paper>
          </Paper>

          <Paper sx={{ marginBottom: 2, height: "30vh" }} elevation={3}>
            <img src={graph} style={{ animation: "none", maxWidth: "60%" }}/>
          </Paper>
          <Paper sx={{ marginBottom: 2, height: "30vh" }} elevation={3}>
            <img src={graph} style={{ animation: "none", maxWidth: "60%" }}/>
          </Paper>
        </Stack>
      </Card>

      <Card sx={{height: "100vh", borderRadius: "15px", width: "60%"}}>
        <Stack direction="column" spacing={2} sx={{padding: "20px"}}>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography>Question</Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Quizzing</Button>
          </Paper>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography>Question</Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Quizzing</Button>
          </Paper>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography>Question</Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Quizzing</Button>
          </Paper>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography>Question</Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Quizzing</Button>
          </Paper>
          <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
            <Typography>Question</Typography>
            <Button variant="contained" sx={{width: "15%", color: "white"}}>Quizzing</Button>
          </Paper>
        </Stack>
      </Card>
    </Stack>
  
    </>
  )
}

export default Teacher