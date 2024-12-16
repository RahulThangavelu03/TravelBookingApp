import React from "react"
// import logo from "../src/assets/images/logo.png"
import logo from "../assets/images/logo.png"
import LoginComponnent from "./Login"
import { Link } from "react-router-dom"
import LandingPage from "./LandingPage"
import useLogOut from "../useLogOut"

import Signup from "./SignupComponent"

function NavBar() {


    const { PerformLogout } = useLogOut()
    return (

        <div>

            <div className="NavBar">

                <img className="Logo" src={logo} alt="logo"></img>
                <div style={{ padding: "28px", color: "orange" }}><Link to="/">HomePage</Link></div>
                <div style={{ padding: "28px" }}><Link to="/TripCatalog">TripCatalog</Link></div>
                <div style={{ padding: "28px" }}><Link to="/Tours">MyTours</Link></div>
                <div style={{ padding: "28px" }}><Link to="/Login">Login</Link >/<Link to="/Signup">Signup</Link></div>
                <input type="button" value="Logout" onClick={PerformLogout} />






            </div>
        </div >
    )
}

export default NavBar