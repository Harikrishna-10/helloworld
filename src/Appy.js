import React from "react";
import "./style.css";
import Button from "./Button.js";
const App=()=>{
    return(
        <div>
      <h1 style={{textAlign:"center"}}>Welcome To  BLACK GREEN  COMPANY</h1><br/><br/>
      <h2 style={{textAlign:"center"}}>Login</h2><br/>
      <input type="email" placeholder= "       enter the email id" name="email id" id="email"></input><br/><br/>
      <input type="password" placeholder= "    enter the password" name="password" id="password"></input><br/>
      <p>Follow us on </p>
      <Button buttonText="facebook"/>
      <Button buttonText="instagram"/>
      <Button buttonText="youtube"/>
      
      

    </div>
  
    )
  }
  export default App