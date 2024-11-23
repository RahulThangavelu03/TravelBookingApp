import React from "react"
import Carousel_Component from "./Carousel_Component"
import Carousel from "../CarouselData.json"
import tours from "../assets/data/tours"
// import experience from "../src/assets/images/experience.png"
import logo from "../assets/images/logo.png"
import experience from "../assets/images/experience.png"
import traveling from "../assets/images/traveling.jpg"
// import camera from "../src/assets/images/gallery-05.jpg"

// import tour1 from "../src/assets/tour-images/tour-img01.jpg"




function LandingPage() {








    return (

        <div className="HomePage">
            <div>

                <div style={{ fontWeight: "Bold" }}>Plan, Book, Explore—Your Journey Starts Here!</div>

                <div>Discover the best destinations and experiences with our user-friendly travel booking app. Whether you're looking for a relaxing beach holiday  </div>
                <div>or an adventurous mountain trek, we've got you covered. Start planning your perfect trip today!</div>
            </div><br />





            {/* <img src={tour1} alt="image" /> */}
            <div id="slider"><div id="carouselExampleIndicators" style={{ width: "800px" }} class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={logo} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={experience} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={traveling} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            </div>
            <br /><br />


            <p style={{ fontWeight: "Bold" }}>Please feel free to check out our Travel Catalog Page</p>


        </div>
    )
}

export default LandingPage