import React from 'react';
import { Button, Box, TextField, Grid, Paper, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import backgroundImage from "../assets/banner-bg.png";
import header from "../assets/header-img.svg";

const CreateMeeting = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-around" , backgroundImage: `url(${backgroundImage})`}}>
    {/* <Box sx={{backgroundImage: `url(${leftImage})`, backgroundRepeat: "no-repeat", width: "40%", animation: "updown 3s linear infinite"}}></Box> */}
    
    
    <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="100vh"
        width="60%"
        sx={{marginRight: "30px"}}
    >
        
        <Paper 
            display="flex" flexDirection="column" alignItems="center" elevation={10}
            sx={{
                borderRadius: "10px", 
                width: "500px", 
                height: "300px", 
                padding: "20px", 
                marginBottom: "50px", 
                backgroundColor: "#E8D9F0",
                justifyContent: "center",
                alignItems: "center",
                
            }}
        >
            <Typography mb={3} variant="h3" sx={{display: "flex", justifyContent: "center", color: "primary.main"}}>Meeting Information</Typography>
            <Box sx={{marginBottom: "20px", display: "flex", justifyContent:"space-around"}} >      
                <TextField 
                    required
                    label="Name" 
                    sx={{ mr: 2 }}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Professor ID"
                    type="password"
                    autoComplete="current-password"
                />
            </Box>
            <Box sx={{marginBottom: "20px", display: "flex", justifyContent:"space-around"}}>
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
            <Box sx={{marginBottom: "20px", display: "flex", justifyContent:"space-around"}}>
                <TextField 
                    required
                    label="Meeting ID" 
                    sx={{ mr: 2 }}
                />
            </Box> 
        </Paper>

        <Link to="/teacher" style={{ textDecoration: 'none' }}>
            <button class="button-64" role="button"><span class="text">Generate Meeting</span></button>
        </Link>
    </Box>

    <img src={header} alt="Your SVG"/>
    </Box>
  );
};

export default CreateMeeting;

