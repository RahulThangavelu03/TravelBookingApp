import { useDispatch } from "react-redux";

import { HandleLogOut } from "./Features/UserData";



function useLogOut() {


    const dispatch = useDispatch()

    const PerformLogout = () => {
        dispatch(HandleLogOut())


    }
    return { PerformLogout }


}

export default useLogOut