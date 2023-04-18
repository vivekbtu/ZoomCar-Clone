import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { BiStar } from "react-icons/bi";
import { GrAnnounce, GrLocation, GrCar } from "react-icons/gr";
import { TbManualGearbox, TbRoad } from "react-icons/tb";

import CarAgeSlider from "./CarAgeSlider";
import CarKmRunSlider from "./CarKmRunSlider";
import axios from "axios";

export default function SortAndFilters({
  handleFilteredCars,
  handleSortedCars,
  displaySearchedCar,
  sortOrFilterApplied,
  setSortOrFilterApplied,
  filterCarByAgeUsingSlider,
  filterCarByKmsUsingSlider,
}) {
  const [currentSelected, setCurrentSelected] = useState("");
  const [currentSortType, setCurrentSortType] = useState("");
  const [searchedName, setSearchedName] = useState("");
  const [car_age, set_car_age] = useState(100);
  const [kms_run, set_kms_run] = useState(100);

  // function to handle search car by name
  const handleSearchCar = (e) => {
    setSearchedName(e.target.value);
    // set setSortOrFilterApplied to true
    setSortOrFilterApplied(true);
  };

  // function to get sort type and pass it to handleSortedCars
  const getSortType = (sortType) => {
    // pass sortType to handleSortedCars
    handleSortedCars(sortType);
  };

  // function to get filtered cars from database
  const getFilteredCars = async (filterType) => {
    let cars = await axios
      .get(`https://zoomcar-api-two.vercel.app/get-cars/${filterType}`)
      .then((res) => res.data)
      .catch((err) => "error");

    if (cars !== "error") {
      // send the filtered data to results page
      handleFilteredCars(cars);
    }
  };

  // function to handle car age with slider
  const handleCarAgeSlider = (carAge) => {
    set_car_age(carAge);
  };

  // function to handle kms run with slider
  const handleCarKmsRunSlider = (kmsRun) => {
    set_kms_run(kmsRun);
  };

  // reset filter function
  const resetFilters = () => {
    handleFilteredCars("");
    // set setCurrentSelected to ""
    setCurrentSelected("");
    // set setCurrentSortType to ""
    setCurrentSortType("");
  };

  useEffect(() => {
    const showSearchedName = setTimeout(() => {
      // console.log(searchedName);
      // after 1sec pass the name to displaySearchedCar
      displaySearchedCar(searchedName);
    }, 1000);

    return () => clearTimeout(showSearchedName);
  }, [searchedName]);

  // for update using car age slider
  useEffect(() => {
    const carAgeSliderFilteredCars = setTimeout(() => {
      // after 1sec pass the car_age to filterCarByAgeUsingSlider
      filterCarByAgeUsingSlider(car_age);
    }, 1000);

    return () => clearTimeout(carAgeSliderFilteredCars);
  }, [car_age]);

  // for update using kms run slider
  useEffect(() => {
    const kmsRunSliderFilteredCars = setTimeout(() => {
      // after 1sec pass the kms_run to filterCarByKmsUsingSlider
      filterCarByKmsUsingSlider(kms_run);
    }, 1000);

    return () => clearTimeout(kmsRunSliderFilteredCars);
  }, [kms_run]);

  return (
    <Box
      w="28%"
      px="3"
      py="3"
      bg="white"
      borderRadius="0.25rem"
      shadow="base"
      maxH={"90vh"}
      overflow={"auto"}
    >
      <Flex alignItems="center" justifyContent="space-between" mb="2">
        <Text fontSize="18px" fontWeight="bold">
          Sort And Filters{" "}
        </Text>
        {(currentSelected !== "" || sortOrFilterApplied === true) && (
          <Text
            fontSize="15px"
            fontWeight="bold"
            color="green"
            onClick={resetFilters}
            cursor="pointer"
          >
            RESET
          </Text>
        )}
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
          onClick={() => {
            getSortType("relevance");
            setCurrentSortType("relevance");
          }}
          background={currentSortType === "relevance" && "black"}
          color={currentSortType === "relevance" && "white"}
          cursor="pointer"
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
          onClick={() => {
            getSortType("lowToHigh");
            setCurrentSortType("lowToHigh");
          }}
          background={currentSortType === "lowToHigh" && "black"}
          color={currentSortType === "lowToHigh" && "white"}
          cursor="pointer"
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
          onClick={() => {
            getSortType("highToLow");
            setCurrentSortType("highToLow");
          }}
          background={currentSortType === "highToLow" && "black"}
          color={currentSortType === "highToLow" && "white"}
          cursor="pointer"
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
          onClick={() => {
            getSortType("bestRated");
            setCurrentSortType("bestRated");
          }}
          background={currentSortType === "bestRated" && "black"}
          color={currentSortType === "bestRated" && "white"}
          cursor="pointer"
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
          onClick={() => {
            getSortType("distance");
            setCurrentSortType("distance");
          }}
          background={currentSortType === "distance" && "black"}
          color={currentSortType === "distance" && "white"}
          cursor="pointer"
        >
          <GrLocation style={{ margin: "auto", background: "white" }} />
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
          onClick={() => {
            getSortType("carAge");
            setCurrentSortType("carAge");
          }}
          background={currentSortType === "carAge" && "black"}
          color={currentSortType === "carAge" && "white"}
          cursor="pointer"
        >
          <GrCar style={{ margin: "auto", background: "white" }} />
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
          onClick={() => {
            getSortType("kmsDriven");
            setCurrentSortType("kmsDriven");
          }}
          background={currentSortType === "kmsDriven" && "black"}
          color={currentSortType === "kmsDriven" && "white"}
          cursor="pointer"
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
          onClick={() => {
            getSortType("popularity");
            setCurrentSortType("popularity");
          }}
          background={currentSortType === "popularity" && "black"}
          color={currentSortType === "popularity" && "white"}
          cursor="pointer"
        >
          <GrAnnounce style={{ margin: "auto", background: "white" }} />
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
                value={searchedName}
                onChange={handleSearchCar}
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
            onClick={() => {
              getFilteredCars("hatchback");
              setCurrentSelected("hatchback");
            }}
            background={currentSelected === "hatchback" && "black"}
            color={currentSelected === "hatchback" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6643/6643477.png"
              alt="hatchback"
              style={{
                width: "30px",
                margin: "auto",
                background: "white",
              }}
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
            onClick={() => {
              getFilteredCars("sedan");
              setCurrentSelected("sedan");
            }}
            background={currentSelected === "sedan" && "black"}
            color={currentSelected === "sedan" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3202/3202003.png"
              alt="sedan"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("suv");
              setCurrentSelected("suv");
            }}
            background={currentSelected === "suv" && "black"}
            color={currentSelected === "suv" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3097/3097137.png"
              alt="suv"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("luxury");
              setCurrentSelected("luxury");
            }}
            background={currentSelected === "luxury" && "black"}
            color={currentSelected === "luxury" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4411/4411813.png"
              alt="luxury"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("4 Seats");
              setCurrentSelected("4 Seats");
            }}
            background={currentSelected === "4 Seats" && "black"}
            color={currentSelected === "4 Seats" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5385/5385900.png"
              alt="4 seater"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("5 Seats");
              setCurrentSelected("5 Seats");
            }}
            background={currentSelected === "5 Seats" && "black"}
            color={currentSelected === "5 Seats" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5385/5385900.png"
              alt="5 seater"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("7 Seats");
              setCurrentSelected("7 Seats");
            }}
            background={currentSelected === "7 Seats" && "black"}
            color={currentSelected === "7 Seats" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5385/5385900.png"
              alt="7 seater"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("Petrol");
              setCurrentSelected("Petrol");
            }}
            background={currentSelected === "Petrol" && "black"}
            color={currentSelected === "Petrol" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4433/4433018.png"
              alt="Petrol"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("Diesel");
              setCurrentSelected("Diesel");
            }}
            background={currentSelected === "Diesel" && "black"}
            color={currentSelected === "Diesel" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4433/4433018.png"
              alt="Diesel"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("CNG");
              setCurrentSelected("CNG");
            }}
            background={currentSelected === "CNG" && "black"}
            color={currentSelected === "CNG" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/481/481233.png"
              alt="cng"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("Electric");
              setCurrentSelected("Electric");
            }}
            background={currentSelected === "Electric" && "black"}
            color={currentSelected === "Electric" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2087/2087628.png"
              alt="electric"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("Manual");
              setCurrentSelected("Manual");
            }}
            background={currentSelected === "Manual" && "black"}
            color={currentSelected === "Manual" && "white"}
            cursor="pointer"
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
            onClick={() => {
              getFilteredCars("Automatic");
              setCurrentSelected("Automatic");
            }}
            background={currentSelected === "Automatic" && "black"}
            color={currentSelected === "Automatic" && "white"}
            cursor="pointer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2579/2579085.png"
              alt="automatic"
              style={{ width: "30px", margin: "auto", background: "white" }}
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
            onClick={() => {
              getFilteredCars("3");
              setCurrentSelected("3");
            }}
            background={currentSelected === "3" && "black"}
            color={currentSelected === "3" && "white"}
            cursor="pointer"
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
            onClick={() => {
              getFilteredCars("4");
              setCurrentSelected("4");
            }}
            background={currentSelected === "4" && "black"}
            color={currentSelected === "4" && "white"}
            cursor="pointer"
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
            onClick={() => {
              getFilteredCars("All");
              setCurrentSelected("All");
            }}
            background={currentSelected === "All" && "black"}
            color={currentSelected === "All" && "white"}
            cursor="pointer"
          >
            <Text fontSize="13px">All</Text>
          </GridItem>
        </Grid>
      </Box>
      {/* kms run  */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Text align="left" mb="1" fontSize="13px">
          Kms run (k)
        </Text>
        <CarKmRunSlider
          defaultValue={100}
          handleCarKmsRunSlider={handleCarKmsRunSlider}
        />
      </Box>
      {/* car age  */}
      <Box py="3" borderBottom="1px solid gainsboro">
        <Text align="left" mb="1" fontSize="13px">
          Car Age
        </Text>
        <CarAgeSlider
          defaultValue={100}
          handleCarAgeSlider={handleCarAgeSlider}
        />
      </Box>
    </Box>
  );
}