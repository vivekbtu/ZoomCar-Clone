import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import BookingsPage from "../Pages/BookingsPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import CarPage from "../Pages/CarPage";
import ZmsPage from "../Pages/ZmsPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car" element={<CarPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/zoomcar-mobility-services" element={<ZmsPage />} />
      <Route
        path="/car-bookings"
        element={
          <PrivateRoute>
            <BookingsPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
