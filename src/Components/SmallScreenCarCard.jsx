import { Box, Button, Img, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../Context/AuthContextProvider";

export default function SmallScreenCarCard({
  image,
  name,
  transmission,
  fuel,
  seats,
  ratings,
  kms,
  address,
  discount_price,
  original_price,
  isBooked,
  delete_id,
  carId,
  cancelBooking,
  addToBooking,
}) {
  const carObj = {
    image: image,
    name: name,
    transmission: transmission,
    fuel: fuel,
    seats: seats,
    ratings: ratings,
    kms: kms,
    address: address,
    discount_price: discount_price,
    original_price: original_price,
  };

  const { isAuth } = useContext(AuthContext);
  const LoggedInStatusLS = localStorage.getItem("isLoggedIn");
  return (
    <Box bg="white" borderRadius="0.25rem" mb="2">
      <Img src={image} alt="car1" width="auto" transform="scaleX(-1)" />
      <Box p="2" textAlign="left">
        <Text fontWeight="bold" mb="1">
          {name}
        </Text>
        <Text fontSize="15px" opacity="0.5" mb="2">
          {transmission} {fuel} {seats}
        </Text>
        <Text fontSize="15px">
          <span style={{ display: "inline-block" }}>
            <AiFillStar style={{ paddingTop: "1px" }} color="#C77C0C" />
          </span>{" "}
          {ratings} {kms}
        </Text>
      </Box>
      <Box p="2" textAlign="center">
        <Text fontWeight="bold" textAlign={"left"}>
          ₹ {discount_price}
        </Text>
        <Text textDecoration="line-through" opacity="0.5" textAlign={"left"}>
          ₹ {original_price}
        </Text>
        {isBooked ? (
          <Button
            my="2"
            px="7"
            fontSize="13px"
            bg="red"
            color="white"
            border="1px solid green"
            _hover={{ bg: "red", color: "white" }}
            fontWeight="medium"
            onClick={() => cancelBooking(delete_id)}
          >
            Cancel Booking
          </Button>
        ) : (
          <Button
            my="2"
            px="7"
            fontSize="13px"
            bg="white"
            border="1px solid green"
            _hover={{ bg: "green", color: "white" }}
            fontWeight="medium"
            onClick={() => {
              if (isAuth && LoggedInStatusLS) {
                addToBooking(carId);
              } else {
                alert("You need to login first");
              }
            }}
          >
            BOOK NOW
          </Button>
        )}
      </Box>
    </Box>
  );
}