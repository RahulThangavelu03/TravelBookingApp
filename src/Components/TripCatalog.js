import React from "react"
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import tours from "../assets/data/tours"
import { IoManSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { MyToursAction } from "../Features/UserData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import gallery06 from "../src/assets/images/gallery-06.jpg"



function TripCatalog() {

    const [location, setLocation] = useState()
    const [formdate, setFormDate] = useState()
    const [TotalMembers, setTotalMembers] = useState()
    const [CatalogData, setCatalogData] = useState(tours)
    const [searchData, setSearchData] = useState(tours)

    const userIdExsist = useSelector(state => state.User)
    const Dispatch = useDispatch()
    const Navigate = useNavigate()




    function HandleForm(e) {

        console.log("cliked")
        e.preventDefault()


        let temp = tours.filter(i => i.city.toLowerCase() == location.toLowerCase()).filter(i => i.capacity >= TotalMembers)
        let D1
        let D2

        temp.forEach(i => {

            let OpeningDate = i.Open_from
            let ClosingDate = i.Open_to
            console.log(ClosingDate, "closing")

            D1 = new Date(OpeningDate)
            D2 = new Date(ClosingDate)


            // console.log(D1, "d11111111")
            // console.log(D2, "d222222222")
        })


        console.log(formdate, "formdatw")

        let D3 = new Date(formdate)

        console.log(D3, "de33333")

        if (D3 >= D1 && D3 <= D2) {

            setCatalogData(temp)
            console.log(searchData, "searchdata")

        }

        else {
            setCatalogData([])
        }


        console.log(temp, "temp")

    }


    function ShowAll() {
        setCatalogData(tours)

    }
    function MountainsFilter() {
        const Mountains = CatalogData.filter(i => i.landscape == "Mountain")
        setCatalogData(Mountains)

    }

    function BeachFilter() {
        let Beaches = CatalogData.filter(i => i.landscape == "Beach")
        setCatalogData(Beaches)

    }

    function IconicPlacesFilter() {
        let Destination = CatalogData.filter(i => i.landscape == "Iconic")
        setCatalogData(Destination)


    }

    function AddtoMYTours(i, e) {

        e.stopPropagation()

        console.log(i, "ii")



        let temp = sessionStorage.getItem("sessions")

        // console.log(temp, "tempppppppppppppp")

        if (temp) {


            Dispatch(MyToursAction(i))

        }

        else {


            alert("user account not found please login or SignUp")
        }


    }


    function HandleClick() {

        alert("clicked")
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
                                <input type="Date" class="form-control" placeholder="Date" onChange={(e) => setFormDate(e.target.value)} aria-label="State" />
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

                {CatalogData.length ? CatalogData.map((i) => {
                    return (
                        <div key={i.key} onClick={() => HandleClick()}>

                            <img id="Catalogimage" src={i.image} alt={i.title} />


                            <p style={{ fontWeight: "Bold" }}>Name: {i.name}</p>
                            <p>Description: {i.description}</p>
                            <p> City: {i.city}</p>
                            <p>Country: {i.country}</p>

                            <button type="button" class="btn btn-primary" onClick={(e) => AddtoMYTours(i, e)}>Add to MyTours</button><br /><br />



                        </div>
                    )

                }) : <p id="para">Hmm... nothing here. Maybe try searching for your next dream destination?</p>}

            </div>


        </div>


    )
}
export default TripCatalog
