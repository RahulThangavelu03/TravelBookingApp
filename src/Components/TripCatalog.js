import React from "react"

import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import tours from "../assets/data/tours"
import { IoManSharp } from "react-icons/io5";
// import gallery06 from "../src/assets/images/gallery-06.jpg"





function TripCatalog() {

    const [location, setLocation] = useState()
    const [date, setDate] = useState()
    const [TotalMembers, setTotalMembers] = useState()
    const [CatalogData, setCatalogData] = useState(tours)
    const [searchData, setSearchData] = useState(tours)







    function HandleForm(e) {

        console.log("cliked")
        e.preventDefault()


        let temp = tours.filter(i => i.city.toLowerCase() == location.toLowerCase()).filter(i => i.capacity >= TotalMembers)


        temp.forEach(i => {

            let OpeningDate = i.Open_from
            let ClosingDate = i.Open_to
            console.log(ClosingDate, "closing")

            let D1 = new Date(OpeningDate)
            let D2 = new Date(ClosingDate)



            console.log(D1, "d11111111")

            console.log(D2, "d222222222")
        })











        // let Results=temp.filter(i=>i)

        // console.log(OpeningDate, "OpeningDate")
        // console.log(ClosingDate, " ClosingDate")







        console.log(temp, "temp")






    }


    function ShowAll() {
        setCatalogData(tours)

    }
    function MountainsFilter() {
        const Mountains = tours.filter(i => i.landscape == "Mountain")
        setCatalogData(Mountains)

    }

    function BeachFilter() {
        let Beaches = tours.filter(i => i.landscape == "Beach")
        setCatalogData(Beaches)

    }

    function IconicPlacesFilter() {
        let Destination = tours.filter(i => i.landscape == "Iconic")
        setCatalogData(Destination)


    }

    function AddtoMYTours() {

    }





    return (

        <div>

            <div id="form">

                <div class="container" style={{ "margin-left": "0" }}>
                    <form class="d-flex justify-content-between" onSubmit={HandleForm}>
                        <div class="row g-3 w-100">
                            <div class="col-sm">
                                <input type="text" class="form-control" placeholder="City" onChange={(e) => setLocation(e.target.value)} aria-label="City" />
                            </div>
                            <div class="col-sm">
                                <input type="Date" class="form-control" placeholder="Date" onChange={(e) => setDate(e.target.value)} aria-label="State" />
                            </div>
                            <div class="col-sm">
                                <input type="text" class="form-control" placeholder={"members"} onChange={(e) => setTotalMembers(e.target.value)} aria-label="Zip" />
                            </div>
                            <div class="col-sm">
                                <input type="submit" class="btn btn-primary w-30" value="Search" />
                            </div>
                        </div>
                    </form>
                </div>





            </div><br /><br />

            <div>The search results may be affected due to number of members selected and season time of the year...</div><br /><br />

            <div id="filter">
                <button type="button" class="btn btn-primary" onClick={ShowAll}> Show All</button>

                <button type="button" class="btn btn-primary" onClick={BeachFilter}>Beaches</button>
                <button type="button" class="btn btn-primary" onClick={MountainsFilter}>Mountains</button>
                <button type="button" class="btn btn-primary" onClick={IconicPlacesFilter}>Iconic Places and stays</button>


            </div><br />

            <div id="CatalogOptions">

                {CatalogData.map((i) => {
                    return (
                        <div>

                            <img id="Catalogimage" src={i.image} alt={i.title} />


                            <p style={{ fontWeight: "Bold" }}>Name: {i.name}</p>
                            <p>Description: {i.description}</p>
                            <p> City: {i.city}</p>
                            <p>Country: {i.country}</p>

                            <button type="button" class="btn btn-primary" onClick={AddtoMYTours}>Add to MyTours</button><br /><br />



                        </div>
                    )

                })}

            </div>


        </div>


    )
}
export default TripCatalog
