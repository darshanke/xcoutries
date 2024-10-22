import { Box, Container } from "@mui/material";
import React from "react";
import imgae from "./Asests/long.png";
import second from "./Asests/best.png";

const AppDownload = () => {
  return (
    <Container
      sx={{
        width: "1162px",
        height: "566px",
        paddingTop: "2rem",
     
      }}
    >
      <div 
      style={{height: "502px", backgroundColor: "#FFFFFF" ,zIndex: 9
        ,overflow: 'hidden'
       }}
      >
        <img
          src={imgae}
          alt=""
          style={{
            position: "relative",
       
            height: "503px",
            zIndex: 7,
          }}
        />
        <img
          src={second}
          alt=""
          style={{
            position: "relative",
            top: "18px",
            left: "-485px",
            height: "550px",
            objectFit: "cover",
            borderRadius: "90px",
            clipPath: "inset(53px 252px 40px 252px)", 
            zIndex: 6,
            backgroundColor: "#FFFFFF" 
          }}
        />
      </div>
      <div 
      style={{height: "502px", backgroundColor: "#FFFFFF" ,zIndex: 5,   overflow: 'hidden',
        position: 'relative',
        top: '-600px',
        left: '180px'
      }}
      >
        <img
          src={imgae}
          alt=""
          style={{
            position: "relative",
       
            height: "503px",
            zIndex: 4,
          }}
        />
        <img
          src={second}
          alt=""
          style={{
            position: "relative",
            top: "18px",
            left: "-485px",
            height: "550px",
            objectFit: "cover",
            borderRadius: "90px",
            clipPath: "inset(53px 252px 40px 252px)", 
            zIndex: 3,
            backgroundColor: "#FFFFFF" 
          }}
        />
      </div>
     
     
    </Container>
  );
};

export default AppDownload;
