// import "./App.css";
// import { Box } from "@mui/material";
// import CountryCard from "./Components/CountryCard";
// import axios from "axios";
// import { useEffect, useState, useRef } from "react";

// function App() {
//   const [list, setList] = useState([]);
//   const [originalList, setOriginalList] = useState([]);
//   const [search, setSearch] = useState("");

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`https://restcountries.com/v3.1/all`);
//       setOriginalList(res.data);
//       setList(res.data);
//     } catch (e) {
//       console.error("Error fetching data:", e.message);
//       setList([]);
//     }
//   };

//   const debounceRef = useRef(null);

//   const processFilter = (value, debounceTime) => {
     
//     if (debounceRef.current) {
     
//       clearTimeout(debounceRef.current);
    
//     }
//     debounceRef.current = setTimeout(() => {
//       if (value.trim() === "") {
//         setList(originalList);
//       } else {
//         const filter = originalList
//           .filter((item) =>
//             item.name.common.toLowerCase().includes(value.toLowerCase())
//           )
//           .sort((a, b) => a.name.common.localeCompare(b.name.common));
//         setList(filter);
//       }
//     }, debounceTime);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     processFilter(search, 300);
//   }, [search,list ]);

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search for countries"
//         style={{ width: "40%", margin: "1rem" }}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {/* {list.length > 0 ? ( 
//         <Box
//          className="countryCard"
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             gap: "16px",
//           }}
//         >
//           <CountryCard className="countryCard" countryData={list} /> 
//         </Box>
//       ) : null} */}
//       {
//         <Box
//        className="country-list"
        
//        >
       
//           {list.length > 0
//             ? list.map((country, index) => (
//                 <div className="countryCard" key={index}>
//                   <img
//                     style={{ width: "150px", objectFit: "cover" }}
//                     src={country.flags.png}
//                     alt={`${country.name.common} flag`}
//                   />
//                   <p>{country.name.common}</p>
//                 </div>
//               ))
//             : null}
//         </Box>
//       }
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
  const [list, setList] = useState([]); // Current filtered list of countries
  const [originalList, setOriginalList] = useState([]); // Original unfiltered list
  const [search, setSearch] = useState(""); // Search term
  const [error, setError] = useState(null); // Error state

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/all`);
      setOriginalList(res.data);
      setList(res.data);
    } catch (e) {
      console.error("Error fetching data:", e.message);
      setError("Failed to fetch countries");
      setList([]);
    }
  };

  const debounceRef = useRef(null);

  const processFilter = (value, debounceTime) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    debounceRef.current = setTimeout(() => {
      if (value.trim() === "") {
        setList(originalList);
      } else {
        const filter = originalList
          .filter((item) =>
            item.name.common.toLowerCase().includes(value.toLowerCase())
          )
          .sort((a, b) => a.name.common.localeCompare(b.name.common));
        setList(filter);
      }
    }, debounceTime);
  };

  useEffect(() => {
    fetchData();
    
    return () => {
      // Cleanup the debounce timer on unmount
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []); // Only run on mount

  useEffect(() => {
    processFilter(search, 300); // Filter countries based on search term
  }, [search,list]); // No need for list as a dependency

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for countries"
        style={{ width: "40%", margin: "1rem" }}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if fetching fails */}

      <Box className="country-list">
        {list.length > 0
          ? list.map((country, index) => (
              <div className="countryCard" key={index}>
                <img
                  style={{ width: "150px", objectFit: "cover" }}
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                />
                <p>{country.name.common}</p>
              </div>
            ))
          : null} {/* Display message if no countries match */}
      </Box>
    </div>
  );
}

export default App;
