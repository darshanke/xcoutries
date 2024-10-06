// import "./App.css";
// import { Box } from "@mui/material";
// import CountryCard from "./Components/CountryCard";
// import axios from "axios";
// import { useEffect, useState,useRef } from "react";

// function App() {
//   const [list, setList] = useState([]);
//   const [originallist, setoriginallist] = useState([]);
//   const [search,setsearch] = useState("");

//   const countyData = async () => {
//     try {
//       const res = await axios.get(`https://restcountries.com/v3.1/all`);
//       setoriginallist(res.data);
//       setList(res.data);
//       return res.data;
//     } catch (e) {
//       console.error("Error fetching data:", e.message);
//       setList([]);
//     }
//   };
//   const debounceRef = useRef(null); 
//   const proccessfilter = (value, debouncetime) => {
   
//     if(debounceRef.current){
//       clearTimeout(debounceRef.current)
//     }
//     debounceRef.current = setTimeout(()=>{
//     const filter = originallist.filter((item) =>
//       item.name.common.toLowerCase().includes(value.toLowerCase())
//     );
//     setList(filter);
//    },debouncetime);
//   };

//   useEffect(() => {
//     countyData(); 
//   }, []);

//   useEffect(()=>{
//     proccessfilter(search,300)
//   },[search])
//   return (
//     <div className="App">
//       <input

//         type="text"
//         placeholder="Search for countries"
//         style={{width: "40%", margin:"1rem"}}
//         onChange={(e) => {
//           setsearch(e.target.value)
//         }}
//       />
//       {list.length > 0 ? (
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             flexWrap: "wrap",
//             gap: "16px",
//           }}
//         >
//           <CountryCard className="countryCard" countryData={list} />
//         </Box>
//       ) : null}
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { Box } from "@mui/material";
import CountryCard from "./Components/CountryCard";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function App() {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]); // Corrected naming for clarity
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/all`);
      setOriginalList(res.data); // Store original data
      setList(res.data); // Set the list to the original data initially
    } catch (e) {
      console.error("Error fetching data:", e.message);
      setList([]); // Clear list on error
    }
  };

  const debounceRef = useRef(null);
  
  const processFilter = (value, debounceTime) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      const filter = originalList.filter((item) =>
        item.name.common.toLowerCase().includes(value.toLowerCase())
      );
      setList(filter);
    }, debounceTime);
  };

  useEffect(() => {
    fetchData(); // Fetch country data on mount
  }, []);

  useEffect(() => {
    processFilter(search, 300); 
  }, [search,list]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for countries"
        style={{ width: "40%", margin: "1rem" }}
        onChange={(e) => setSearch(e.target.value)} // Update search state
      />
      {list.length > 0 ? ( // Check if there are countries to display
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <CountryCard countryData={list} /> {/* Pass filtered list to CountryCard */}
        </Box>
      ) : (
        <div>No countries found</div> // Display message if no countries
      )}
    </div>
  );
}

export default App;

