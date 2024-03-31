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
    {/* <Grid
      container
      spacing={4}
      sx={{backgroundColor: "black", backgroundImage: `url(${backgroundImage})`, justifyContent: "center", padding: "50px"}}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{height: "90vh", borderRadius: "15px"}}>
          <Grid container direction="column" padding="20px">
            <Paper sx={{ marginBottom: 2, height: "20vh" }} elevation={3}>Class Attendance</Paper>
            <Paper sx={{ marginBottom: 2, height: "30vh" }} elevation={3}>Class Concentration</Paper>
            <Paper sx={{ marginBottom: 2, height: "30vh" }} elevation={3}>Hard Concepts / Confusion Rate</Paper>

          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={7}>
        <Card sx={{height: "100%", borderRadius: "15px"}}>
          <Grid container direction="column" padding="20px">
            <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
              <Typography>Question</Typography>
              <Button variant="contained" sx={{width: "15%"}}>Quizzing</Button>
            </Paper>
            <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
              <Typography>Question</Typography>
              <Button variant="contained" sx={{width: "15%"}}>Quizzing</Button>
            </Paper>
            <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
              <Typography>Question</Typography>
              <Button variant="contained" sx={{width: "15%"}}>Quizzing</Button>
            </Paper>
            <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
              <Typography>Question</Typography>
              <Button variant="contained" sx={{width: "15%"}}>Quizzing</Button>
            </Paper>
            <Paper sx={{ marginBottom: 3, height: "15vh", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10px"}} elevation={3}>
              <Typography>Question</Typography>
              <Button variant="contained" sx={{width: "15%"}}>Quizzing</Button>
            </Paper>
            
          </Grid>
        </Card>
      </Grid>
      
      
    </Grid> */}

    <Stack
      direction="row" // or "column" depending on your layout needs
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
          <Paper sx={{ marginBottom: 2, height: "20vh", padding: "10px", display: "flex", justifyContent: "space-around", fontFamily: 'Poppins, sans-serif', fontWeight: "500"}} elevation={3}>
            <Card xs={{minWidth: "50%", alignItems: "center"}}>
              32 / 45
            </Card>
            
            
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