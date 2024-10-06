import { Card, Typography, Box } from "@mui/material";
import React from "react";

const CountryCard = ({ countryData }) => {
  if (!countryData || countryData.length === 0) {
    return  <Box
    className=".countryCard`" 
    sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "16px",

    }}
  >
   
      <Card
        key={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "200px",
          padding: '1rem',
        }}
      >
        <div
          style={{
            height: "150px",
            width: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://flagcdn.com/w320/gs.png"
            alt="South Georgia"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <Typography variant="body2" align="center" sx={{ marginTop: '8px' }}>
        South Georgia
        </Typography>
      </Card>
  
  </Box>
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {countryData.map((item, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "200px",
            padding: '1rem',
          }}
        >
          <div
            style={{
              height: "150px",
              width: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={item.flags.png}
              alt={item.name.common}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <Typography variant="body2" align="center" sx={{ marginTop: '8px' }}>
            {item.name.common}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default CountryCard;
