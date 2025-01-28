import React from "react"
import Carousel_Component from "./Carousel_Component"
import Carousel from "../CarouselData.json"
import tours from "../assets/data/tours"
import logo from "../assets/images/logo.png"
import experience from "../assets/images/experience.png"
import traveling from "../assets/images/traveling.jpg"
import { Link } from "react-router-dom"


function LandingPage() {








    return (

        <div className="HomePage">
            <div>

                <div style={{ fontWeight: "Bold" }}>Plan, Book, Explore—Your Journey Starts Here!</div>

                <div>Discover the best destinations and experiences with our user-friendly travel booking app. Whether you're looking for a relaxing beach holiday  </div>
                <div>or an adventurous mountain trek, we've got you covered. Start planning your perfect trip today!</div>
            </div><br />


            <Carousel_Component></Carousel_Component><br /><br />


            <div style={{ fontWeight: "Bold" }}>Please feel free to check out our Travel Catalog Page...

                <span style={{ padding: "28px" }}><Link to="/Login">Login</Link >/<Link to="/Signup">Signup</Link></span> </div>

        </div>
    )
}

export default LandingPage