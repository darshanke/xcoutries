import { Box, Button, Typography } from "@mui/material";
import React from "react";
import heroimage from "./heroImage.png";

const commonStyles = {
  fontFamily: "Poppins",
  letterSpacing: "0.02em",
  textAlign: "left",
};

const Homehero = () => {
  return (
    <Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",

            width: "663px",
            height: "128px",
            top: "180px",
            left: "135px",
            gap: "0px",
          }}
        >
          <Typography
            sx={{
              ...commonStyles,
              fontWeight: 500,
              fontSize: "31px",
              lineHeight: "68px",
              letterSpacing: "2%",
            }}
          >
            Skip the travel! Find Online Medical Centers
          </Typography>
          <Typography
            sx={{
              ...commonStyles,
              fontWeight: 700,
              fontSize: "56px",
              lineHeight: "68px",
              letterSpacing: "2%",
            }}
          >
            Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
          </Typography>
          <Typography
            sx={{
              ...commonStyles,
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "#5C6169",
            }}
          >
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Typography>
          <Button
            sx={{
              backgroundColor: "#2AA8FF",
              width: "177px",
              height: "48px",
              padding: "12px 36px",
              gap: "10px",
              borderRadius: "8px",
              ...commonStyles,
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              color: "#FFFFFF",
              textTransform: "none",
            }}
            //   variant="primary"
          >
            Find Centers
          </Button>
        </Box>
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <img
            src={heroimage}
            alt="heroimage"
            style={{
              zIndex: 1,
         
            }}
          />
        </Box>
      </Box>
   
    </Box>
  );
};

export default Homehero;
