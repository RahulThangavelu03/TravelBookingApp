import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tours from "../assets/data/tours";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { AddToMyToursSection } from "../Features/UserData";
import { useSelector } from "react-redux";

function TravelDestination() {
  const { key } = useParams();

  const Data = tours;

  const SelectedDestination = Data.filter((value) => value.key == key);

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state.User);
  const activeUser = UserData.activeuser;

  const MytoursData = UserData.IDs.find((Data) => Data.email == activeUser);

  function AddtoMyTours(i) {
    if (UserData.IDs.length === 0) {
      toast.warn("Destination is already added to MyTours ", {
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

      return;
    }

    let id = i.key;

    let Duplicate = MytoursData?.Tours?.findIndex(
      (data) => data.name === i.name,
    );

    if (Duplicate == -1) {
      dispatch(AddToMyToursSection(i));

      toast.success("Destination Added to Mytours", {
        toastId: `added-${i.key}`,
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
    } else {
      toast.warn("Destination is already added to MyTours ", {
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
    }
  }

  function ToTripCatalog() {
    Navigate("/TripCatalog");
  }

  return (
    <div id="DestinationConatiner">
      <div>
        {SelectedDestination &&
          SelectedDestination.map((Destination) => {
            
            return (
              <div id="DestinationCard">
                <img
                  src={Destination.image}
                  id="IndividualImage"
                  alt={Destination.title}
                />
                <br />
                <br />
                <p style={{ fontWeight: "Bold" }}>Name: {Destination.name}</p>
                <p>Description: {Destination.description}</p>
                <p> City: {Destination.city}</p>
                <p>Country: {Destination.country}</p>
                <p>Capacity:{Destination.capacity}</p>
                <p>Best Time to Visit: {Destination.BestTimeToVisit}</p>
                <p>Description: {Destination.para}</p>
                <p>Open from: {Destination.Open_from}</p>
                <p>Closes On: {Destination.Open_to}</p>
                <div>
                  {Destination?.OneDayExpense?.map((Expense, index) => {
                    return (
                      <div key={index}>
                        <div style={{ fontWeight: "Bold" }}>
                          {Expense.type} :
                          <span style={{ fontFamily: "normal" }}>
                            ₹{Expense.amount}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p style={{ fontWeight: "Bold" }}>
                  Intresting Fact: {Destination.fact}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => ToTripCatalog()}
                >
                  Go back
                </button>{" "}
                <nbsp />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => AddtoMyTours(Destination)}
                >
                  Add to MyTours
                </button>
                <br />
                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TravelDestination;
