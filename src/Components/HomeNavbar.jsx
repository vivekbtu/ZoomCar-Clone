





import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";


const links = [
    {
        path: "/",
        title: "Become a Host"
    },

]

const links2 = [
    {
        path: "/zoomcar-mobility-services",
        title: "ZMS"
    },
    {
        path:"/loginsignup",
        title:"Login/SignUp"
    }

]




function HomeNavbar() {

    // NAVBAR SCROLL CHANGE COLOR FUNCTION 
    // AND ADD CONDTIONAL STATEMENT IN CLASSNAME TAG YOU CAN SEE 
    // IN STACK FRAG I USED ({colorChange ? 'Navbar colorChange' : 'Navbar '}) THIS CONDTION


    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 2 && window.scrollY <= 720) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    useEffect(() => {
        changeNavbarColor()
        window.addEventListener('scroll', changeNavbarColor);
    })


    return (
        <nav>
            {/* <Box className={show ? 'nav' : 'nav__show'} > */}
            {/* <Sidebar/> */}
            <Box className={colorChange ? 'HNavbar' : 'HNavbar '} width="100%" margin="auto" >
            
                <Box w="240%" height="60px" 
                // border="solid red 1px" 
                >
                <Flex justifyContent="space-around">
                    <Flex w="75%" alignItems='center' marginTop="10px" 
                    // border="solid red 1px" 
                    justifyContent="space-between" >
                        <NavLink to="/">
                        <Box >
                            <Img boxSize="100%" src="https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png" />
                        </Box>
                        </NavLink>

                        <Box>
                            {links.map((link) => (
                                <NavLink key={link.path} to={link.path}>
                                    <Button color="red" className="NavbarHover" fontSize='1.1vw' borderRadius="20px">
                                    <Img src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg" />
                                        {link.title}
                                    </Button>
                                    
                                </NavLink>
                            ))}
                        </Box>
                    </Flex>
                    <Box w="20%">
                        <Flex w="100%" alignItems='center' gap={20} marginTop="15px" 
                        // border="solid red 1px" 
                        justifyContent="space-around" >
                        {links2.map((link) => (
                                    <NavLink key={link.path} to={link.path}>
                                        <Text color="white" className="NavbarHover" fontSize='1.3vw' fontWeight="700">{link.title}</Text>
                                    </NavLink>
                                ))}
                        </Flex>
                    </Box>

                    </Flex>
                </Box>

                
                
            </Box>
            {/* </Box> */}
        </nav>
    )
}

export default HomeNavbar;