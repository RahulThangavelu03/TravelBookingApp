import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IncreaseHeadCount,
  DecreaseHeadCount,
  DeleteDestination,
} from "../Features/UserData";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast, Zoom } from "react-toastify";

function MyTours() {
  const MyToursData = useSelector((state) => state.User);

  const Dispatch = useDispatch();

  const activeuser = MyToursData.activeuser;

  const UserData = MyToursData.IDs.filter((i) => i.email == activeuser);

  console.log(UserData, "mytours userdtaaaaaa");
  //   console.log(UserData[0].name," userdtaaaaaa.name=====")

  //  console.log(UserData[0].Tours," userdtaaaaaa.Tours=====")

  function HandleIncreaseCount(Destination) {
    const Capacity = Destination.capacity;

    if (Destination.Count >= Capacity)
      return toast.warn("You can only select count less than Maximum Capacity", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });

    Dispatch(IncreaseHeadCount(Destination));
  }

  function HandleDecreaseCount(Destination) {
    Dispatch(DecreaseHeadCount(Destination));
  }

  function HandleDelete(Destination) {
    Dispatch(DeleteDestination(Destination));
  }

  return (
  <div id="MytoursContainer">
    <h3>
      {UserData?.[0]?.name
        ? `${UserData[0].name}'s My Tours Section`
        : "My Tours Section "}
    </h3>

    <div style={{fontSize:"20px"}}>
      The prices listed below exclude airfare and may vary depending on the
      season and time of year...
    </div>
    <br /><br/>

    <div>
      {UserData?.[0] ? (
        UserData[0].Tours?.length > 0 ? (
          <>
            <div id="MytourFlex">
              {UserData[0].Tours.map((Destination) => (
                <div id="MyToursFlex" key={Destination.key}>
                  <div>
                    <img
                      id="MyToursImg"
                      src={Destination.image}
                      alt={Destination.name}
                    />
                    <div style={{ fontWeight: "bold" }}>
                      Name: {Destination.name}
                    </div>
                    <div>City: {Destination.city}</div>
                    <div>Country: {Destination.country}</div>
                    <div>Capacity: {Destination.capacity} people</div>
                    <div style={{ fontWeight: "bold" }}>
                      ApproxDailyExpense : ₹ {Destination.ApproxDailyExpense} (1 Adult)
                    </div><br/>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{ margin: "10px", background: " #FF7518" }}
                      onClick={() => HandleIncreaseCount(Destination)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-info"
                      style={{ margin: "10px", background: " #FF7518" }}
                      onClick={() => HandleDecreaseCount(Destination)}
                    >
                      -
                    </button>
                  </div>

                  <div>
                    {Destination.Count} X {Destination.ApproxDailyExpense} =
                  </div>
                  <div>₹ {Destination.ApproxDailyExpense * Destination.Count}</div>

                  <FaTrash
                    onClick={() => HandleDelete(Destination)}
                    id="Deletebutton"
                  />
                </div>
              ))}
            </div><br/>


<>
<div style={{height:"1px",backgroundColor:"#FF7518",marginLeft:"30px",border:"none"}}></div>
            <div id="Total" style={{ marginTop: "15px", fontWeight: "bold" }}>
              Total : ₹{" "}
              {UserData[0].Tours.reduce(
                (sum, tour) => sum + tour.ApproxDailyExpense * tour.Count,0
              )}
            </div>
            </>
          </>
        ) : (
          
          
          <h4 style={{ marginTop: "20px", fontStyle: "italic" }}>
            No tours booked yet. Start adding tours!
          </h4>
        
        )
      ) : (
        
        
        <h3 style={{ marginTop: "20px" }}>
          No data available.
        </h3>
        
      )}
    </div>
  </div>
)}

export default MyTours