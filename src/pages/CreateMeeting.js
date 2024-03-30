import React from 'react';
import { Button, Box, TextField, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import backgroundImage from "../assets/banner-bg.png";
import leftImage from "../assets/left-joinmeeting.png";
import rightImage from "../assets/right-joinmeeting.png";

const CreateMeeting = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly" , backgroundImage: `url(${backgroundImage})`}}>
    <Box sx={{backgroundImage: `url(${leftImage})`, backgroundRepeat: "no-repeat", width: "40%", animation: "updown 3s linear infinite"}}></Box>
    
    <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="100vh"
        width="60%"
        
    >
      <Box 
        display="flex" flexDirection="column" alignItems="center" 
        sx={{
            border: "1px solid #27125A",  
            borderRadius: "8px", 
            width: "500px", 
            height: "300px", 
            padding: "20px", 
            marginBottom: "50px", 
            backgroundColor: "#D09DEB",
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        <Box sx={{marginBottom: "20px", display: "flex", justifyContent:"space-between"}} >      
            <TextField 
                required
                label="Name" 
                sx={{ mr: 2 }}
            />
            <TextField
                id="outlined-password-input"
                label="Professor ID"
                type="password"
                autoComplete="current-password"
            />
        </Box>
        <Box sx={{marginBottom: "20px", display: "flex", justifyContent:"space-between"}}>
            <TextField 
                required
                label="Class Capacity" 
                sx={{ mr: 2 }}
            />
            <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue=""
            InputLabelProps={{
                shrink: true,
            }}
            />
        </Box>  
      
      </Box>

        <Link to="/teacher" style={{ textDecoration: 'none' }}>
            <button class="button-64" role="button"><span class="text">Generate Meeting</span></button>
        </Link>
    </Box>

    <Box sx={{backgroundImage: `url(${rightImage})`, marginRight: "5px", marginTop: "300px", backgroundRepeat: "no-repeat", width: "30%", animation: "updown 5s linear infinite", bottom: 0, right: 0}}></Box>
    </Box>
  );
};

export default CreateMeeting;

