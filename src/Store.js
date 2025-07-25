import { configureStore } from "@reduxjs/toolkit";
import UserData from "./Features/UserData";



const persistedState = sessionStorage.getItem('sessions')
  ? JSON.parse(sessionStorage.getItem('sessions'))
  : { activeuser: '', IDs: [] };



export const store = configureStore({




    reducer: {

        User: UserData


    },
      preloadedState: {
    UserData: persistedState,
  },
})