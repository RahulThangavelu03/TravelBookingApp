import React, { useState } from "react";
import Login from "../Components/Login";
import { Link, useNavigate } from "react-router-dom";
import { HandleSignUp } from "../Features/UserData";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast, Zoom } from "react-toastify";

function Signup() {
  const [userName, setuserName] = useState();
  const [userEmail, setuserEmail] = useState();
  const [userPassword, setuserPassword] = useState();

  const [Error,setError]=useState("")
  const Navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.User);

  let Sessions = sessionStorage.getItem("sessions");
  Sessions = JSON.parse(Sessions);

  function handleSubmit(e) {
    e.preventDefault();

    let ExsistingUser;

    if (Sessions) {
      ExsistingUser =
        Sessions && Sessions.IDs.find((i) => i.email == userEmail);
    }

    if (ExsistingUser) {

      setError("Email Id already exsist please login")
     
    }
    
    else {
      dispatch(
        HandleSignUp({
          username: userName,
          useremail: userEmail,
          userpassword: userPassword,
        }),
      );

      Navigate("/Login");
    }
  }

  return (
    <div id="SignupContainer">
      <ToastContainer />
      <div id="signup">
        <h3 style={{ paddingLeft: "15px", paddingTop: "5px" }}>Signup Here</h3>

        <form id="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder=" Enter Name..."
              name="name"
              style={{ maxWidth: "300px" }}
              required
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>
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
              onChange={(e) => setuserEmail(e.target.value)}
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
              onChange={(e) => setuserPassword(e.target.value)}
            />
          </div>
          {Error && <p className="text-danger mt-2">{Error}</p>}
         {!Error && <br />}
          <button type="submit" className="btn btn-primary">
            Signup
          </button>{" "}
          Already have an acccount?
        </form>

        <Link style={{ paddingLeft: "100px" }} to="/Login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
