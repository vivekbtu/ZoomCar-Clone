

import { Route, Routes } from "react-router-dom";
import React from "react";
// import Signup from "./Signup";
// import Customers from "./Customers";
import ZmsPage from "../Pages/ZmsPage";
import Home from "../Pages/HomePage";
import LoginSignup from "../Pages/LoginSignupPage";
import LoginForm from "../Pages/LoginFormPage";
import SelectCountry from "../Pages/SelectCountry";
import PrivateRoute from "./PrivateRoutes";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home/>
          </PrivateRoute>} />
        <Route path="/zoomcar-mobility-services" element={<ZmsPage />} />
        {/* <Route path="/contact" element={<ContactPage/>} /> */}
        <Route path="/selectcountry" element={<SelectCountry/>} />
        <Route path="/loginsignup" element={<LoginSignup/>} />
        <Route path="/loginform" element={<LoginForm/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;