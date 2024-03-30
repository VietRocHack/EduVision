import React from 'react';
import { Grid, Card } from "@mui/material";
import Chat from '../components/Chat';
import backgroundImage from "../assets/banner-bg.png";

const Student = () => {
  return (
    <>
    <Grid
     container
     spacing={4}
     sx={{justifyContent: "center", backgroundColor: "black", backgroundImage: `url(${backgroundImage})`, padding: "50px"}}
    >
      <Grid item xs={12} sm={6} md={6}>
        <Card sx={{height: "90vh", borderRadius: "15px", marginRight: "40px"}}>
            
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} sx={{backgroundColor: "lightblue", borderRadius: "15px", marginTop: "30px"}}>
        <Chat />
      </Grid>

    </Grid>
    </>
  )
}

export default Student