import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Customer/Login";
import Register from "./pages/Customer/Register";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import DefaultLayout from "./layouts/Default";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import RoomCr from "./pages/Admin/RoomCr";
import RoomEdit from "./pages/Admin/RoomEdit";
import Roomget from "./pages/Admin/Roomget";
import BookingsHis from "./pages/Admin/BookingsHis";
import PaymentsHis from "./component/PaymentsHis";
import RoomShow from "./pages/Admin/RoomShow";
import CustBook from "./pages/Customer/CustBook";
import Booked from "./pages/Customer/Booked";
import FindBooking from "./pages/Customer/FIndBooking";
import Rooms from "./pages/Customer/Rooms";
import Booking from "./pages/Customer/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/RoomCr" element={<RoomCr />} />
        <Route path="/RoomEdit" element={<RoomEdit />} />
        <Route path="/Roomget" element={<Roomget />} />
        <Route path="/BookingsHis" element={<BookingsHis/>} />
        <Route path="/PaymentsHis" element={<PaymentsHis/>} />
        <Route path="/RoomShow" element={<RoomShow/>} />
        <Route path="/CustBook/:id" element={<CustBook/>} />
        <Route path="/Booking" element={<Booking/>} />
        <Route path="/Booked" element={<Booked/>} />
        <Route path="/FindBooking" element={<FindBooking/>} />
        <Route path="/Rooms" element={<Rooms/>} />

        {/* Wrap default layout around child routes if needed */}
        <Route path="/*" element={<DefaultLayout />}/>
      </Routes>
    </Router>
  );
}

export default App;
