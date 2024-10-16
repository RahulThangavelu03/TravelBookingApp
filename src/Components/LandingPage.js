import React from "react"
import Carousel_Component from "./Carousel_Component"
import Carousel from "../CarouselData.json"
import tours from "../assets/data/tours"
// import experience from "../src/assets/images/experience.png"
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
            <div id="slider">
                <Carousel_Component data={tours}></Carousel_Component>

            </div>
            <br /><br />


            <p style={{ fontWeight: "Bold" }}>Please feel free to check out our Travel Catalog Page</p>


        </div>
    )
}

export default LandingPage