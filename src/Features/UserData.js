
import { createSlice } from '@reduxjs/toolkit'
import tours from '../assets/data/tours'
import { useInRouterContext } from 'react-router'


const UserData = createSlice(
    {

        name: "Users",
        initialState: {

activeuser:"",
IDs:[]

        },
        reducers: {

 HandleSignUp(state, action) {

                try {

                    let { username, useremail, userpassword } = action.payload

                    let exsistingValue = JSON.parse(sessionStorage.getItem("sessions")) || {

                        activeuser:"",
                        IDs:[]
                    }
                 
 const updatedIDs = [...exsistingValue.IDs, { "name": username, "email": useremail, "password":userpassword, Tours: [] }]
                    
const newSessionData = {

                        "activeuser": useremail,

                        "IDs": updatedIDs

                    }

                    sessionStorage.setItem("sessions", JSON.stringify(newSessionData))
                    
  state.activeuser = useremail

    state.IDs=[... updatedIDs]
   
 }

   catch (error) {
                    console.log(error, "error message")

                }
},

 HandleLogin(state, action) {


                const { userEmail } = action.payload

                let sessions =   JSON.parse(sessionStorage.getItem("sessions"))
              
                sessions.activeuser = userEmail

                console.log(sessions, "LOginSessions")
                sessionStorage.setItem("sessions", JSON.stringify(sessions))

      state.activeuser = userEmail;



            },

  HandleLogOut(state, action) {

              

               let Sessions = sessionStorage.getItem("sessions")

             console.log(Sessions,"sessions in handlelogout")

              console.log(JSON.parse(JSON.stringify(state)),"state in out=========")

              console.log(state.IDs,"state.IDs=====")


try {

                    if (!Sessions) {
                        alert("No user ID found")

                    }
                
                    else {

                        Sessions = JSON.parse(Sessions)
                        

                        let NewSessions ={}

    if (Sessions.IDs.length >= 1)
         {
                 let IDtoBeRemoved = Sessions.activeuser
                            console.log(IDtoBeRemoved, "IDtoBERemoved")

                            let updatedIDs = Sessions.IDs.filter(i => i.email !== IDtoBeRemoved)
                            console.log(Sessions.IDs.length, "Sessions>IDS.length")
                            console.log(updatedIDs, "upadatedIDSSSSSSSSSs")
                            let NewActiveUser = updatedIDs.length >= 1 ? updatedIDs[updatedIDs.length - 1].email : ""
                            console.log(NewActiveUser, "Newactuveuser")



                            console.log(NewSessions, "PreSessionsssssssssss")
                            console.log(updatedIDs.length, " before if updatedIDSssssssss")

                            if (updatedIDs && updatedIDs.length >= 1) {

                                NewSessions = {
                                    "activeuser": NewActiveUser,
                                    "IDs": [
                                        ...updatedIDs
                                    ]

                                }

                            }


                            else{

                                NewSessions= {

activeuser:"",
IDs:[]

        }
                            }
                            console.log(updatedIDs, " after if updatedIDssssssssss")
                            console.log(NewActiveUser, "Newactiveuserrrr")
                              sessionStorage.setItem("sessions", JSON.stringify(NewSessions))
                        state.activeuser=NewSessions.activeuser
                        state.IDs= updatedIDs.map(user=>({ ...user,
                            Tours:[...user.Tours]


                        }))

                        }

                        else {


                            NewSessions = {
                                "activeuser": "",
                                "IDs": [

                                ]

                            }
                        }


                        console.log(NewSessions, "NewSessionsssss")

                      

   }

                }
              catch (error) {

                     console.log(error, "error inlogout")
        }



            },


  MyToursAction(state, action) {


                let temp = sessionStorage.getItem("sessions")

                let MyTourData = JSON.parse(temp) || { "tours": [] }
                console.log(MyTourData, "MytourDataInitallllllll")

                let activeuser = MyTourData.activeuser
                console.log(activeuser, "activeuser",)

                let index = MyTourData.IDs.findIndex(i => i.email == activeuser)
                console.log(index,"indexxxx")
               
     MyTourData.IDs[index].Tours.push(action.payload)
            
                console.log(MyTourData, "mytourdata laterrrrrrrr")

                sessionStorage.setItem("sessions", JSON.stringify(MyTourData));
                state.IDs=MyTourData.IDs.map(users=>({...users,

                    Tours:[...users.Tours]



                }))


            },

        SwitchActiveUser(state,action ){

   
               let MyTourData = JSON.parse(sessionStorage.getItem("sessions"))
                MyTourData.activeuser = action.payload
                  sessionStorage.setItem("sessions", JSON.stringify(MyTourData));
                  state.activeuser=action.payload

 },






        },

           extraReducers: (builder) => {
    builder.addCase("user/hydrate", (state, action) => {
      const { activeuser, IDs } = action.payload;
      state.activeuser = activeuser;

      // Deep copy of Tours to ensure immutability
      state.IDs = IDs.map((user) => ({
        ...user,
        Tours: Array.isArray(user.Tours) ? [...user.Tours] : [],
      }));
    });
  }


    }
)

export const { HandleSignUp, HandleLogin, HandleLogOut, MyToursAction,SwitchActiveUser ,DataPersistance} = UserData.actions



export const hydrateFromSession = () => (dispatch) => {
  const SessionsData = JSON.parse(sessionStorage.getItem("sessions"));
  if (SessionsData && SessionsData.IDs?.length > 0) {
    dispatch({
      type: "user/hydrate",
      payload: SessionsData,
    });
  }
};







export default UserData.reducer














