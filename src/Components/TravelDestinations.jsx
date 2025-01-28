import React from "react"
import { useParams } from "react-router-dom"
import tours from "../assets/data/tours"

function TravelDestination() {

    const { key } = useParams()
    console.log(key, "iiiiiii")
    const Data = tours

    console.log(Data, "daat")

    const ParticularDestination = Data.filter(value => value.key == key)
    console.log(ParticularDestination, "particular")

    return (

        <div>

            {key}
        </div>
    )
}

export default TravelDestination