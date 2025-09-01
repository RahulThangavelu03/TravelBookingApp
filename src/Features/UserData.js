import { createSlice } from "@reduxjs/toolkit";
import tours from "../assets/data/tours";
import { useInRouterContext } from "react-router";
import { act } from "react";

const UserData = createSlice({
  name: "Users",
  initialState: {
    activeuser: "",
    IDs: [],
  },
  reducers: {
    HandleSignUp(state, action) {
      try {
        const { username, useremail, userpassword } = action.payload;

        const exsistingValue = JSON.parse(
          sessionStorage.getItem("sessions"),
        ) || {
          activeuser: "",
          IDs: [],
        };

        const updatedIDs = [
          ...exsistingValue.IDs,
          {
            name: username,
            email: useremail,
            password: userpassword,
            Tours: [],
          },
        ];

        const newSessionData = {
          activeuser: useremail,

          IDs: updatedIDs,
        };

        sessionStorage.setItem("sessions", JSON.stringify(newSessionData));

        state.activeuser = useremail;

        state.IDs = [...updatedIDs];
      } catch (error) {
        console.log(error, "error message");
      }
    },

    HandleLogin(state, action) {
      const { userEmail } = action.payload;

      const sessions = JSON.parse(sessionStorage.getItem("sessions"));

      sessions.activeuser = userEmail;

      console.log(sessions, "LOginSessions");
      sessionStorage.setItem("sessions", JSON.stringify(sessions));

      state.activeuser = userEmail;
    },

    HandleLogOut(state, action) {
      let Sessions = sessionStorage.getItem("sessions");

      console.log(Sessions, "sessions in handlelogout");

      console.log(JSON.parse(JSON.stringify(state)), "state in out=========");

      console.log(state.IDs, "state.IDs=====");

      try {
        if (!Sessions) {
          alert("No user ID found");
        } else {
          Sessions = JSON.parse(Sessions);

          let NewSessions = {};

          if (Sessions.IDs.length >= 1) {
            const IDtoBeRemoved = Sessions.activeuser;
            console.log(IDtoBeRemoved, "IDtoBERemoved");

            const updatedIDs = Sessions.IDs.filter(
              (i) => i.email !== IDtoBeRemoved,
            );
            console.log(Sessions.IDs.length, "Sessions>IDS.length");
            console.log(updatedIDs, "upadatedIDSSSSSSSSSs");
            const NewActiveUser =
              updatedIDs.length >= 1
                ? updatedIDs[updatedIDs.length - 1].email
                : "";
            console.log(NewActiveUser, "Newactuveuser");

            console.log(NewSessions, "PreSessionsssssssssss");
            console.log(updatedIDs.length, " before if updatedIDSssssssss");

            if (updatedIDs && updatedIDs.length >= 1) {
              NewSessions = {
                activeuser: NewActiveUser,
                IDs: [...updatedIDs],
              };
            } else {
              NewSessions = {
                activeuser: "",
                IDs: [],
              };
            }
            console.log(updatedIDs, " after if updatedIDssssssssss");
            console.log(NewActiveUser, "Newactiveuserrrr");
            sessionStorage.setItem("sessions", JSON.stringify(NewSessions));
            state.activeuser = NewSessions.activeuser;
            state.IDs = updatedIDs.map((user) => ({
              ...user,
              Tours: [...user.Tours],
            }));
          } else {
            NewSessions = {
              activeuser: "",
              IDs: [],
            };
          }

          console.log(NewSessions, "NewSessionsssss");
        }
      } catch (error) {
        console.log(error, "error inlogout");
      }
    },

    AddToMyToursSection(state, action) {
      const temp = sessionStorage.getItem("sessions");

      const MyTourData = JSON.parse(temp) || { tours: [] };
      console.log(MyTourData, "MytourDataInitallllllll");

      const activeuser = MyTourData.activeuser;
      console.log(activeuser, "activeuser");

      const index = MyTourData.IDs.findIndex((i) => i.email == activeuser);
      console.log(index, "indexxxx");

      const dummy = action.payload;
      dummy.Count = 1;
      dummy.ExpenseOfOneDestination = dummy.Count * dummy.ApproxDailyExpense;

      console.log(dummy, "ExpsenseofDUmmmyyyyyyyyy");

      console.log(MyTourData);

      if (!MyTourData.IDs[index].Tours.Total) {
        MyTourData.IDs[index].Tours.Total = 0;
      }

      MyTourData.IDs[index].Tours.Total += dummy.ExpenseOfOneDestination;

      MyTourData.IDs[index].Tours.push(dummy);

      console.log(MyTourData, "mytourdata laterrrrrrrr");

      sessionStorage.setItem("sessions", JSON.stringify(MyTourData));
      state.IDs = MyTourData.IDs.map((users) => ({
        ...users,

        Tours: [...users.Tours],
      }));
    },

    SwitchActiveUser(state, action) {
      const MyTourData = JSON.parse(sessionStorage.getItem("sessions"));
      MyTourData.activeuser = action.payload;
      sessionStorage.setItem("sessions", JSON.stringify(MyTourData));
      state.activeuser = action.payload;
    },

    IncreaseHeadCount(state, action) {
      console.log(action.payload, "action.paload in Incresecount");
      const { key } = action.payload;
      console.log(key, "key=============");
      const temp = state.activeuser;

      const activeuser = state.IDs.find((data) => data.email === temp);
      const index = state.IDs.findIndex(
        (user) => user.email == activeuser.email,
      );
      console.log(JSON.parse(JSON.stringify(activeuser)), "activeuser======");

      console.log(index, "index=========");

      for (let i = 0; i < state.IDs[index].Tours.length; i++) {
        if (state.IDs[index].Tours[i].key == key) {
          state.IDs[index].Tours[i].Count += 1;
        }
      }

      const NewSessionStorge = JSON.parse(JSON.stringify(state));
      console.log(NewSessionStorge, "NewSessiosntroge=======");
      sessionStorage.setItem("sessions", JSON.stringify(NewSessionStorge));
    },

    DecreaseHeadCount(state, action) {
      console.log(action.payload, "action.paload in Incresecount");
      const { key } = action.payload;
      console.log(key, "key=============");
      const temp = state.activeuser;

      const activeuser = state.IDs.find((data) => data.email === temp);
      const index = state.IDs.findIndex(
        (user) => user.email == activeuser.email,
      );
      console.log(JSON.parse(JSON.stringify(activeuser)), "activeuser======");

      console.log(index, "index=========");

      const selectedDestination = state.IDs[index].Tours.filter(
        (Destination) => Destination.key == key,
      );

      const Count = selectedDestination[0].Count;

      if (Count > 1) {
        for (let i = 0; i < state.IDs[index].Tours.length; i++) {
          if (state.IDs[index].Tours[i].key == key) {
            state.IDs[index].Tours[i].Count -= 1;
          }
        }
      } else {
        const FinalTours = state.IDs[index].Tours.filter(
          (Destination) => Destination.key !== key,
        );

        state.IDs[index].Tours = [...FinalTours];
      }

      const NewSessions = {
        activeuser: state.activeuser,
        IDs: state.IDs.map((users) => ({
          ...users,

          Tours: users.Tours.map((tours) => ({ ...tours })),
        })),
      };

      sessionStorage.setItem("sessions", JSON.stringify(NewSessions));
    },

    DeleteDestination(state, action) {
      const key = action.payload.key;
      const activeUser = state.activeuser;
      const index = state.IDs.findIndex((user) => user.email == activeUser);

      const NewTours = state.IDs[index].Tours.filter(
        (tours) => tours.key !== key,
      );

      state.IDs[index].Tours = NewTours;

      const NewSessionData = {
        activeuser: state.activeuser,
        IDs: state.IDs.map((ids) => ({ ...ids })),
      };

      sessionStorage.setItem("sessions", JSON.stringify(NewSessionData));
    },
  },

  extraReducers: (builder) => {
    builder.addCase("user/hydrate", (state, action) => {
      const { activeuser, IDs } = action.payload;
      state.activeuser = activeuser;

      state.IDs = IDs.map((user) => ({
        ...user,
        Tours: Array.isArray(user.Tours) ? [...user.Tours] : [],
      }));
    });
  },
});

export const {
  HandleSignUp,
  HandleLogin,
  HandleLogOut,
  AddToMyToursSection,
  SwitchActiveUser,
  DataPersistance,
  IncreaseHeadCount,
  DecreaseHeadCount,
  DeleteDestination,
} = UserData.actions;

export const hydrateFromSession = () => (dispatch) => {
  const SessionsData = JSON.parse(sessionStorage.getItem("sessions"));
  if (SessionsData && SessionsData.IDs?.length > 0) {
    dispatch({
      type: "user/hydrate",
      payload: SessionsData,
    });
  }
};

export default UserData.reducer;
