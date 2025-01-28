
import { configureStore, createSlice } from '@reduxjs/toolkit'
import tours from '../assets/data/tours'
import { useInRouterContext } from 'react-router'





const UserData = createSlice(
    {



        name: "Users",
        initialState: [],
        reducers: {

            HandleSignUp(state, action) {

                try {

                    let { username, useremail, userpassword } = action.payload



                    // state.push({ "name": username, "email": useremail, "password": userpassword })

                    console.log(state.User, "stateeeee")


                    let temp = sessionStorage.getItem("sessions")

                    console.log(temp, "HAndleusertemp")
                    let exsistingValue = temp ? JSON.parse(temp) : []
                    console.log(exsistingValue, "exsistigvalu")

                    if (!Array.isArray(exsistingValue.IDs)) {
                        exsistingValue.IDs = []
                    }


                    const updatedIDs = [...exsistingValue.IDs, { "name": username, "email": useremail, Tours: [] }]
                    console.log(exsistingValue, "exsistingvalue")
                    console.log(updatedIDs, "updatedId")

                    const sessions = {

                        "activeuser": useremail,

                        "IDs": updatedIDs

                    }

                    sessionStorage.setItem("sessions", JSON.stringify(sessions))
                    console.log(sessions, "sessions")
                    state.push(sessions)

                }




                catch (error) {

                    console.log(error, "error occurs")


                }
            },

            HandleLogin(state, action) {


                const { userEmail } = action.payload

                let UserData = sessionStorage.getItem("sessions")
                UserData = JSON.parse(UserData)
                UserData.activeuser = userEmail


                const sessions = {

                    ...{ UserData }

                }

                console.log(UserData, "LOgindataaaaaaa")
                console.log(sessions, "LOginSessions")
                sessionStorage.setItem("sessions", JSON.stringify(sessions))

            },


            HandleLogOut(state, action) {

                // alert("logout triggered")

                let Sessions = sessionStorage.getItem("sessions")

                console.log(Sessions, "Initiallllllll")

                try {

                    if (!Sessions) {
                        alert("No user ID found")

                    }
                    else {

                        Sessions = JSON.parse(Sessions)
                        console.log(Sessions, "sessions")
                        console.log(Sessions.IDs, "Sessions.IDs")

                        let Dummy = {}

                        if (Sessions.IDs.length >= 1) {


                            let IDtoBeRemoved = Sessions.activeuser
                            console.log(IDtoBeRemoved, "IDtoBERemoved")

                            let updatedIDs = Sessions.IDs.filter(i => i.email !== IDtoBeRemoved)

                            let NewActiveUser = updatedIDs.length >= 1 ? updatedIDs[updatedIDs.length - 1].email : ""
                            console.log(NewActiveUser, "Newactuveuser")


                            Sessions = {
                                "activeuser": NewActiveUser,
                                "IDs": [
                                    ...updatedIDs
                                ]
                            }

                            console.log(Sessions, "PreSessionsssssssssss")

                            let temp = {}


                            if (updatedIDs.length >= 1) {

                                Sessions = {
                                    "activeuser": NewActiveUser,
                                    "IDs": [
                                        ...updatedIDs
                                    ]

                                }

                                state = []
                                temp["activeuser"] = NewActiveUser
                                temp["IDs"] = [...updatedIDs]

                                state.push(temp)

                                console.log("Indiseloooooop")




                            }


                            console.log(updatedIDs, "updatedIDssssssssss")

                            console.log(NewActiveUser, "Newactiveuserrrr")


                        }

                        else {


                            Sessions = {
                                "activeuser": "",
                                "IDs": [

                                ]



                            }


                        }


                        console.log(Sessions, "NewSessionsssss")

                        sessionStorage.setItem("Sessions", JSON.stringify(Sessions))




                    }
                }
                catch (error) {

                    console.log(error, "error inlogout")

                }




                console.log("custom hook")
            },


            MyToursAction(state, action) {


                let temp = sessionStorage.getItem("sessions")

                //console.log(temp, "temppppppppp")

                let MyTourData = JSON.parse(temp) || { "tours": [] }
                console.log(MyTourData, "MytourDataInitallllllll")

                let activeuser = MyTourData.activeuser
                console.log(activeuser, "activeuser",)

                let index = MyTourData.IDs.findIndex(i => i.email == activeuser)
                let Duplicate = MyTourData.IDs[index].Tours.findIndex(i => i.key == action.payload.key)
                console.log(Duplicate, "DUplicateeeeeeeeeeeee")

                if (Duplicate == -1) {


                    MyTourData.IDs[index].Tours.push(action.payload)
                }


                else {
                    console.log(MyTourData, "esleparttttttttt")

                    return MyTourData

                }

                console.log(MyTourData, "mytourdata laterrrrrrrr")

                sessionStorage.setItem("sessions", JSON.stringify(MyTourData));


            }

        }
    }
)

export const { HandleSignUp, HandleLogin, HandleLogOut, MyToursAction } = UserData.actions

export default UserData.reducer










// HandleLogOut(state, action) {

//     // alert("logout triggered")

//     let Sessions = sessionStorage.getItem("sessions")

//     console.log(Sessions, "Initiallllllll")

//     try {

//         if (!Sessions) {
//             alert("No user ID found")

//         }
//         else {

//             Sessions = JSON.parse(Sessions)
//             console.log(Sessions, "sessions")

//             if (!Sessions.IDs || Sessions.IDs.length == 0) {


//                 let IDtoBeRemoved = Sessions.activeuser
//                 console.log(IDtoBeRemoved, "IDtoBERemoved")

//                 let updatedIDs = Sessions.IDs.filter(i => i.email !== IDtoBeRemoved)

//                 let NewActiveUser = updatedIDs.length >= 1 ? updatedIDs[updatedIDs.length - 1].email : ""
//                 console.log(NewActiveUser, "Newactuveuser")
//                 if (updatedIDs.length >= 1) {

//                     Sessions = {
//                         "activeuser": NewActiveUser,
//                         "IDs": [
//                             ...updatedIDs
//                         ]



//                     }

//                 }


//                 else {


//                     Sessions = {
//                         "activeuser": "",
//                         "IDs": [

//                         ]



//                     }


//                 }


//                 console.log(Sessions, "NewSessionsssss")

//                 sessionStorage.setItem("Sessions", JSON.stringify(Sessions))


//             }

//         }
//     }
//     catch (error) {

//         console.log(error, "error inlogout")

//     }




//     console.log("custom hook")
// },



