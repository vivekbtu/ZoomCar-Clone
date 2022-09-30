import { Box, Button, Flex, Img, Select, Text } from "@chakra-ui/react";
import { Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import React from "react";

const hcbgImage = `https://i.pcmag.com/imagery/articles/07Mif8TyNR8M0qD4Qdc1bCJ-2.fit_lim.size_1600x900.v1569484061.jpg`;

function SelectCountry(){

    const { isAuth, toggleAuth } = React.useContext(AuthContext);

    if (isAuth) {
      return <Navigate to="/" />;
    }
    
  

    return (
        <div>
            <div className="ZmsImage1"
                    style={{
                        backgroundImage: `url(${hcbgImage})`,
                        backgroundSize: "100% 100vh",
                        height: "100vh",
                        // width:"100%",
                        color: "#f5f5f5",
                        // marginTop:"160px",
                        padding: "150px 50px 100px 50px",
                        
                    }}

                >

            </div>
            <Box w="45%" margin="auto" height="450px" bgColor="#f5f5f5"
            border="solid red 1px" marginTop="-550px"
            >
                <Box w="40%" marginLeft="60px">
                    <Button fontSize="2.5vw" fontWeight="600" colorScheme='black' variant='ghost'>
                    Select your pickup country/city
                    </Button>
                </Box>

                <Box>
                    <Select w="60%" height="60px" margin="auto" marginTop="20px" padding="10px" placeholder='Select Country' fontSize="1.2vw" >
                            <option value='china'>China</option>
                            <option value='India'>
                                <Flex alignItems="center" gap={3}>
                                    <Box>
                                        <Img src="https://e7.pngegg.com/pngimages/488/4/png-clipart-flag-of-india-computer-icons-game-indian-flag-flag-orange-thumbnail.png" />
                                    </Box>
                                    <Text>India</Text>
                                </Flex>
                            </option>
                            <option value='japan'>JAPAN</option>
                            <option value='russia'>Russia</option>
                            <option value='usa'>USA</option>
                        </Select>
                </Box>

                <Box>
                    <Select w="60%" height="60px" margin="auto" marginTop="20px" padding="10px" placeholder='Select City' fontSize="1.2vw">
                            <option value='ahmd'>Ahamdabad</option>
                            <option value='bng'>Bangalore</option>
                            <option value='del'>Delhi</option>
                            <option value='hyd'>Hyderabad</option>
                            <option value='mum'>Mumbai</option>
                            <option value='pat'>Patna</option>
                            <option value='pune'>Pune</option>
                        </Select>
                </Box>

                <Box  marginTop="30px" >
                <NavLink to="/" >
                    <Button w="60%" height="60px" colorScheme='teal' size='lg' bgColor="#10a310"
                    onClick={ toggleAuth }
                    
                    >
                        CONFIRM
                    </Button>
                </NavLink>
                </Box>
                
            </Box>
        </div>
    )
}

export default SelectCountry;



