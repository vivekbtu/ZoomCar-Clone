import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";
import SignUp from "../Components/SignUp";

export default function SignUpPage() {
  return (
    <>
    <Box w="30%" h="600px" margin="auto" marginTop="50px"
    // border="solid red 1px" 
    >
      <Box w="100%" margin="auto"
      // border="solid green 1px"
      >
        <Img boxSize="full" src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" alt="logo" />
      </Box>

      <Box w="100%" textAlign="start" padding="10px"
      // border="solid red 1px" 
      >
        <Text fontSize="1.3vw" fontWeight="700">Enter details to Sign Up Details</Text>
      </Box>
      <SignUp />
    </Box>
  </>
  );
}
