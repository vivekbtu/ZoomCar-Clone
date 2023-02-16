import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from "../Context/AuthContextProvider";

export default function CarCard({
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
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        pr="2"
        pt="3"
        pb="2"
      >
        <Box w="23%">
          <Img src={image} alt="car1" width="auto" transform="scaleX(-1)" />
        </Box>
        <Box w="24%" textAlign="left">
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
        <Box w="15%" h="40px" overflowX="scroll" bg="#f5f5f5">
          <Text w="200px" fontSize="15px" opacity="0.7" align="left">
            {address}
          </Text>
        </Box>
        <Box w="20%" textAlign="left">
          <Text fontWeight="bold">₹ {discount_price}</Text>
          <Text textDecoration="line-through" opacity="0.5">
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
                  addToBooking({ ...carObj });
                } else {
                  alert("You need to login first");
                }
              }}
            >
              BOOK NOW
            </Button>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
