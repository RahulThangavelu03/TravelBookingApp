import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./SignupComponent";
import { HandleLogin } from "../Features/UserData";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast, Zoom } from "react-toastify";

function LoginComponnent() {
  const [formEmail, setFormEmail] = useState();
  const [formPassword, setFormPassword] = useState();

  let userData = sessionStorage.getItem("sessions");
  userData = JSON.parse(userData);

  console.log(userData, "userDataaaaa");

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  function handleSubmit(e) {
    let ExsistingUser;
    e.preventDefault();

    try {
      if (userData) {
        ExsistingUser = userData.IDs.find((i) => i.email == formEmail);
      }

      console.log(ExsistingUser, "Exsistinguser");

      if (ExsistingUser) {
        dispatch(
          HandleLogin({ userEmail: formEmail, userPassword: formPassword }),
        );

        Navigate("/TripCatalog");
      } else {
        toast.error("account not found,please Signup", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      }
    } catch (error) {
      alert(error, "error");
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
          <br />
          <button type="submit" className="btn btn-primary">
            Login
          </button>{" "}
          don't have acccount?
        </form>

        <Link style={{ paddingLeft: "100px" }} to="/Signup">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default LoginComponnent;
