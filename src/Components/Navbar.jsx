import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephone, BsLayoutTextSidebar } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
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
      >
        <Flex alignItems="center" gap="5">
          <button ref={btnRef} onClick={onOpen}>
            <AiOutlineMenu />
          </button>
          <Heading size="md" className={NavbarStyles.logo}>
            <Link to="/">ZOOMCAR</Link>
          </Heading>
        </Flex>
        <Flex alignItems="center" gap="10">
          <a href="https://www.zoomcar.com/in/host/en?auth_required=true&utm_sub_source=dweb_ingress&platform=web">
            <Flex py="2" px="4" bg="white" color="black" borderRadius="1.5rem">
              <img
                src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg"
                alt="icon"
              />
              Become a Host
            </Flex>
          </a>
          <a href="https://www.zoomcar.com/zoomcar-mobility-services">
            <h1>ZMS</h1>
          </a>
          {/* if logged in then show bookings page */}
          {isAuth ? (
            <Link to="/bookings">
              <h1>Bookings</h1>
            </Link>
          ) : null}
          {!isAuth ? (
            <Link to="/login">
              <h1>LogIn/SignUp</h1>
            </Link>
          ) : (
            <Button
              size="md"
              bg="red"
              color="#ffffff"
              borderRadius="1.5rem"
              _hover="none"
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
                onClick={()=>{
                  onClose();
                }}
              >
                <GrLocation />
                Change City
              </Flex>
            </Link>
            <a href="https://www.zoomcar.com/in/host/en?auth_required=true&utm_sub_source=dweb_hamb&platform=web">
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
            </a>
            <a href="https://www.zoomcar.com/in/bangalore/policy">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsLayoutTextSidebar />
                Zoomcar Fleet Vehicles Policies
              </Flex>
            </a>
            <a href="https://www.zoomcar.com/in/bangalore/host-policy">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsLayoutTextSidebar />
                Zoomcar Host Vehicles Policies
              </Flex>
            </a>
            <a href="https://www.zoomcar.com/faq">
              <Flex
                className={NavbarStyles.leftLink}
                alignItems="center"
                gap="4"
              >
                <BsTelephone />
                Help & Support
              </Flex>
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
