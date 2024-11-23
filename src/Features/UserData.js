
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


                    state.push({ "name": username, "email": useremail, "password": userpassword })

                    console.log(state.User, "stateeeee")


                    let temp = sessionStorage.getItem("sessions")

                    console.log(temp, "HAndleusertemp")
                    let exsistingValue = temp ? JSON.parse(temp) : []
                    console.log(exsistingValue, "exsistigvalu")

                    if (!Array.isArray(exsistingValue.IDs)) {
                        exsistingValue.IDs = []
                    }


                    const updatedIDs = [...exsistingValue.IDs, { "name": username, "email": useremail }]
                    console.log(exsistingValue, "exsistingvalue")
                    console.log(updatedIDs, "updatedId")

                    const sessions = {

                        "activeuser": useremail,

                        "IDs": updatedIDs

                    }

                    sessionStorage.setItem("sessions", JSON.stringify(sessions))
                    console.log(sessions, "sessions")

                }




                catch (error) {

                    console.log(error, "error occurs")


                }
            }

        },



        HandleLogin(state, action) {


            let UserData = sessionStorage.get("sessions")
            UserData = JSON.parse(UserData)

            console.log(UserData, "LOgindata")





        },







        MyToursAction(state, action) {


            let temp = sessionStorage.getItem("sessions")

            console.log(temp, "temppppppppp")

            let MyTourData = JSON.parse(temp) || { "tours": [] }
            console.log(MyTourData, "MytourDataInitallllllll")



            let activeuser = MyTourData.activeuser
            console.log(activeuser, "activeuser",)


            MyTourData[activeuser] = MyTourData[activeuser] || [];

            console.log(action.payload, "action.payload")


            let Duplicate = MyTourData[activeuser].find(i => i.name == action.payload.name)

            console.log(Duplicate, "duplicateeeeee")

            if (!Duplicate) {

                MyTourData[activeuser].push(action.payload)
            }

            else {

                MyTourData[activeuser] = MyTourData[activeuser]
            }

            console.log(MyTourData, "mytourdata laterrrrrrrr")


            sessionStorage.setItem("sessions", JSON.stringify(MyTourData));


        }

    }
)

export const { HandleSignUp, HandleLogin, MyToursAction } = UserData.actions

export default UserData.reducer