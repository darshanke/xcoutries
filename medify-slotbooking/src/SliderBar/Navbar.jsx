import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import medifyicon from "./medifyicon.svg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [changeUi, setUi] = useState(false);


  const navBarList = ['Find Doctors', 'Hospitals', 'Medicines', 'Surgeries','Software for Provider', 'Facilities', ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box
      sx={{
        height: "96px",
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between', 
        alignItems: "center",
      }}
    >
      <Box sx={{ 
        display: "flex", 
        alignItems: "center",
        }}>
     
     
        <img src={medifyicon} alt="medifyicon" />
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "27px",
            letterSpacing: "0.02em",
            textAlign: "left",
            color: "#2AA8FF",
            marginLeft: "8px", 
          }}
        >
          Medify
        </Typography>
      </Box>
      <Box 
      sx={{
    
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
         position: 'relative',
         maxWidth: '912px',
     
  
      }}
        >
          {
            !changeUi &&  <Box
            value={value}
            onChange={handleChange}
            scrollButtons="false" 
            sx={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 400,
              textAlign: 'left',
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              color: '#102851',
              textTransform: 'none',
                      }}
  
          >{
            navBarList.map((item,index)=>(
            (
                <Typography key={index} sx={{
                   padding: '12px 16px',  
                  textTransform: 'none',
                 
                }} onClick={()=>setUi(true) } >{item}</Typography>
              ) 
                
            ))
          }
            
            
          </Box>
          }

        {/* {!changeUi &&<Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="false" 
          sx={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            textAlign: 'left',
         
          }}

        >{
          navBarList.map((item,index)=>(
          (
              <Tab key={index} label={item} {...a11yProps(index)}  sx={{    lineHeight: '21px',    textTransform: 'none'}}/>
            ) 
              
          ))
        }
          
          
        </Tabs>} */}
        <Button variant="contained" 
            sx={{
              width: '130px',
              height: '40px',
              borderRadius: '8px',
              opacity: 1,
              backgroundColor: '#2AA8FF', 
              padding: '1px'
            }}

            >My Bookings</Button>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
};

export default Navbar;
