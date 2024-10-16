import React, { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import Signup from "./SignupComponent"
import { HandleUserRequest } from "../Features/UserData"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

function LoginComponnent() {


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const dipatach = useDispatch()




    function handleSubmit() {


        // let value = { userEmail: email, userPassword: password }
        dipatach(HandleUserRequest({ userEmail: email, userPassword: password }))


    }




    return (

        <div id="LoginContainer">

            <div id="Login">
                <h3 style={{ paddingLeft: "15px", paddingTop: "5px" }}>Login Here</h3>

                <form id="form" onSubmit={handleSubmit}>


                    <div className="form-group"><br />
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"

                            style={{ maxWidth: '300px' }}
                            required

                            onChange={(e) => setEmail(e.target.value)}
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

                            onChange={(e) => setPassword(e.target.value)}
                        />



                    </div><br />
                    <button type="submit" className="btn btn-primary">Login</button> don't have acccount?
                </form>

                <Link style={{ paddingLeft: "100px" }} to="/Signup">Signup</Link>








            </div>
        </div>
    )


}

export default LoginComponnent