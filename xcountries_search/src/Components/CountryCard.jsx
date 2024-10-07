import { Card, Typography, Box } from "@mui/material";
import React from "react";

const CountryCard = ({ countryData }) => {
  if (!countryData || countryData.length === 0) {
    return null;
  }

  return (
    <>
      {countryData.map((item, index) => (
        <Card
          className="countryCard"
          key={index}
          // sx={{
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   width: "200px",
          //   padding: "1rem",
          // }}
        >
          <img
            src={item.flags.png}
            alt="flag"
            style={{
              height: "150px",
              width: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              objectFit: "cover",
            }}
          />

          <Typography
            variant="body2"
            align="center"
            sx={{ marginTop: "8px", fontWeight: "bold" }}
          >
            {item.name.common}
          </Typography>
        </Card>
      ))}
    </>
  );
};

export default CountryCard;
