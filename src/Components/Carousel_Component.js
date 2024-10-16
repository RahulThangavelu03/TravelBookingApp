import React from "react"
import Dummy from "../assets/data/tours.json"


function Carousel_Component({ data }) {


    console.log(data, "data")
    return (

        <div>

            {/* 

            {Dummy && Dummy.Dummy.map((item, index) => {
                const imagePath = require(`${item.photo}`)

                return (


                    <img src={imagePath} key={index}></img>
                )

            })} */}

        </div>

    )


}

export default Carousel_Component