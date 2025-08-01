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
 import { ToastContainer, toast ,Zoom } from 'react-toastify';

// import gallery06 from "../src/assets/images/gallery-06.jpg"



function TripCatalog() {

    const [location, setLocation] = useState()
    const [formdate, setFormDate] = useState()
    const [TotalMembers, setTotalMembers] = useState()
    const [CatalogData, setCatalogData] = useState(tours)
    const[CopyValue,setCopyValue] = useState(tours)
  


    const Dispatch = useDispatch()
    const Navigate = useNavigate()


    const UserData=useSelector(state=>state.User)
    const activeUser= UserData.activeuser   
   
    const MytoursData=UserData.IDs.find(user=>user.email==activeUser)
    

function HandleForm(e) {
    e.preventDefault();

  if (!location || !formdate || !TotalMembers) {
    
toast.warn('Please fill all fields of the form ', {
position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
})
  

return


  }




    let temp = tours.filter(tour =>
        tour.name.toLowerCase().startsWith(location.toLowerCase().trim()) &&
        Number(tour.capacity) >= Number(TotalMembers)
    );

    let dateObj = new Date(formdate);
    let month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    let day = dateObj.getDate().toString().padStart(2, '0');
    let formMonthDay = `${month}-${day}`; 

    
    let filtered = temp.filter(tour => {
        let [openMonth, openDay] = tour.Open_from.split('/');
        let [closeMonth, closeDay] = tour.Open_to.split('/');

        let from = `${openMonth.padStart(2, '0')}-${openDay.padStart(2, '0')}`;
        let to = `${closeMonth.padStart(2, '0')}-${closeDay.padStart(2, '0')}`;

        return formMonthDay >= from && formMonthDay <= to;
    });

    setCopyValue(filtered);
}


   
    
     
    function ButtonFilter(type){

    if(type=="ShowAll"){

setCopyValue(CatalogData)

    }
    else{
 let Destination = CatalogData.filter(Data => Data.landscape == type)

 setCopyValue(Destination)

    }
    
}



    function AddtoMYTours(i, e) {

        e.stopPropagation()


                if(!(UserData.IDs.length>0)){
          
toast.warn('Account not found Login/Sign Up ', {
position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
})
          

 return 
        
                }
        
           let Duplicate =  MytoursData.Tours.findIndex(data=>data.name==i.name) 
        
         if(Duplicate==-1){
     

        toast.success('Destination Added to Mytours', {
position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
})

        
        Dispatch(MyToursAction(i))
        
        }
        
        else{
        
        
        
toast.warn('Destination is already added to MyTours', {
position: "top-center",
autoClose: 2000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
})
          

  }
        



    }


    function HandleClick(i) {

        console.log(i, "keyyyyyyyyyyyy")
        Navigate(`/destinations/${i}`)

}


  return (

        <div>

            <div id="form">

                <div class="container" style={{ "marginleft": "0" }}>
                    <form class="d-flex justify-content-between" onSubmit={HandleForm}>
                        <div class="row g-3 w-100">
                            <div class="col-sm">
                                <input type="text" class="form-control" placeholder="Destination Name" onChange={(e) => setLocation(e.target.value)} aria-label="City" />
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

            <div style={{marginLeft:"20px"}}>The search results may be affected by number of members selected and season time of the year...</div><br /><br />

            <div id="filter">
          

                <button type="button" class="btn btn-primary" onClick={()=>ButtonFilter("ShowAll")}> Show All</button>

<button type="button" class="btn btn-primary" onClick={()=>ButtonFilter("Beach")}>Beaches</button>
<button type="button" class="btn btn-primary" onClick={()=>ButtonFilter("Mountain")}>Mountains</button>
<button type="button" class="btn btn-primary" onClick={()=>ButtonFilter("Iconic")}> Iconic Places-stays</button>


            </div><br />

            <div id="CatalogOptions">

                {CopyValue.length ? CopyValue.map((i) => {
                    return (
                        <div className="card" key={i.key} onClick={(e) => HandleClick(i.key)}>

                            <img id="Catalogimage" src={i.image} alt={i.title} />


                            <p style={{ fontWeight: "Bold" }}>Name: {i.name}</p>
                            <p>Description: {i.description}</p>
                            <p> City: {i.city}</p>
                         <p>Country: {i.country}</p>

                            <button type="button" className="btn btn-primary" onClick={(e) => AddtoMYTours(i, e)}>Add to MyTours</button><br /><br />
                            

  </div>
                    )

                }) : <p id="para">Hmm... nothing here. Maybe try searching for your next dream destination?</p>}

            </div>
             <ToastContainer/>
  </div>


    )
}
export default TripCatalog
