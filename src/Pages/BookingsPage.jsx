import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CarCard from "../Components/CarCard";
import Navbar from "../Components/Navbar";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import SmallScreenCarCard from "../Components/SmallScreenCarCard";

const getBookingsData = async () => {
  // let id = localStorage.getItem("id")
  // console.log(id);
  return await axios.get(`https://json-server-p1rm.onrender.com/bookings/`);
};

export default function BookingsPage() {

  // const [isSmallerThan950] = useMediaQuery("(max-width: 950px)");
  const [isSmallerThan650] = useMediaQuery("(max-width: 650px)");
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
      <Heading m="2" size="md" marginBottom="15px">
        BookingsPage
      </Heading>
      <Box margin="auto">
        {/* car list data */}
        {/* <Box>
          {carData.map((car) => (
            <CarCard
              key={car.id}
              image={car.car_id.image}
              name={car.car_id.name}
              transmission={car.car_id.transmission}
              fuel={car.car_id.fuel}
              seats={car.car_id.seats}
              ratings={car.car_id.ratings}
              kms={car.car_id.kms}
              address={car.car_id.address}
              discount_price={car.car_id.discount_price}
              original_price={car.car_id.original_price}
              isBooked={true}
              delete_id={car.id}
              cancelBooking={cancelBooking}
            />
          ))}
        </Box> */}

        <Box
          // maxH={!isSmallerThan650 && "500px"}
          maxH={"83vh"}
          overflow={!isSmallerThan650 && "auto"}
        >
          {!isSmallerThan650
            ? carData.map((car) => (
              <CarCard
                key={car.id}
                image={car.car_id.image}
                name={car.car_id.name}
                transmission={car.car_id.transmission}
                fuel={car.car_id.fuel}
                seats={car.car_id.seats}
                ratings={car.car_id.ratings}
                kms={car.car_id.kms}
                address={car.car_id.address}
                discount_price={car.car_id.discount_price}
                original_price={car.car_id.original_price}
                isBooked={true}
                delete_id={car.id}
                cancelBooking={cancelBooking}
              />
            ))
            : carData.map((car) => (
              <SmallScreenCarCard
                key={car.id}
                image={car.car_id.image}
                name={car.car_id.name}
                transmission={car.car_id.transmission}
                fuel={car.car_id.fuel}
                seats={car.car_id.seats}
                ratings={car.car_id.ratings}
                kms={car.car_id.kms}
                address={car.car_id.address}
                discount_price={car.car_id.discount_price}
                original_price={car.car_id.original_price}
                isBooked={true}
                delete_id={car.id}
                cancelBooking={cancelBooking}
              />
            ))}
          {carData.length === 0 ? <Text m="3">No Cars Found..</Text> : null}
        </Box>
      </Box>
    </>
  );
}
