import { Box } from "@mui/material";
import React from "react";
import Navbar from "../SliderBar/Navbar";
import Homehero from "../HeroSection/Homehero";
import HeroAbsolute from "../HeroSection/heroAbsolute";
import SliderComponent from "../SliderComponent/SliderComponent";
import FindBySpecification from "./FindBySpecification";

const Body = () => {
  return (
    <div>
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
          
         }}>
      <HeroAbsolute/>
      </div>
        
      <Box
        sx={{
          height: "832px",
          border: "0.5px solid #FFFFFF",
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        }}
      >
       <Box sx={{
        marginLeft: { xs:'20px',sm: '20px', md:"135px" , lg: '135px'},
        marginRight: { xs:'20px',sm: '20px', md:"135px" , lg: '135px'}
       }}>
        <Navbar/>
        <Homehero/>
       </Box>
       <Box sx={{
          position: 'relative', 
          marginTop: '25rem',  
          width: '100vp'

        }}>
          <SliderComponent/>
        </Box>
        <Box  sx={{
          width: '100%',
          height: '729px',
          position: 'relative',   
          // top: '1327px',
          marginTop: '2rem',
          left: '-5px', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)'
        }}> 

          <FindBySpecification/>
         
        </Box>
      </Box>

    </div>
  );
};

export default Body;
