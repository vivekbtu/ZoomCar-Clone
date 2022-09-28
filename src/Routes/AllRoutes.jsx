

import { Route, Routes } from "react-router-dom";
import React from "react";
// import Home from "./Home";
// import Signin from "./Signin";
// import Signup from "./Signup";
// import Customers from "./Customers";
import ZmsPage from "../Components/ZmsPage";
import Home from "../Components/HomePage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/zoomcar-mobility-services" element={<ZmsPage />} />
        {/* <Route path="/contact" element={<ContactPage/>} /> */}
        {/* <Route path="/customers" element={<Customers/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} /> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;