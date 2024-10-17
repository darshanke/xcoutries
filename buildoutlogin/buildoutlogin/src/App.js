import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [password,setPassword]  = useState('');
  const [message,setmessaage] = useState(false);
  const [logged,setlogged] = useState(false)

  debugger;
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(user!=='user' && password!=='password'){
      setmessaage(true);
      return;
    }
    debugger;
    setlogged(true);
    setmessaage(false);

  }

  return (
    <div>
      <h1>Login Page</h1>
      {message && <p>Invalid username or password</p>}
      {!logged?
      (<form onSubmit={(e)=>{handleSubmit(e)}}>
        <label name="Username" value="Username">
          UserName :{" "}
        </label>
        <input
          type="text"
          id="UserName"
          placeholder="userName"
          value={user}
          required
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <br />
        <label name="Pasword" value="Password">
          Password :{" "}
        </label>
        <input type="password" id="Pasword" placeholder="password" 
         required 
        value={password}
      
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        
       />
        <br />
        <button type="submit">Submit</button>
      </form>):<p>Welcome, user!</p>}
      
    </div>
  );
}

export default App;
