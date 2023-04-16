import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { BiStar } from "react-icons/bi";
import { GrAnnounce, GrLocation, GrCar } from "react-icons/gr";
import { TbManualGearbox, TbRoad } from "react-icons/tb";

import CarAgeSlider from "./CarAgeSlider";
import CarKmRunSlider from "./CarKmRunSlider";

export default function SortAndFilters() {
  return (
    <Box w="28%" px="3" py="3" bg="white" borderRadius="0.25rem" shadow="base">
      <Flex alignItems="center" justifyContent="space-between" mb="2">
        <Text fontSize="18px" fontWeight="bold">
          Sort And Filters{" "}
        </Text>
        <Text fontSize="15px" fontWeight="bold" color="green">
          RESET
        </Text>
      </Flex>
      <Text align="left" mb="1" fontSize="13px">
        Sort by
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={1} mb="1">
        <GridItem
          w="100%"
          h="auto"
          px="2"
          py="3"
          bg="white"
          border="1px solid gainsboro"
          borderRadius="0.25rem"
        >
          <MdOutlineDirectionsCar style={{ margin: "auto" }} />
          <Text fontSize="13px">Relevance</Text>
        </GridItem>
        <GridItem
          w="100%"
          h="auto"
          px="2"
          py="3"
          bg="white"
          border="1px solid gainsboro"
          borderRadius="0.25rem"
        >
          <RiSortDesc style={{ margin: "auto" }} />
          <Text fontSize="13px">Low To High</Text>
        </GridItem>
        <GridItem
          w="100%"
          h="auto"
          px="2"
          py="3"
          bg="white"
          border="1px solid gainsboro"
          borderRadius="0.25rem"
        >
          <RiSortAsc style={{ margin: "auto" }} />
          <Text fontSize="13px">High To Low</Text>
        </GridItem>
        <GridItem
          w="100%"
          h="auto"
          px="2"
          py="3"
          bg="white"
          border="1px solid gainsboro"
          borderRadius="0.25rem"
        >
          <BiStar style={{ margin: "auto" }} />
          <Text fontSize="13px">Best rated</Text>
        </GridItem>
      </Grid>
      {/* another row  */}
      <Grid templateColumns="repeat(4, 1fr)" gap={1}>
        <GridItem
          w="100%"
          h="auto"
          px="2"
          py="3"
          bg="white"
          border="1px solid gainsboro"
          borderRadius="0.25rem"
        >
          <GrLocation style={{ margin: "auto" }} />
          <Text fontSize="13px">Distance</Text>
        </GridItem>
        <GridItem
          w="100%"
          h="auto"
          px="2"
          py="3"
          bg="white"
          border="1px solid gainsboro"
          borderRadius="0.25rem"
        >
          <GrCar style={{ margin: "auto" }} />
          <Text fontSize="13px">Car age</Text>
        </GridItem>
        <GridItem
          w="100%"
          h="auto"
          px="2"
          py="3"
          bg="white"
          border="1px solid gainsboro"
          borderRadius="0.25rem"
        >
          <TbRoad style={{ margin: "auto" }} />
          <Text fontSize="13px">Kms Driven</Text>
        </GridItem>
        <GridItem
          w="100%"
          h="auto"
          px="2"
          py="3"
          bg="white"
          border="1px solid gainsboro"
          borderRadius="0.25rem"
        >
          <GrAnnounce style={{ margin: "auto" }} />
          <Text fontSize="13px">Popularity</Text>
        </GridItem>
      </Grid>
      {/* search car  */}
      <Box
        mt="5"
        py="3"
        borderTop="1px solid gainsboro"
        borderBottom="1px solid gainsboro"
      >
        <Flex gap="2">
          <MdOutlineDirectionsCar />
          <div>
            <Text fontSize="13px" align="left">
              Include specific cars
            </Text>
            <Text fontSize="10px" align="left">
              Any specific model in mind? Find it here. We will include them to
              search
            </Text>
            <InputGroup>
              <Input
                size="xs"
                fontSize="10px"
                placeholder='Try Search "Kia Seltos"'
              />
              <InputRightElement
                h="100%"
                alignItems="center"
                pointerEvents="none"
                children={<BsSearch color="gray.300" fontSize="10px" />}
              />
            </InputGroup>
          </div>
        </Flex>
      </Box>
      {/* car type */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Text align="left" mb="1" fontSize="13px">
          Car type
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6643/6643477.png"
              alt="hatchback"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">Hatchback</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3202/3202003.png"
              alt="sedan"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">Sedan</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3097/3097137.png"
              alt="suv"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">SUV</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4411/4411813.png"
              alt="luxury"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">Luxury</Text>
          </GridItem>
        </Grid>
      </Box>
      {/* seats */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Text align="left" mb="1" fontSize="13px">
          Seats
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5385/5385900.png"
              alt="4 seater"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">4 Seater</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5385/5385900.png"
              alt="5 seater"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">5 Seater</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5385/5385900.png"
              alt="7 seater"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">7 Seater</Text>
          </GridItem>
        </Grid>
      </Box>
      {/* fuel type */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Text align="left" mb="1" fontSize="13px">
          Fuel type
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4433/4433018.png"
              alt="Petrol"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">Petrol</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4433/4433018.png"
              alt="Diesel"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">Diesel</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/481/481233.png"
              alt="cng"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">CNG</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2087/2087628.png"
              alt="electric"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">Electric</Text>
          </GridItem>
        </Grid>
      </Box>
      {/* transmission */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Text align="left" mb="1" fontSize="13px">
          Transmission
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <TbManualGearbox style={{ margin: "auto" }} />
            <Text fontSize="13px">Manual</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="3"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2579/2579085.png"
              alt="automatic"
              style={{ width: "30px", margin: "auto" }}
            />
            <Text fontSize="13px">Automatic</Text>
          </GridItem>
        </Grid>
      </Box>
      {/* ratings  */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Text align="left" mb="1" fontSize="13px">
          Ratings
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="1"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <Text fontSize="13px">3+ rated</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="1"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <Text fontSize="13px">4+ rated</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="auto"
            px="2"
            py="1"
            bg="white"
            border="1px solid gainsboro"
            borderRadius="0.25rem"
          >
            <Text fontSize="13px">All</Text>
          </GridItem>
        </Grid>
      </Box>
      {/* kms run  */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Text align="left" mb="1" fontSize="13px">
          Kms run
        </Text>
        <CarKmRunSlider />
      </Box>
      {/* car age  */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Text align="left" mb="1" fontSize="13px">
          Car Age
        </Text>
        <CarAgeSlider />
      </Box>
    </Box>
  );
}
