import "../App.css"
import tours from "../assets/data/tours.json"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TripCatalog from "./TripCatalog";
import NavBar from "./NavBar";
import Tours from "./Tours";
import LandingPage from "./LandingPage";
import LoginComponnent from "./Login";
import Signup from "./SignupComponent";
import TravelDestination from "./TravelDestinations";





function App() {

  console.log(tours, "tourdssss")






  return (
    <div>

      <BrowserRouter>
        <NavBar></NavBar><br /><br />


        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/Tours" element={<Tours></Tours>}></Route>
          <Route path='/TripCatalog' element={<TripCatalog></TripCatalog>}></Route>
          <Route path="/Login" element={<LoginComponnent></LoginComponnent>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
          <Route path="/destinations/:key" element={<TravelDestination></TravelDestination>}></Route>



        </Routes>




      </BrowserRouter>





    </div>
  )
}
export default App
