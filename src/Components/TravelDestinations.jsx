import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import tours from "../assets/data/tours"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ToastContainer, toast ,Zoom } from 'react-toastify';
import { MyToursAction } from "../Features/UserData"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion";


function TravelDestination() {

    const { key } = useParams()

    const Data = tours

const SelectedDestination = Data.filter(value => value.key == key)

const [ShowAlert,setShowAlert]=useState(null)
const Navigate=useNavigate()
const dispatch =useDispatch()
const UserData=useSelector(state=>state.User)
const activeUser= UserData.activeuser   





const MytoursData=UserData.IDs.find(Data=>Data.email==activeUser)

console.log(SelectedDestination,"selcetd")

console.log(UserData,"UserData in travelDestination")


function AddtoMyTours(i){


    if( UserData.IDs.length ===0)
        {

       console.log("if(UserData.IDs.length ===0)")
setShowAlert(true);
setTimeout(() => setShowAlert(false), 3000);


return


}

let id= i.key

   let Duplicate =  MytoursData ?.Tours?.findIndex(data=>data.name===i.name) 




 if(Duplicate==-1){


    
dispatch(MyToursAction(i))

    toast.success('Destination Added to Mytours', {
        toastId: `added-${i.key}`,
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

else{

 toast.warn('Destination is already added to MyTours ', {
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




function ToTripCatalog()
{

    Navigate("/TripCatalog")

}




    return (


        <div id ="DestinationConatiner">

            <div >

{SelectedDestination && SelectedDestination .map((Destination)=>{

console.log(Destination,"destiantion in map")
return(

<div id="DestinationCard">
<img src={Destination.image} id="IndividualImage" alt={Destination.title}/><br/><br/>

<p style={{ fontWeight: "Bold" }}>Name: {Destination.name}</p>
                            <p>Description: {Destination.description}</p>
                            <p> City: {Destination.city}</p>
                            <p>Country: {Destination.country}</p>
                            <p>Capacity:{Destination.capacity}</p>
                            <p>Best Time to Visit: {Destination.BestTimeToVisit}</p>
                            <p>Description: {Destination.para}</p>
                            <div>
{Destination?.OneDayExpense?.map((Expense,index)=>{
    return(

<div key={index}>
    
    <div style={{fontWeight:"Bold"}}>{Expense.type} :<span style={{fontFamily:"normal"}}>{Expense.amount}</span></div>

    
    </div>
    )
})}


                            </div>
                            <p style={{ fontWeight: "Bold" }}>Intresting Fact: {Destination.fact}</p>
                            <button type="button" className="btn btn-primary" onClick={()=>ToTripCatalog()} >Go back</button> <nbsp/>
                            <button type="button" className="btn btn-primary" onClick={ ()=>AddtoMyTours(Destination)}>Add to MyTours</button><br /><br />


</div>



)



})}




            </div>

    <AnimatePresence>
  {ShowAlert && (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.4 }}
   style={{
  position: "fixed",
  top: "20px",
  left: "0",
  right: "0",
  margin: "0 auto",
  background: "white",
  color:"#facc15",
  padding: "12px 24px",
  borderRadius: "8px",
  fontWeight: "600",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  zIndex: 9999,
  textAlign: "center",
  width: "fit-content",
  maxWidth: "90vw", 
}}

    >
      Account not found. Please Login / Sign Up.
    </motion.div>
  )}
</AnimatePresence>



            
        </div>
    )
}

export default TravelDestination