import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CarCard from "../Components/CarCard";
import Navbar from "../Components/Navbar";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const getBookingsData = async () => {
  return await axios.get("https://json-server-p1rm.onrender.com/bookings");
};

export default function BookingsPage() {
  const [carData, setData] = useState([]);

  useEffect(() => {
    fetchAndUpdateCarData();
  }, []);

  const fetchAndUpdateCarData = () => {
    getBookingsData().then((res) => setData(res.data));
  };

  const cancelBooking = async (id) => {
    return await axios
      .delete(`https://json-server-p1rm.onrender.com/bookings/${id}`)
      .then(() => {
        alert("Booking Cancellation Successful");
        fetchAndUpdateCarData();
      });
  };

  return (
    <>
      <Navbar />
      <Box marginLeft="4%" >
        <NavLink to="/car">
          <BsArrowLeft fontSize="30px" />
        </NavLink>
      </Box>
      <Heading m="2" size="md">
        BookingsPage
      </Heading>
      <Box w="70%" margin="auto">
        {/* car list data */}
        <Box maxH="500px" overflow="auto">
          {carData.map((car) => (
            <CarCard
              key={car.id}
              image={car.image}
              name={car.name}
              transmission={car.transmission}
              fuel={car.fuel}
              seats={car.seats}
              ratings={car.ratings}
              kms={car.kms}
              address={car.address}
              discount_price={car.discount_price}
              original_price={car.original_price}
              isBooked={true}
              delete_id={car.id}
              cancelBooking={cancelBooking}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
