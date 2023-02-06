import { background, Box, Button, color, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import { TbPlane } from "react-icons/tb";
import { GoPrimitiveDot } from "react-icons/go";
import findCarStyles from "./FindCars.module.css";
import { useState } from "react";
import SelectLocation from "./SelectLocation";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function FindCars({ changeBackground }) {
  const [isbtnclicked, setBtn] = useState(true);
  const [openModal, setModalStatus] = useState(false);

  const navigate = useNavigate();
  const { location } = useContext(AuthContext);

  return (
    <>
      <Box marginBottom="70px">
        <Flex flexWrap="wrap">
          <Button
            fontWeight="light"
            bg="#F5F5F5"
            className={findCarStyles.flex}
            px="20"
            py="5"
            fontSize="15px"
            borderRightRadius="0rem"
            border={isbtnclicked ? "1px solid lightgreen" : null}
            onClick={() => {
              setBtn(true);
              changeBackground(1);
            }}
          >
            <p>
              <BsArrowLeftRight />
            </p>
            <p style={{ display: "block" }}>Round Trip</p>
          </Button>
          <Button
            fontWeight="light"
            bg="#F5F5F5"
            className={findCarStyles.flex}
            px="20"
            py="5"
            mb="3"
            fontSize="15px"
            borderLeftRadius="0rem"
            border={!isbtnclicked ? "1px solid lightgreen" : null}
            onClick={() => {
              setBtn(false);
              changeBackground(2);
            }}
          >
            <p>
              <TbPlane />
            </p>
            <p>Airport Round Trip</p>
          </Button>
        </Flex>
        <Flex
          w="100"
          bg="#F5F5F5"
          p="3"
          fontSize="15px"
          alignItems="center"
          gap="2"
          mb="3"
          borderRadius="0.5rem"
          cursor="pointer"
        >
          <Box bgGradient="linear(to-r, green.50, green.50)">
            <GoPrimitiveDot color="teal" />
          </Box>
          <Box
            opacity="0.5"
            w="100%"
            textAlign="left"
            onClick={() => setModalStatus(true)}
          >
            {location === ""
              ? "Pick Up CIty, Airport, Address Or Hotel"
              : location}
          </Box>
        </Flex>
        <Button
          w="100%"
          p="3"
          bg={location === "" ? "gainsboro" : "green"}
          color={location === "" ? "gray" : "whiteAlpha.900"}
          _hover={
            location !== ""
              ? { background: "green", color: "whiteAlpha.900" }
              : { background: "gainsboro" }
          }
          onClick={() => {
            if (location === "") {
              alert("select location first");
            } else {
              navigate("/search");
            }
          }}
        >
          <Text opacity={location==="" ? "0.5" : "1"}>FIND CARS</Text>
        </Button>
      </Box>
      <SelectLocation openModal={openModal} setModalStatus={setModalStatus} />
    </>
  );
}
