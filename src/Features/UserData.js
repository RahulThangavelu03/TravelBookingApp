
import { configureStore, createSlice } from '@reduxjs/toolkit'



const UserData = createSlice({

    name: "Users",
    initialState: [],
    reducers: {

        HandleUserRequest(state, action) {

            let { userEmail, userPassword } = action.payload












        },


    }

})

export const { HandleUserRequest } = UserData.actions

export default UserData.reducer