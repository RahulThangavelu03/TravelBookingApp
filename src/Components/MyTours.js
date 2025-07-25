import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from "react-redux"




function MyTours() {

const MyToursData =useSelector(state=>state.User)


 const activeuser = MyToursData.activeuser

 const UserData = MyToursData.IDs.filter(i=> i.email==activeuser)

 console.log(UserData,"mytours userdtaaaaaa")
 
 console.log(UserData.Tours," userdtaaaaaa.Tours=====")





    return (

        <div>


<h3>My Tours Section </h3><br/>


<div>
{/* 
<i class="fa-regular fa-circle-user"></i> */}




<i class="fa-solid fa-circle-user"></i>



</div>
<hr></hr>
            


<div id="Mytour">
    {UserData.Tours? UserData.Tours.map((i=>{

return (

    <div key = {i.key}>

        <div>{i.city}</div>
           <div>{i.country}</div>
   <div></div>
              <div></div>




        </div>



)




    })):<p>hh</p>}




</div>


        </div>

    )
}

export default MyTours