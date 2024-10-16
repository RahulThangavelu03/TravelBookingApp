import { configureStore } from "@reduxjs/toolkit";
import UserData from "./Features/UserData";


export const store = configureStore({

    reducer: {

        User: UserData


    }
})