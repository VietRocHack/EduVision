import React, {useState} from 'react';
import { Box, TextField, Paper, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom";
import backgroundImage from "../assets/banner-bg.png";
import header from "../assets/header-img.svg";
import { supabase } from '../App';

const JoinMeeting = () => {
    const [meetingID, setMeetingID] = useState('');
    const [matchID, setMatchID] = useState(false)
    const [meetingNotFound, setMeetingNotFound] = useState(false)

    const handleMeetingIDChange = (event) => {
        setMeetingID(event.target.value);
        // console.log(meetingID)
        setMatchID(false)
        setMeetingNotFound(false)
    };

    const handleJoinMeeting = async () => {
        try {
          // Query Supabase for the meeting with the entered meeting ID
          const { data, error } = await supabase
            .from('meetings')
            .select('*')
            .eq('meeting_id', meetingID);
          if (error) {
            console.error('Error joining meeting:', error.message);
            return;
          }
    
          if (data.length === 0) {
            console.error('Meeting not found.');
            setMeetingNotFound(true)
            return;
          }
    
          console.log('Meeting details:', data[0]);
          setMatchID(true)

        } catch (error) {
          console.error('Error joining meeting:', error.message);
        }
      };

      const joinButton = matchID ? (
        <Link to="/student" style={{ textDecoration: 'none' }}>
            <button className="button-64" role="button" onClick={handleJoinMeeting}><span className="text">Join Meeting</span></button>
        </Link>
    ) : null;
  return (
    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-around" , backgroundImage: `url(${backgroundImage})`}}>
    
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
            <Box sx={{marginBottom: "40px", display: "flex", justifyContent:"space-around"}} >      
                <TextField 
                    required
                    label="Name" 
                    sx={{ mr: 2 }}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Student ID"
                    type="password"
                    autoComplete="current-password"
                />
            </Box>
            <Box sx={{marginBottom: "20px", display: "flex", justifyContent: "space-around", marginRight: "20px"}}>
                <TextField 
                    required
                    label="Meeting ID" 
                    onChange={handleMeetingIDChange}
                    sx={{ mr: 2 }}
                />
                <Button onClick={handleJoinMeeting} sx={{width: "35%"}} variant="outlined" color="error">Search</Button>
            </Box>  
        </Paper>

        {/* <button onClick={handleJoinMeeting}>search</button> */}
        {meetingNotFound && <div style={{ color: "red" }}>Meeting not found</div>}
        {joinButton}
    </Box>

    <img src={header} alt="Your SVG"/>
    </Box>
  );
};

export default JoinMeeting;

