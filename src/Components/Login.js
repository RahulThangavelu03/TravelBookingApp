import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./SignupComponent";
import  {HandleLogin}  from "../Features/UserData";
import { useDispatch, useSelector } from "react-redux";
import { HandleLogOut } from "../Features/UserData";

import { ToastContainer, toast, Zoom } from "react-toastify";

function LoginComponnent() {
  const [formEmail, setFormEmail] = useState();
  const [formPassword, setFormPassword] = useState();
    const [error, setError] = useState("");

  let userData = sessionStorage.getItem("sessions");
  userData = JSON.parse(userData);


  const dispatch = useDispatch();
  const Navigate = useNavigate();

  function handleSubmit(e) {
    let ExsistingUser = null
    e.preventDefault();


    const email = e.target.email.value;     
  const password = e.target.password.value;

  
      if (userData) {
        ExsistingUser = userData.IDs.find((i) => i.email == email);
      }

      console.log(ExsistingUser,"Exsitinguer)")


      if (ExsistingUser && ExsistingUser.password==password) {
        dispatch(
          HandleLogin({ userEmail: email, userPassword: password })
          
        );
   setError(""); 
        Navigate("/TripCatalog");
      }
      
      
      else if(ExsistingUser )
      {

     setError("Incorrect email or password");
       
 }
      
            else {
     setError("Account not found, please signup");

      }

    }
    
  
  

  return (
    <div id="LoginContainer">
      <div id="Login">
        <h3 style={{ paddingLeft: "15px", paddingTop: "5px" }}>Login Here</h3>

        <form id="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <br />
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              style={{ maxWidth: "300px" }}
              required
              onChange={(e) => setFormEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              required
              style={{ maxWidth: "300px" }}
              onChange={(e) => setFormPassword(e.target.value)}
            />
          </div>
           {error && <p className="text-danger mt-2">{error}</p>}
          <br />


          <button type="submit" className="btn btn-primary">
            Login
          </button>{" "}
          don't have an acccount?
        </form>

        <Link style={{ paddingLeft: "100px" }} to="/Signup">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default LoginComponnent;
