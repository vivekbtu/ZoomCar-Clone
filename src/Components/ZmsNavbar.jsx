



import { Box, Button, Flex, Img } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";


const links = [
  {
    path: "/",
    title: "Request Demo"
  },
 
]




function ZmsNavbar() {

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

  //// NAVBAR FADE OUT AFTER SCROLLING DOWN 720 
  //// DYNAMIC FUNCTION
  //// SHOW NOT SHOW AFTER REACH THAT CONDITION


  const [show, setShow] = useState(true)
  const controlNavbar = () => {
    if (window.scrollY > 720) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])


  return (
    <nav>
      <Box className={show ? 'nav' : 'nav__show'} >

        <Box className={colorChange ? 'Navbar colorChange' : 'Navbar '} width="100%" margin="auto" >

          <Box w="100%" height="60px" 
          // border="solid red 1px" 
          >
            <Flex w="60%" margin="auto" alignItems='center' 
            // border="solid red 1px" 
            justifyContent="space-around" >
              <NavLink to="/" >
                <Box marginTop="10px">
                  <Img boxSize="15%" src="https://www.zoomcar.com/assets/component-images/zms-logo-white.2af37707ebe1f0942fd6285bb0fdf3d9.png" />
                </Box>
              </NavLink>

              <Box marginTop="10px">
                {links.map((link) => (
                  <NavLink key={link.path} to={link.path}>
                    <Button color="red" className="NavbarHover" fontSize='1.1vw'>{link.title}</Button>
                  </NavLink>
                ))}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </nav>
  )
}

export default ZmsNavbar;