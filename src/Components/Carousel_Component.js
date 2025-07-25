import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery05 from "../assets/images/gallery-05.jpg"
import Tour1 from "../assets/images/tour-img07.jpg"
import Tour2 from "../assets/images/tour-img02.jpg"
import Tour5 from "../assets/images/tour-img05.jpg"
import Video from "../assets/images/hero-video.mp4"


function Carousel_Component({ data }) {




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,

        beforeChange: (current, next) => {

            const videos = document.querySelectorAll("video");
            videos.forEach((video) => video.pause());
        },
    };


    return (

        <div className="SliderContainer">



            <Slider {...settings}>
                <div id="scrollbar">
                    <img src={Tour1} className="Simage" alt="cour"></img>
                </div>
                <div>
                    {/* <img src={Experience} className="Simage" alt="cout"></img> */}
                    <video className="Simage" controls>
                        <source src={Video} type="video/mp4"></source>
                    </video>

                </div>
                <div>
                    <img src={Gallery05} className="Simage" alt="cour"></img>
                </div>
                <div>
                    <img src={Tour2} className="Simage" alt="galr"></img>
                </div>
                <div>
                    <img src={"https://img.freepik.com/free-photo/vertical-high-angle-shot-white-buildings-santorini-greece_181624-31643.jpg?t=st=1726220342~exp=1726223942~hmac=df476a7a9a55badc0a83479c2ece9893478b0275dc5c8ac860d7eb59335e92e5&w=360"} className="Simage" alt="galr"></img>
                </div>
                <div>

                    <img src={Tour5} className="Simage" ></img>

                </div>
            </Slider>


        </div>

    )


}

export default Carousel_Component








