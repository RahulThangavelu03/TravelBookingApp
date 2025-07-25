import React from "react"
import { useParams } from "react-router-dom"
import tours from "../assets/data/tours"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ToastContainer, toast ,Zoom } from 'react-toastify';
import { MyToursAction } from "../Features/UserData"
import { useSelector } from "react-redux"


function TravelDestination() {

    const { key } = useParams()

    const Data = tours

const SelectedDestination = Data.filter(value => value.key == key)

const Navigate=useNavigate()
const dispatch =useDispatch()
const UserData=useSelector(state=>state.User)
const activeUser= UserData.activeuser   

const MytoursData=UserData.IDs.find(i=>i.email==activeUser)




function AddtoMyTours(i){


    if(!(UserData.IDs.length>0)){


toast.warn('Account not found Login/Sign Up ', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
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
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
})

dispatch(MyToursAction(i))




}

else{

 toast.warn('Destination is already added to MyTours ', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
})
 


}

}




function ToTripCatalog()
{

    Navigate("/TripCatalog")

}




    return (

        
        <div id ="DestinationConatiner">
            
<ToastContainer/>
            <div >

{SelectedDestination && SelectedDestination .map((i)=>{

return(

<div id="DestinationCard">
<img src={i.image} id="IndividualImage" alt={i.title}/><br/><br/>

<p style={{ fontWeight: "Bold" }}>Name: {i.name}</p>
                            <p>Description: {i.description}</p>
                            <p> City: {i.city}</p>
                            <p>Country: {i.country}</p>
                            <p>Capacity:{i.capacity}</p>
                            <p>Best Time to Visit: {i.BestTimeToVisit}</p>
                            <p>Description: {i.para}</p>
                            <p style={{ fontWeight: "Bold" }}>Intresting Fact: {i.fact}</p>
                            <button type="button" className="btn btn-primary" onClick={()=>ToTripCatalog()} >Go back</button> <nbsp/>
                            <button type="button" className="btn btn-primary" onClick={ ()=>AddtoMyTours(i)}>Add to MyTours</button><br /><br />


</div>



)



})}




            </div>

            
        </div>
    )
}

export default TravelDestination