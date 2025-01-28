import React, { useState } from "react"
// import logo from "../src/assets/images/logo.png"
import logo from "../assets/images/logo.png"
import LoginComponnent from "./Login"
import { Link } from "react-router-dom"
import LandingPage from "./LandingPage"
import useLogOut from "../useLogOut"
import { useSelector, useDispatch } from "react-redux"
import Signup from "./SignupComponent"
import { HandleLogOut } from "../Features/UserData"






function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const Accounts = useSelector(state => state.User)
    const Dispatch = useDispatch()




    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    function PerformLogOut() {

        Dispatch(HandleLogOut())

    }





    return (
        <nav className="NavBar">
            <img className="Logo" src={logo} alt="Logo" />
            <div className="Hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`NavLinks ${isMenuOpen ? "Show" : ""}`}>
                <Link to="/">HomePage</Link>
                <Link to="/TripCatalog">TripCatalog</Link>
                <Link to="/Tours">MyTours</Link>
                <div className="Dropdown">
                    <span
                        className="DropdownToggle"
                        onClick={toggleDropdown}
                    >
                        Accounts
                    </span>
                    <ul className={`DropdownMenu ${isDropdownOpen ? "Show" : ""}`}>
                        {Accounts && Accounts.map((i) => {
                            return (
                                <div key={i.email}>

                                    <li>{i.name}</li>
                                </div>
                            )

                        })}



                        <li> <button type="button" class="btn btn-danger" onClick={PerformLogOut}>LogOut</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;


// <ul className={`DropdownMenu ${isDropdownOpen ? "Show" : ""}`}>
// <li><Link to="/profile">Profile</Link></li>
// <li><Link to="/settings">Settings</Link></li>
// <li><Link to="/help">Help</Link></li>
// <li className="Logout"><Link to="/logout">Logout</Link></li>
// </ul>