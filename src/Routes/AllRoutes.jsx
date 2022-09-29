

import { Route, Routes } from "react-router-dom";
import React from "react";
// import Signup from "./Signup";
// import Customers from "./Customers";
import ZmsPage from "../Pages/ZmsPage";
import Home from "../Pages/HomePage";
import LoginSignup from "../Pages/LoginSignupPage";
import LoginForm from "../Pages/LoginFormPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/zoomcar-mobility-services" element={<ZmsPage />} />
        {/* <Route path="/contact" element={<ContactPage/>} /> */}
        {/* <Route path="/customers" element={<Customers/>} /> */}
        <Route path="/loginsignup" element={<LoginSignup/>} />
        <Route path="/loginform" element={<LoginForm/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;