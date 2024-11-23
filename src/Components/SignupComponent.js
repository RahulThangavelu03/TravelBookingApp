import React from "react"
import Login from "../Components/Login"
import { Link } from "react-router-dom"
import { useState } from "react"
import { HandleSignUp } from "../Features/UserData"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

function Signup() {


    const [userName, setuserName] = useState()
    const [userEmail, setuserEmail] = useState()
    const [userPassword, setuserPassword] = useState()
    const Navigate = useNavigate()

    const dispatch = useDispatch()
    const state = useSelector(state => state.User)

    let Sessions = sessionStorage.getItem("sessions")
    Sessions = JSON.parse(Sessions)
    console.log(Sessions, "duplicateeee SIgnupcomp")



    console.log(state, "state in SIgnupCOmpoenet")


    function handleSubmit(e) {

        let ExsistingUser

        if (Sessions) {


            ExsistingUser = Sessions.IDs.find(i => i.email == userEmail)
        }

        if (ExsistingUser) {


            console.log(ExsistingUser, "exsistinguserExsisit")
            alert("user id already exsist please login")



        }

        else {

            dispatch(HandleSignUp({ username: userName, useremail: userEmail, userpassword: userPassword }))

            Navigate("/TripCatalog")
        }


    }



    return (

        <div id="SignupContainer">

            <div id="signup">
                <h3 style={{ paddingLeft: "15px", paddingTop: "5px" }}>Signup Here</h3>

                <form id="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=" Enter Name..."
                            name="name"

                            style={{ maxWidth: '300px' }}
                            required

                            onChange={(e) => setuserName(e.target.value)}

                        />
                    </div>

                    <div className="form-group"><br />
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"

                            style={{ maxWidth: '300px' }}
                            required

                            onChange={(e) => setuserEmail(e.target.value)}
                        />
                    </div><br />






                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"

                            required style={{ maxWidth: '300px' }}

                            onChange={(e) => setuserPassword(e.target.value)}
                        />



                    </div><br />
                    <button type="submit" className="btn btn-primary">Signup</button> Already have an acccount?
                </form>

                <Link style={{ paddingLeft: "100px" }} to="/Login">Login</Link>








            </div>
        </div>
    )
}

export default Signup