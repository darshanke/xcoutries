import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Box } from "@mui/material";
import Body from "./Body/Body";

const Home = () => {
  return (
    <Box>
      <Header />
      <Body/>
      <Footer />
    </Box>
  );
};

export default Home;
