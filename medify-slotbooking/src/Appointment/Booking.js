import Grid from "@mui/material/Grid2";
import React from "react";
import AppointmentCard from "./AppointmnetCard";
import { AppointmentOffer } from "./AppointmentOffer";

const Booking = () => {
  return (
    <Grid container spacing={8} sx={{ flexGrow: 1, alignItems: "flex-start" ,
        paddingLeft: { xs: "20px", sm: "20px", md: "135px", lg: "135px"},
        paddingRight: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
        position: 'relative'
    }}>
      <Grid item xs={8}>
    <AppointmentCard/>
    <AppointmentCard/>
      </Grid>
      <Grid item xs={4} sx={{position: 'relative', top: '0px'}}>
        <AppointmentOffer/>
      </Grid>
    </Grid>
  );
};

export default Booking;
