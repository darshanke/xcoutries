import { Box } from "@mui/material";
import React from "react";
import Navbar from "../SliderBar/Navbar";
import Homehero from "../HeroSection/Homehero";
import HeroAbsolute from "../HeroSection/heroAbsolute";
import SliderComponent from "../SliderComponent/SliderComponent";
import FindBySpecification from "./FindBySpecification";
import DoctorSpecidalist from "../DoctorSpecialists/DoctorSpecidalist";
import PatientCaring from "../Patient/PatientCaring";
import ReadOurLatesNews from "../ReadOurLatestNews/ReadOurLatesNews";
import OurFamily from "../OurFamily/OurFamily";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import AppDownload from "../DownloadSection/AppDownload";
import Content from "../DownloadSection/Content";

const Body = () => {
  return (
    <div>
      

      <Box
        sx={{
          height: "832px",
          border: "0.5px solid #FFFFFF",
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        }}
      >
       
      <Box
          sx={{
            marginLeft: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
            marginRight: { xs: "20px", sm: "20px", md: "135px", lg: "135px" },
          }}
        >
          
          <Navbar />
          <Homehero />
        </Box>
  
      </Box>
        
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HeroAbsolute />
        </div>
        <SliderComponent />
        <Box
          sx={{
            width: "100%",
            height: "729px",
            position: "relative",
            // top: '1327px',
            marginTop: "2rem",
            left: "-5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
          }}
        >
          <FindBySpecification />
        </Box>
        {/* <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
           
          }}
        > */}
          <DoctorSpecidalist />
        {/* </Box> */}
        {/* <Box
          sx={{
            maxWidth: "1449px",
            maxHeight: "598px",
            position: "relative",
            left: "-5px",
            background:
              "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        > */}
          <PatientCaring />
      
        {/* <ReadOurLatesNews /> */}
        {/* <OurFamily /> */}
        {/* <FrequentlyAskedQuestion /> */}
        {/* <Content /> */}
      
      
    </div>
  );
};

export default Body;
