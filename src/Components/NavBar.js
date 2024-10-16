import React from "react"
// import logo from "../src/assets/images/logo.png"
import logo from "../assets/images/logo.png"
import LoginComponnent from "./Login"
import { Link } from "react-router-dom"
import LandingPage from "./LandingPage"

import Signup from "./SignupComponent"

function NavBar() {

    return (

        <div>

            <div className="NavBar">

                <img className="Logo" src={logo} alt="logo"></img>
                <div style={{ padding: "28px" }}><Link to="/">HomePage</Link></div>
                <div style={{ padding: "28px" }}><Link to="/TripCatalog">TripCatalog</Link></div>
                <div style={{ padding: "28px" }}><Link to="/Tours">MyTours</Link></div>
                <div style={{ padding: "28px" }}><Link to="/Login">Login</Link >/<Link to="/Signup">Signup</Link></div>







            </div>
        </div>
    )
}

export default NavBar