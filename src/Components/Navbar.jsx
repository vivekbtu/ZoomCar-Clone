import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Img,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephone, BsLayoutTextSidebar } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavbarStyles from "./Navbar.module.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const { isAuth, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
        className={NavbarStyles.header}
        // border="solid 1px red"
      >
        <Flex className={NavbarStyles.navHead} alignItems="center"
          // border="solid 1px red"
          gap="5">
          <button ref={btnRef} onClick={onOpen}>
            <AiOutlineMenu />
          </button>
          {/* <Heading size="md" className={NavbarStyles.logo}>
            <Link to="/">ZOOMCAR</Link>
          </Heading>  */}

          <NavLink to="/">
            <Box>
              <Img className={NavbarStyles.logo} boxSize={{ "sm": "75%", "md": "85%", "lg": "100%" }} src="https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png" />
            </Box>
          </NavLink>

        </Flex>
        <Flex className={NavbarStyles.navHead} alignItems="center"
          // border="solid 1px red"
          // gap="5"
          >
          {/* <a href="https://www.zoomcar.com/in/host/en?auth_required=true&utm_sub_source=dweb_ingress&platform=web">
            <Flex py="2" px="4" bg="white" color="black" borderRadius="1.5rem">
              <img
                src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg"
                alt="icon"
              />
              Become a Host
            </Flex>
          </a> */}

          <p>
            <h1>ZMS</h1>
          </p>
          {/* if logged in then show bookings page */}
          {isAuth ? (
            <Link to="/car-bookings">
              <h1>Bookings</h1>
            </Link>
          ) : null}
          {!isAuth ? (
            <Link to="/login">
              <h1>LogIn/SignUp</h1>
            </Link>
          ) : (
            <Button
            className={NavbarStyles.logout}
              size={{"sm":"sm","md":"md","lg":"md"}}
              bg="red"
              color="#ffffff"
              borderRadius="1.5rem"
              _hover="none"
              // fontSize={{"sm":"7px","md":"15px","lg":"15px"}}
              onClick={() => {
                logOutUser();
                navigate("/");
              }}
            >
              LOGOUT
            </Button>
          )}
        </Flex>
      </Flex>

      {/* drawer  */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody border="1px solid black" p="0" m="0">
            <Link to="/login">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <FaUserAlt /> Login or Signup
              </Flex>
            </Link>
            <Link to="/">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
                onClick={() => {
                  onClose();
                }}
              >
                <GrLocation />
                Change City
              </Flex>
            </Link>
            <p >
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <img
                  src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg"
                  alt="icon"
                />
                Become a Host
              </Flex>
            </p>
            <p >
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsLayoutTextSidebar />
                Zoomcar Fleet Vehicles Policies
              </Flex>
            </p>
            <p>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsLayoutTextSidebar />
                Zoomcar Host Vehicles Policies
              </Flex>
            </p>
            <p>
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsTelephone />
                Help & Support
              </Flex>
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
