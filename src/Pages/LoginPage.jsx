import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import Login from "../Components/Login";
import { NavLink } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function LoginPage() {
  return (
    <>
      <Box w={{"sm": "60%", "md": "45%", "lg":"30%"}} h="600px" margin="auto" marginTop="50px"
      // border="solid red 1px" 
      >
        <Flex justifyContent="space-between" alignItems="center">
        <NavLink to="/">
          <BsArrowLeft fontSize="30px" color="blue" />
        </NavLink>

        <NavLink to="/signup">
          <BsArrowRight fontSize="30px" color="green" />
        </NavLink>
        </Flex>

        <Box w="100%" margin="auto"
        // border="solid green 1px"
        >
          <Img boxSize="full" src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" alt="logo" />
        </Box>

        <Box w="100%" textAlign="start" padding="10px"
        // border="solid red 1px" 
        >
          <Text fontSize={{"sm": "13px", "md": "17px"}} fontWeight="700">Enter Details To Login</Text>
        </Box>
        <Login />
      </Box>
    </>
  );
}
