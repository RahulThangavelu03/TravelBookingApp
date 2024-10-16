import React from "react"
import Login from "../Components/Login"
import { Link } from "react-router-dom"
import { useState } from "react"

function Signup() {


    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()




    function handleSubmit(e) {



        alert(e, "eeeee")

        console.log(e, "eee")

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

                            onChange={(e) => setName(e.target.value)}

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
                    <button type="submit" className="btn btn-primary">Signup</button> Already have an acccount?
                </form>

                <Link style={{ paddingLeft: "100px" }} to="/Login">Login</Link>








            </div>
        </div>
    )
}

export default Signup