import { Box, Flex, Img, Input, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function LoginSignup(){

    return (
        <div>
            {/* <Text>Login Page</Text> */}

            <Box w="30%" h="600px" margin="auto" marginTop="100px"
                // border="solid red 1px" 
            >
                <Box w="100%"  margin="auto" 
                // border="solid green 1px"
                >
                    <Img boxSize="full" src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg" alt="logo" />
                </Box>

                <Box w="100%" textAlign="start" padding="10px"
                    // border="solid red 1px" 
                >
                    <Text fontSize="1.3vw" fontWeight="700">Enter details to login/sign-up</Text>
                </Box>
                
                {/* INPUT BOX NUMBER */}

                <Box w="100%" padding="10px 10px 10px 30px"
                    // border="solid red 1px"
                 >
                    <Flex alignItems="center" gap={5}>
                        <Box 
                            // border="solid red 1px"
                        >
                            <Flex alignItems="center" gap={3}>
                                <Box>
                                    <Img boxSize="35px" src="https://e7.pngegg.com/pngimages/488/4/png-clipart-flag-of-india-computer-icons-game-indian-flag-flag-orange-thumbnail.png" />
                                </Box>
                                <Box textAlign="center">
                                    <Text>+91</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <NavLink to="/loginform">
                        <Box borderLeft="solid #d3d3d3 1px" padding="10px">
                            <Input 
                            variant='unstyled' 
                            placeholder="Enter Mobile Number"/>
                        </Box>
                        </NavLink>
                    </Flex>
                </Box>

                    {/* CONTINUE WITH EMAIL */}

                <Box w="100%" borderTop="solid #d3d3d3 1px" borderBottom="solid #d3d3d3 1px" padding="15px" >
                    <Text color="#10a310" fontSize="1vw" fontWeight="600" textAlign="start">
                    Continue with Email ID
                    </Text>
                </Box>

                    {/* CONTINUE WITH SOCIAL  */}

                <Box w="100%" padding="15px 15px 15px 5px">
                    <Flex alignItems="center">
                        <Box 
                            // border="solid red 1px" 
                            w="35%">
                                <Text color="#10a310" fontSize="1vw" fontWeight="600">
                                    Continue via Social
                                </Text>
                        </Box>
                        <Box 
                        // border="solid red 1px"
                        >
                            <a href="https://www.zoomcar.com/login#login-form">
                                <Img src="https://www.zoomcar.com/build/62ba375ec1a9fbcbee9e9099181c8d38.svg" />
                            </a>
                        </Box>
                        <Box 
                        // border="solid red 1px"
                        >
                            <a href="https://www.zoomcar.com/login#login-form">
                                <Img src="https://www.zoomcar.com/build/279de03b0c8ecdb4db56a79da6e775e6.svg" />
                            </a>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}

export default LoginSignup;
// https://www.zoomcar.com/build/62ba375ec1a9fbcbee9e9099181c8d38.svg