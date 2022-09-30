// import { ArrowBackIcon } from "@chakra-ui/icons";

import { Box, Button, Flex, Img, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";



function LoginForm(){

    const [length , setLength] = useState(false)
    const navigate = useNavigate();
    const maxLengthCheck = (object) => {
        if (object.target.value.length === object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
            setLength(true);
          }
        else{
        //    alert("eroor")
        setLength(false)
        }  
        }
   const handleClick = ()=> {
    if(length === true)
    {
        alert("Account Created")

        // FOR MOVE TO HOME PAGE AFTER LOGIN SUCCESS 

        setTimeout(() => {
        setLength(true);

        // USE THIS INSIDE FUNCTION {const navigate = useNavigate();}

        navigate("/");
        }, 1500);
        
    }
    else{
        alert("Enter a valid mobile number")
    }
   }

//    console.log(maxLengthCheck);

    return(
        <div>
            {/* <Text>LoginForm</Text> */}

            <Box w="38%" margin="auto" 
                // h="700px" 
                // border="solid red 1px"
                >

                {/* TEXT SECTION  */}
                <NavLink to="/loginsignup">
                    <Box w="10%" fontSize="1.8vw" textAlign="start" position="-moz-initial"
                        // border="solid red 1px"
                     >
                        <IoArrowBackSharp />
                    </Box>
                </NavLink>
                <Box w="90%" padding="20px" textAlign="start" >
                    <Text fontSize="1.3vw" fontWeight="600">Enter Mobile Number</Text>
                </Box>

                {/* NUMBER SECTION  */}

                <Box w="100%"
                    // border="solid red 1px"
                 >
                    <Flex alignItems="center" gap={5}>
                        <Box 
                            border="solid #10a310 2px"
                            padding="11px 11px 11px 40px"
                            borderRadius="5px"
                        >
                            <Flex alignItems="center" gap={3}>
                                <Box 
                                    // border="solid red 1px"
                                >
                                    <Img boxSize="35px" src="https://e7.pngegg.com/pngimages/488/4/png-clipart-flag-of-india-computer-icons-game-indian-flag-flag-orange-thumbnail.png" />
                                </Box>
                                <Box textAlign="center">
                                    <Text>+91</Text>
                                </Box>
                            </Flex>
                        </Box>
                        {/* <NavLink to="/loginform"> */}
                        <Box w="75%">
                            <Input size='lg' padding="30px 30px 30px 10px"
                            placeholder="Mobile Number"
                            type = "number" maxLength = "10" onInput={maxLengthCheck}
                            
                            />
                        </Box>
                        {/* </NavLink> */}
                    </Flex>
                </Box>

                {/* BUTTON  */}

                <Box  marginTop="500px" >
                <Button w="90%" height="60px" colorScheme='teal' size='lg' bgColor="#10a310"
                disabled={length === false}
                onClick={ handleClick }
                >
                    CONTINUE
                </Button>
                </Box>
            </Box>
        </div>
    )
}

export default LoginForm;