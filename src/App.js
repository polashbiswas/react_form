import React,{useState} from "react";
import './App.css'

const App = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [error, setError] = useState("");

  function handelName(e){
    setName(e.target.value);
  }
  function handelEmail(e){
    setEmail(e.target.value);
  }
  function hadelPassword(e){
    setPassword(e.target.value);
  }
  function handelConfirmPassword(e){
    setConfirmPassword(e.target.value)
  }


  function handelBtn(e){
    e.preventDefault();
    if(!name || !email || !password || !confirmPassword){
      console.log("All fields are mandatory");
      setError("Error : All the fields are mandatory");
    }else{
      if(password !== confirmPassword){
        setError("Password is wrong")
        setConfirmPassword("");
      }else{
        setError("Successfully Signed up")
      }
    }
  }

  return(
    <div>
      <div className="container">
<form className="container-form">
<h1>Signup</h1>
      <input 
      type="text" 
      placeholder="Full Name"
      onChange={handelName}
      value={name}
      />

      <input 
      type="email" 
      placeholder="Email"
      onChange={handelEmail}
      value={email}
      />

      <input 
      type="password" 
      placeholder="Password"
      onChange={hadelPassword}
      value={password}
      />

      <input 
      type="password" 
      placeholder="Confirm Password"
      onChange={handelConfirmPassword}
      value={confirmPassword}
      />
      <p style={{ color: error.includes("Successfully") ? "green" : "red" }}
      className="err-success">
        {error}
      </p>
      <button onClick={handelBtn} className="btn">Signup</button>
</form>
      {/* <p>{error}</p> */}
      
    </div>
    </div>
  )
}

export default App;