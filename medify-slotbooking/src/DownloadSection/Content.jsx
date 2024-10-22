import React from "react";
import AppDownload from "./AppDownload";
import { Box, Typography } from "@mui/material";
import vector from "./Asests/Vector (1).png";

const Content = () => {
  return (
    <Box sx={{ display: "flex",justifyContent:'center', flexDirection: "row" }}>
      <AppDownload />
   <img
        src={vector}
        alt=""
        style={{
          zIndex: 1,
          //   width: "112.35px",
          height: "70px",
          position: "relative",
          right: "420px",
          opacity: 0.8,
          transform: "rotate(23.51deg)",
        }}
      
      />
        {/* <Typography sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '67px',
                color: '#1B3C74',
                zIndex: 13,
                position: 'relative',
                right: "400px",

        }}>Download the <span>Medify</span> App</Typography>  */}
    </Box>
  );
};

export default Content;
