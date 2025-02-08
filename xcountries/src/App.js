import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./Components/CountryCard";

function App() {
  const [orginalCountries, setCountries] = useState([]);
  const [filetedItems, setFileteredItems] = useState([])
  const [input, setInput] = useState("");

  

  const functionChange=(search)=>{
    if(search==="") {
      setFileteredItems(orginalCountries);
       return;}
    const newCountry = orginalCountries.filter((item)=>   item.common.toLowerCase().includes(search.toLowerCase())
  );
    console.log(newCountry);
    setFileteredItems(newCountry);
  }

  useEffect(()=>{
    functionChange(input);
  }, [input,orginalCountries])

  useEffect(() => {
    const apiCall = async () => {
      try {
        const res = await axios.get(
          `https://countries-search-data-prod-812920491762.asia-south1.run.app/countries`
        );
        console.log(res.data)
        setCountries(res.data)
        setFileteredItems(res.data)
      } catch (e) {
        console.log(e)
      }
    };
    apiCall();
  },[]);
  return (
    <div className="App">
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search for Countries" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: 'center',
          padding: "3rem",
          flexWrap: 'wrap'
        }}
      >
        {filetedItems.length>0 && filetedItems.map((item)=>{
          return <CountryCard  className='countryCard' key={item.common} country={item}/>
        })}
      </div>
    </div>
  );
}

export default App;
