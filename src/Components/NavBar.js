import React, { useState, useEffect ,useRef} from "react";
// import logo from "../src/assets/images/logo.png"
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  HandleLogOut,
  SwitchActiveUser,
  hydrateFromSession,
} from "../Features/UserData";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const Dispatch = useDispatch();

  const Accounts = useSelector((state) => state.User) || {
    activeuser: "",
    IDs: [],
  };

  const Navigate = useNavigate();

  useEffect(() => {
    Dispatch(hydrateFromSession());
  }, [Dispatch]);


  console.log(Accounts, "accountssssssss");
  const activeuser = Accounts.activeuser;

  const AccountToBeLoggedOut =
    Accounts?.IDs?.length >= 1
      ? Accounts.IDs.find((user) => user.email == activeuser)
      : "";

  console.log(AccountToBeLoggedOut, "AccountToBeLoggedOut");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function PerformLogOut() {
    if (Accounts.IDs.length >= 1) {
      Dispatch(HandleLogOut(Accounts));

      setTimeout(() => {
        toast.success(
          `${AccountToBeLoggedOut.name}'s account has been Logged out Successfully`,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          },
        );
      }, 100);
    } else {
      toast.warn("Account not found Login/Sign Up ", {
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
  }

  function HandleSwitchUSer(user) {
    Dispatch(SwitchActiveUser(user.email));
    console.log(user, "user in Handleswicth");
  }

  return (
    <div>
      <nav className="NavBar">
        <img className="Logo" src={logo} alt="Logo" onClick={()=>Navigate("/")} />

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
            <span className="DropdownToggle" onClick={toggleDropdown}>
              Accounts
            </span>
            <ul className={`DropdownMenu ${isDropdownOpen ? "Show" : ""}`}>
              {Accounts
                ? Accounts.IDs.map((user) => {
                    return (
                      <li
                        className="dropdownoptions"
                        key={user.email}
                        onClick={(e) => HandleSwitchUSer(user)}
                        onMouseEnter={() => setHovered(user.email)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                          padding: "5px 12px",
                          cursor: "pointer",
                          backgroundColor:
                            user.email === activeuser
                              ? "#FF7518"
                              : "transparent",
                          color: hovered === user.email ? "blue" : "black",
                        }}
                      >
                        {user.name}{" "}
                      </li>
                    );
                  })
                : "No Account found"}

              <li style={{ cursor: "pointer" }} onClick={PerformLogOut}>
                LogOut
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
