import "../App.css";
import tours from "../assets/data/tours.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TripCatalog from "./TripCatalog";
import NavBar from "./NavBar";
import MyTours from "./MyTours";
import LandingPage from "./LandingPage";
import LoginComponnent from "./Login";
import Signup from "./SignupComponent";
import TravelDestination from "./TravelDestinations";
import { ToastContainer, toast, Zoom } from "react-toastify";

import ErrorBoundry from "./ErrorBoundry";

function App() {
  console.log(tours, "tourdssss");

  return (
    <div>
      <ErrorBoundry>
        <BrowserRouter>
          <NavBar></NavBar>
          <br />
          <br />

          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/Tours" element={<MyTours></MyTours>}></Route>
            <Route
              path="/TripCatalog"
              element={<TripCatalog></TripCatalog>}
            ></Route>
            <Route
              path="/Login"
              element={<LoginComponnent></LoginComponnent>}
            ></Route>
            <Route path="/Signup" element={<Signup></Signup>}></Route>
            <Route
              path="/destinations/:key"
              element={<TravelDestination></TravelDestination>}
            ></Route>
          </Routes>

          <ToastContainer />
        </BrowserRouter>
      </ErrorBoundry>
    </div>
  );
}
export default App;
