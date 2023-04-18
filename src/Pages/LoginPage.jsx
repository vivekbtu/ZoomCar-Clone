import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";
import Login from "../Components/Login";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function LoginPage() {
  return (
    <>

      <Box w="30%" h="600px" margin="auto" marginTop="50px"
      // border="solid red 1px" 
      >
        <NavLink to="/">
          <BsArrowLeft fontSize="30px" />
        </NavLink>
        <Box w="100%" margin="auto"
        // border="solid green 1px"
        >
          <Img boxSize="full" src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" alt="logo" />
        </Box>

        <Box w="100%" textAlign="start" padding="10px"
        // border="solid red 1px" 
        >
          <Text fontSize="1.3vw" fontWeight="700">Enter details to login Details</Text>
        </Box>
        <Login />
      </Box>
    </>
  );
}

// <Container centerContent>
    //   <Img
    //     src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"
    //     w="70%"
    //     shadow="base"
    //   />
    //   <br />
    //   <Text fontSize="lg" fontWeight="bold">
    //     Enter Details To Login
    //   </Text>
    //   <Login />
    // </Container>
