import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import HomePageBox from "../Components/HomePageBox";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContextProvider";

export default function HomePage() {
  const {location} = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <HomePageBox />
      <Box w="70%" margin="auto">
        <Heading size="sm" mt="5" textAlign="left">
          SELF DRIVE CARS IN {location!=="" ? location : "BANGLORE"}
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
          In addition to being the capital city, {location!=="" ? location : "BANGLORE"} is a cosmopolitan city
          with people from all over the country, and ready to embrace an
          evolving lifestyle. Surrounded by the 4 states of Haryana, Rajasthan,
          Punjab, and Uttar Pradesh, {location!=="" ? location : "BANGLORE"} has a mixed culture and a vibrant
          social life. With an expanding road length of over 25,000 kilometres
          (including national highways), there has been a steady rise in the
          self drive car rental in {location!=="" ? location : "BANGLORE"} that are more affordable than
          chauffeur-driven vehicles and offers on-road convenience to young
          drivers and working professionals.{" "}
        </Text>
        <Heading size="sm" mt="5" textAlign="left">
          CAR ON RENT IN {location!=="" ? location : "BANGLORE"}
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
          Zoomcar allows you to hire a rental or self-drive car of your choice
          at an affordable rate. Sign up on our website or mobile app, and
          decide on the rental duration, pickup location, and car type. You can
          use Zoomcar to pick the car that is suited for your needs. For
          instance, choose a small car that can zip you through the city traffic
          in {location!=="" ? location : "BANGLORE"}, or a spacious SUV for an outstation travel such as for a
          drive from {location!=="" ? location : "BANGLORE"} to Agra. Car rentals make it possible for you to pick
          a car which suits your purpose, whether it is a small one when you are
          travelling alone, or a bigger spacious one when you are in a group.
          For a small convenience fee, you can also avail of our {location!=="" ? location : "BANGLORE"} airport
          Taxi. The {location!=="" ? location : "BANGLORE"} airport draws travellers from all over the world, and
          the easiest way to get a set of wheels on arrival is to hire a
          self-drive car which will be available as soon as you land. You can
          also opt for our luxury car hires such as Mercedes or Audi models for
          that special evening with your friend, or for attending a wedding in
          the city. Zoomcar provides you with the joy of driving a car, without
          any of the added responsibilities involved in owning a car such as
          filling up petrol, getting your car serviced, or paying for car
          insurance. It also ensures safety (especially for young women) while
          travelling in a group or individually.
        </Text>
        <Heading size="sm" mt="5" textAlign="left">
          RENT A CAR IN {location!=="" ? location : "BANGLORE"}
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
          Zoomcar provides you with a car on rent in {location!=="" ? location : "BANGLORE"} without a driver.
          Book your car conveniently through online booking or on your
          smartphone. The vehicles have all-India permits, and Zoomcar provides
          multiple parking sites across the country from where you can pick up
          your chosen car. You also have the flexibility of choosing from
          various packages, depending on whether you need the vehicle for a
          longer time or a longer distance.
        </Text>
        <Heading size="sm" mt="5" textAlign="left">
          ABOUT ZOOMCAR
        </Heading>
        <Text fontSize="15px" textAlign="left" mt="1">
          No more worries about petrol mileage, fuel costs, insurance, and car
          breakdowns! Zoomcar has enabled driving convenience for travellers
          around the country and is fast expanding its reach to cities including
          Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR,
          Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai,
          Mysore, Pune, Siliguri and Vizag. Self-drive cars from Zoomcar have
          given customers more control, privacy, and freedom. Book a self-drive
          car in any city you visit with the Zoomcar app on your phone and feel
          at home wherever you go.{" "}
        </Text>
      </Box>
      <Box>
        <Image
        m="5"
          src="https://www.zoomcar.com/build/6b51f1464b17dbb1d002f16e26572662.png"
          alt="tagline"
          maxH="200px"
        />
      </Box>
      <Text align="center" mt="5" mb="2" fontSize="12px">
        © Copyright 2022 Zoomcar India Private Ltd. All rights reserved
      </Text>
    </div>
  );
}
