import "./App.css";
import { Box } from "@mui/material";
import CountryCard from "./Components/CountryCard";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function App() {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]); 
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/all`);
      setOriginalList(res.data); 
      setList(res.data); 
    } catch (e) {
      console.error("Error fetching data:", e.message);
      setList([]); 
    }
  };

  const debounceRef = useRef(null);
  
  const processFilter = (value, debounceTime) => {
    // if (debounceRef.current) {
    //   clearTimeout(debounceRef.current);
    // }
    // debounceRef.current = setTimeout(() => {
      const filter = originalList.filter((item) =>
        item.name.common.toLowerCase().includes(value.toLowerCase())
      );
      setList(filter);
    // }, debounceTime);
  };

  useEffect(() => {
    fetchData(); 
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
        onChange={(e) => setSearch(e.target.value)} 
      />
      {list.length > 0 ? ( 
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <CountryCard className="countryCard" countryData={list} /> 
        </Box>
      ) : null}
    </div>
  );
}

export default App;

