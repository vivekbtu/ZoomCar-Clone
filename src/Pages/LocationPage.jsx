import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { TbCurrentLocation } from "react-icons/tb";
import { BiMapAlt, BiMap } from "react-icons/bi";
import { IoArrowBackSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function LocationPage() {

    return (
        <div>
                <Box padding="20px">
                <NavLink to="/">
                    <Box w="10%" fontSize="1.8vw" textAlign="start" position="-moz-initial"
                        // border="solid red 1px"
                     >
                        <IoArrowBackSharp />
                    </Box>
                </NavLink>
                </Box>
            <Box w="70%" margin="auto" height="700px" >
                <Box w="90%" margin="auto" marginTop="40px">
                    <Flex alignItems="center">
                        <Box w="55%" >
                            <Input
                                bgColor="#ffffff"
                                height="50px"
                                placeholder="
                                Mumbai
                                T-2, Chhatrapati Shivaji Maharaj International Ai"
                            />
                            {/* <Flex>
                                <Box><GoPrimitiveDot/></Box>
                                <Box>
                                    <Text>Mumbai
                                    T-2, Chhatrapati Shivaji Maharaj International Ai</Text>
                                </Box>
                            </Flex>
                        </Input> */}
                        </Box>
                        <Box w="20%" >
                            <Button colorScheme='gray' variant='ghost'>
                                <Flex justifyContent="space-around" gap={5} alignItems="center">
                                    <Box fontSize="2vw">
                                        <TbCurrentLocation />
                                    </Box>
                                    <Box>
                                        <Text fontSize="0.8vw">
                                            Current Location
                                        </Text>
                                    </Box>
                                </Flex>
                            </Button>
                        </Box>

                        <Box w="23%" >
                            <Button colorScheme='gray' variant='ghost'>
                                <Flex justifyContent="space-around" gap={5} alignItems="center">
                                    <Box fontSize="2vw">
                                        <BiMapAlt />
                                    </Box>
                                    <Box>
                                        <Text fontSize="0.8vw">
                                            Select Location on Map
                                        </Text>
                                    </Box>
                                </Flex>
                            </Button>
                        </Box>
                    </Flex>
                </Box>

                <Box w="90%" margin="auto" marginTop="20px" bgColor="#fbfbfb">
                    <Flex>
                        <Box w="50%"
                        // border="solid green 1px"
                        >
                            <Box w="80%" margin="auto" marginTop="20px" bgColor="#f5f5f5"
                            // border="solid red 1px"
                            >
                                <Text fontSize="1.2vw" fontWeight="500" padding="5px 5px 5px 10px" textAlign="start">RECENTLY SEARCHED LOCATIONS</Text>
                            </Box>
                            <Box marginTop="10px">
                                <Button colorScheme='gray' variant='ghost'>
                                    <Flex justifyContent="space-around" gap={5} alignItems="center">
                                        <Box fontSize="2vw">
                                            <BiMap />
                                        </Box>
                                        <Box>
                                            <Text fontSize="0.8vw">
                                                Pillar no 31 C, P7-East, Multi level car parking, T2- int
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Button>
                            </Box>
                        </Box>


                        <Box w="45%"
                        // border="solid green 1px"
                        >
                            <Box w="100%" margin="auto" marginTop="20px" bgColor="#f5f5f5"
                            // border="solid red 1px"
                            >
                                <Text fontSize="1.2vw" fontWeight="500" padding="5px 5px 5px 10px" textAlign="start" >SUGGESTED PICK UP LOCATIONS</Text>
                            </Box>

                            <Box marginTop="10px" cursor="pointer">
                                <Box margin="auto" padding="0px 0px 0px 10px">
                                    <Flex gap={10} alignItems="center" justifyContent="flex-start">
                                        <Box fontSize="2.5vw"
                                        // border="solid green 1px"
                                        >
                                            <BiMap />
                                        </Box>
                                        <Box>
                                            <Text fontSize="1vw" textAlign="start">
                                                T2 - International Airport (P7 parking lot)
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                            <Box marginTop="10px" cursor="pointer" borderTop="solid gray 1px" borderBottom="solid gray 1px" padding="10px 0px 10px 0px">
                                <Box margin="auto" padding="0px 0px 0px 10px">
                                    <Flex gap={10} alignItems="center" justifyContent="flex-start">
                                        <Box fontSize="2.5vw"
                                        // border="solid green 1px"
                                        >
                                            <BiMap />
                                        </Box>
                                        <Box>
                                            <Text fontSize="1vw" textAlign="start">
                                                Mumbai Central
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>

                            <Box padding="10px 0px 10px 0px" cursor="pointer">
                                <Box margin="auto" padding="0px 0px 0px 10px">
                                    <Flex gap={10} alignItems="center" justifyContent="flex-start">
                                        <Box fontSize="2.5vw"
                                        // border="solid green 1px"
                                        >
                                            <BiMap />
                                        </Box>
                                        <Box>
                                            <Text fontSize="1vw" textAlign="start">
                                                Khargar Station
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>


                        </Box>
                    </Flex>
                </Box>

                <NavLink to="/">     
                <Box marginTop="20px" >
                <Button w="40%" colorScheme='#10a310' variant='solid' padding="25px" bgColor="#10a310">
                    CONFIRM PICKUP LOCATION
                </Button>
                </Box>
                </NavLink>   
            </Box>
        </div>
    )
}

export default LocationPage;