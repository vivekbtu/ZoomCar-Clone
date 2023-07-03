import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import SortAndFilters from "../Components/SortAndFilters";
import CarCard from "../Components/CarCard";
import Navbar from "../Components/Navbar";
import axios from "axios";
import SmallScreenCarCard from "../Components/SmallScreenCarCard";
import { AuthContext } from "../Context/AuthContextProvider";
import SelectLocation from "./SelectLocation";

let today = new Date().toISOString().slice(0, 10) +" / "+ new Date().toLocaleTimeString();
var end = new Date();
end.setHours(23, 59, 59);
console.log(end.toUTCString())
console.log(today)

const addToBooking = async (carId) => {
  // get token from ls
  let token = localStorage.getItem("token");

  await axios
    .post(
      "https://json-server-p1rm.onrender.com/bookings",
      {
        car_id: carId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    )
    .then((res) => {
      console.log(res.data.id);
      alert("car booking successful");
      if(res.data.image !== null || res.data.image !== undefined ){
        localStorage.setItem("id", res.data.id)
      }
    })
    .catch((err) => {
      console.log(err);
    });

  // old
  // return axios
  //   .post(`https://json-server-p1rm.onrender.com/bookings`, {
  //     image: carObj.image,
  //     name: carObj.name,
  //     transmission: carObj.transmission,
  //     fuel: carObj.fuel,
  //     seats: carObj.seats,
  //     ratings: carObj.ratings,
  //     kms: carObj.kms,
  //     address: carObj.address,
  //     discount_price: carObj.discount_price,
  //     original_price: carObj.original_price,
  //   })
  //   .then(() => {
  //     alert("booking successful");
  //   });
};

export default function CarPage() {
  const [isSmallerThan950] = useMediaQuery("(max-width: 950px)");
  const [isSmallerThan650] = useMediaQuery("(max-width: 650px)");
  const [sortOrFilterApplied, setSortOrFilterApplied] = useState(false);

  // to handle select location modal box
  const { location } = useContext(AuthContext);
  const [openModal, setModalStatus] = useState(false);

  // for storing cars data
  const [carsArray, setCarsArray] = useState([]);
  // const [filteredCars, setFilteredCars] = useState([]);

  // function to get cars data
  const getAllCars = async () => {
    await axios
      .get("https://zoomcar-api-two.vercel.app/cars")
      .then((res) => {
        setCarsArray(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // function to display searched car
  const displaySearchedCar = async (carName) => {
    // search for cars through api and update the results
    if (carName !== "") {
      let data = await axios
        .get(`https://zoomcar-api-two.vercel.app/search/${carName}`)
        .then(
          (res) =>
            // update carsArray
            res.data
        )
        .catch((err) => "error");

      if (typeof data === "object") {
        console.log(data);
        let car = [data];
        setCarsArray(car);
      } else {
        setCarsArray([]);
      }
    }
  };

  // function to handle sorted cars
  const handleSortedCars = (sortType) => {
    // console.log(sortType);
    // relevance,lowToHigh,highToLow,bestRated,distance,carAge,kmsDriven,popularity
    // for relevance do nothing
    let sortedCars = [...carsArray];
    if (sortType === "lowToHigh") {
      sortedCars.sort(
        (a, b) => Number(a.discount_price) - Number(b.discount_price)
      );
      // update carsArray
      setCarsArray(sortedCars);
    } else if (sortType === "highToLow") {
      sortedCars.sort(
        (a, b) => Number(b.discount_price) - Number(a.discount_price)
      );
      // update carsArray
      setCarsArray(sortedCars);
    } else if (sortType === "bestRated" || sortType === "popularity") {
      sortedCars.sort(
        (a, b) =>
          Number(b.ratings.split(" ")[0]) - Number(a.ratings.split(" ")[0])
      );
      // update carsArray
      setCarsArray(sortedCars);
    } else if (sortType === "distance") {
      sortedCars.sort(
        (a, b) =>
          Number(a.address.split(" ")[0]) - Number(b.address.split(" ")[0])
      );
      // update carsArray
      setCarsArray(sortedCars);
    } else if (sortType === "kmsDriven" || sortType === "carAge") {
      sortedCars.sort((a, b) => {
        let d1 = a.kms.split(" ")[0].split("");
        let d11 = [...d1];
        d11.pop();
        d11 = d11.join("");
        d1 = Number(d11);

        let d2 = b.kms.split(" ")[0].split("");
        let d22 = [...d2];
        d22.pop();
        d22 = d22.join("");
        d2 = Number(d22);

        // console.log(d1, d2);
        return d1 - d2;
      });
      // update carsArray
      setCarsArray(sortedCars);
    }
  };

  // function to handle filter car
  const handleFilteredCars = (filteredCarsData) => {
    // console.log(filteredCarsData);
    // set the carsArray with received filtered cars
    setCarsArray(filteredCarsData);

    // if filteredCarsData === "" , refetch all cars , run getallcars fn
    if (filteredCarsData === "") {
      setCarsArray([]);
      // , run getallcars fn
      getAllCars();
    } else {
      setCarsArray(filteredCarsData);
    }
  };

  // function to filter car based on car age using slider
  const filterCarByAgeUsingSlider = async (carAge) => {
    console.log(carAge);
    // make an api request to get all cars and perform filtering
    let data = await axios
      .get("https://zoomcar-api-two.vercel.app/cars")
      .then((res) => res.data)
      .catch((err) => "error");

    if (data !== "error") {
      let cars = [];
      data.forEach((c) => {
        let d1 = c.kms.split(" ")[0].split("");
        let d11 = [...d1];
        d11.pop();
        d11 = d11.join("");
        d1 = Number(d11);
        if (d1 <= carAge) {
          cars.push(c);
        }
      });

      // update carsArray
      setCarsArray(cars);
    }
  };

  // function to filter car based on kms run using slider
  const filterCarByKmsUsingSlider = async (kmsRun) => {
    console.log(kmsRun);
    // make an api request to get all cars and perform filtering
    let data = await axios
      .get("https://zoomcar-api-two.vercel.app/cars")
      .then((res) => res.data)
      .catch((err) => "error");

    if (data !== "error") {
      let cars = [];
      data.forEach((c) => {
        let d1 = c.kms.split(" ")[0].split("");
        let d11 = [...d1];
        d11.pop();
        d11 = d11.join("");
        d1 = Number(d11);
        if (d1 <= kmsRun) {
          cars.push(c);
        }
      });

      // update carsArray
      setCarsArray(cars);
    }
  };

  useEffect(() => {
    // axios
    //   .get("https://zoomcar-api-two.vercel.app/cars")
    //   .then((res) => {
    //     setCarsArray(res.data);
    //   })
    //   .catch((err) => console.log(err));
    getAllCars();
  }, []);

  return (
    <>
      <Navbar />
      <Flex justifyContent="center" gap="4" py="3" flexWrap="wrap" bg="#f5f5f5">
        {!isSmallerThan950 && (
          <SortAndFilters
            handleFilteredCars={handleFilteredCars}
            handleSortedCars={handleSortedCars}
            displaySearchedCar={displaySearchedCar}
            sortOrFilterApplied={sortOrFilterApplied}
            setSortOrFilterApplied={setSortOrFilterApplied}
            filterCarByAgeUsingSlider={filterCarByAgeUsingSlider}
            filterCarByKmsUsingSlider={filterCarByKmsUsingSlider}
          />
        )}
        {/* car list  */}
        <Box w={!isSmallerThan950 ? "68%" : "95%"}>
          {/* top section */}
          {!isSmallerThan650 && (
            <Flex justifyContent="space-between">
              <Flex
                bg="white"
                w="49%"
                p="1"
                alignItems="center"
                gap="2"
                fontSize="13px"
                borderRadius="0.25rem"
                cursor="pointer"
                onClick={() => {
                  setModalStatus(true);
                }}
              >
                <Box bgGradient="linear(to-r, green.50, green.50)">
                  <GoPrimitiveDot color="teal" />
                </Box>
                <Box>{location !== "" && `${location}, `} </Box>
                <Box>Pick Up City, Airport, Address Or Hotel</Box>
              </Flex>
              <Flex
                bg="white"
                w="49%"
                p="1"
                alignItems="center"
                justifyContent="space-evenly"
                gap="2"
                wrap={"wrap"}
                borderRadius="0.25rem"
                cursor="pointer"
              >
                <Box textAlign="left">
                  <Text fontSize="10px">START DATE/TIME</Text>
                  <Text fontSize={{"sm":"9px","md":"10px","lg":"12px"}} fontWeight="bold">
                    {/* 1 Oct, 2022 02:00 PM{" "} */}
                    {today}
                  </Text>
                </Box>
                <Box>
                  <BsArrowRight />
                </Box>
                <Box textAlign="right">
                  <Text fontSize="10px">END DATE/TIME</Text>
                  <Text fontSize={{"sm":"9px","md":"10px","lg":"12px"}} fontWeight="bold">
                    {/* 1 Oct, 2022 10:00 PM{" "} */}
                    {end.toUTCString()}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          )}
          <br />
          {/* car list data */}
          <Box
            // maxH={!isSmallerThan650 && "500px"}
            maxH={"83vh"}
            overflow={!isSmallerThan650 && "auto"}
          >
            {!isSmallerThan650
              ? carsArray.map((car) => (
                  <CarCard
                    key={car._id}
                    image={car.image}
                    name={car.name}
                    transmission={car.transmission}
                    fuel={car.fuel}
                    seats={car.seats}
                    ratings={car.ratings}
                    kms={car.kms}
                    address={car.address}
                    discount_price={car.discount_price}
                    original_price={car.original_price}
                    carId={car._id}
                    addToBooking={addToBooking}
                  />
                ))
              : carsArray.map((car) => (
                  <SmallScreenCarCard
                    key={car._id}
                    image={car.image}
                    name={car.name}
                    transmission={car.transmission}
                    fuel={car.fuel}
                    seats={car.seats}
                    ratings={car.ratings}
                    kms={car.kms}
                    address={car.address}
                    discount_price={car.discount_price}
                    original_price={car.original_price}
                    carId={car._id}
                    addToBooking={addToBooking}
                  />
                ))}
            {carsArray.length === 0 ? <Text m="3">No Cars Found..</Text> : null}
          </Box>
        </Box>
      </Flex>
      {
        // open modal
        <SelectLocation openModal={openModal} setModalStatus={setModalStatus} />
      }
    </>
  );
}