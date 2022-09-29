
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoSwapHorizontalOutline } from "react-icons/io5";
import { Box, Button, Flex, Grid, Img, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "../Components/SideBar";

var hcbgImage = `https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1080,h_675/https://digitaldealer.com/wp-content/uploads/2018/06/Screen-Shot-2018-06-07-at-10.13.29-AM.png`;
var size = `100% 450px`
var height = `450px`
var btnclr1 = `#10a310`
var btnclr2 = `gray`

function Home() {

    const [aeroplane, setAeroplane] = useState(true);

    const handleClick=()=>{
        if(aeroplane == false)
        {
            setAeroplane(true)
            hcbgImage = `https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1080,h_675/https://digitaldealer.com/wp-content/uploads/2018/06/Screen-Shot-2018-06-07-at-10.13.29-AM.png`
            size = `100% 450px`
            height = `450px`
            btnclr1 = "#10a310"
            btnclr2 = "gray"
        }
        else{
            setAeroplane(false)
            hcbgImage =`https://www.zoomcar.com/img/banner_airport.png`;
            size = `100% 550px`
            height = `550px`
            btnclr1 = "gray"
            btnclr2 = "#10a310"
        }
    }

    return (
        <div>
            <Sidebar/>


            <div className="homeImage"
                    style={{
                        backgroundImage: `url(${hcbgImage})`,
                        backgroundSize: `${size}`,
                        // backgroundRepeat: "no-repeat",
                        width:"100%",
                        height: `${height}`,
                        // width:"100%",
                        color: "#f5f5f5",
                        // padding: "300px"
                        
                    }}

                >
                    <Box padding="250px">
                        <Box width="40%" margin="auto" 
                            // border="solid red 1px" 
                        >
                            <Flex>
                            <Button w="50%" height="50px" colorScheme='teal' variant='outline' bgColor="#fff"  borderRadius="none" 
                            style={{
                                color: `${btnclr1}`
                            }}
                            onClick={handleClick}>
                                <Grid>
                                    <Box margin="auto">
                                        <IoSwapHorizontalOutline />
                                    </Box>
                                    <Text>Round Trip</Text>
                                </Grid>
                            </Button>
                            <Button w="50%" height="50px" colorScheme='teal' variant='outline' bgColor="#fff"  borderRadius="none" 
                            style={{
                                color: `${btnclr2}`
                            }}
                            onClick={handleClick}>
                                <Grid>
                                    <Box margin="auto">
                                        <GiAirplaneDeparture />
                                    </Box>
                                    <Text>Airport Round Trip</Text>
                                </Grid>
                            </Button>
                            </Flex>
                        
                        </Box>

                        <Box width="40%" margin="auto" marginTop="10px">
                            { aeroplane ? <Input
                            bgColor="#ffffff"
                            height="50px"
                            placeholder="Pick Up City, Airport, Address or Hotel"
                            /> : <Input 
                                bgColor="#ffffff"
                                height="50px"
                                placeholder="
                                Mumbai
                                T-2, Chhatrapati Shivaji Maharaj International Ai"
                            />}
                        </Box>

                        <Box width="40%" margin="auto" marginTop="10px">
                            { aeroplane ? "" : <Input 
                                bgColor="#ffffff"
                                height="50px"
                                color="gray"
                                type="datetime-local"
                                // placeholder="
                                // Thu, 29 Sep '22, 8:00 PM -> Fri, 30 Sep '22, 4:00 AM"
                            /> }
                        </Box>

                        <Box width="40%" margin="auto" marginTop="10px">

                        { aeroplane ? <Button w="100%" height="50px" colorScheme='gray' variant='solid' bgColor="#fff" color="gray">
                            FIND CARS
                        </Button> : 
                        <Button w="100%" height="50px" colorScheme='#10a310' variant='solid' bgColor="#10a310" >
                            FIND CARS
                        </Button>}

                        </Box>
                    </Box>
                </div>

                     {/* WHITE DIV SECTION  */}

                <Box 
                width="100%" 
                height="350px" 
                margin="auto" 
                // border="solid red 1px"
                >
                    <Box width="70%" margin="auto" marginTop="50px">
                        <Flex justifyContent="space-evenly" >
                            <Box width="48%" height="250px" margin="auto" border="solid #d3d3d3 1px" textAlign="start" borderRadius="7px">
                                <Grid>
                                <Box w="70%" padding="10px">
                                    <Text fontSize="1.3vw" fontWeight="600">Your BFF heading for a vacay?</Text>
                                </Box>
                                <Box w="50%" padding="10px">
                                    <Text>You earn 500 in Z-Points. Your friend gets 20% off on first booking</Text>
                                </Box>
                                <Box width="100%" height="50px" borderTop="solid #d3d3d3 1px" marginTop="50px" padding="10px">
                                    <Flex>
                                    <ArrowForwardIcon fontSize="1.8vw" color="green" />
                                    <Text fontSize="1.2vw" fontWeight="600">REFER FRIENDS</Text>
                                    </Flex>
                                </Box>
                                </Grid>
                            </Box>
                            <Box width="48%" height="250px" margin="auto" border="solid #d3d3d3 1px" textAlign="start" borderRadius="7px">
                                <Flex>
                                    <Grid w="75%" >
                                        <Box w="100%" padding="10px">
                                            <Text fontSize="1.7vw" fontWeight="600">UP TO 20% OFF</Text>
                                        </Box>

                                        <Box w="100%" paddingLeft="10px">
                                            <Text fontSize="1.2vw" fontWeight="600">on your first booking from the app!</Text>
                                        </Box>
                                        
                                        <Box padding="10px">
                                            <Box w="100%" border="solid gray 2px" borderStyle="dashed " >
                                                <Text padding="5px" color="gray" fontSize="1.5vw" fontWeight="600">Use Code: ZOOMNEW</Text>
                                            </Box>
                                        </Box>

                                        <Box paddingLeft="10px">
                                            <Text fontSize="1.5vw" fontWeight="600" color="green" >Install Zoomcar App now!</Text>
                                        </Box>
                                    </Grid>

                                    <Box>
                                        <Img src="https://www.zoomcar.com/img/cellphone.png" />
                                    </Box>
                                </Flex>
                            </Box>
                        </Flex> 
                    </Box>
                </Box>

                {/* ABOUT DIV SECTION  */}

                <Box w="100%" 
                border="solid #f5f5f5 1px" 
                bgColor="#f5f5f5">
                    <Box w="100%" height="50px" border="solid red 1px" bgColor="#fff" marginTop="20px" >
                        {/* <Select w="10%" textAlign="center" margin="auto" padding="10px" variant="unstyled" placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select> */}

                        
                    </Box>

                    {/* INSIDE ABOUT PAGE  */}

                    <Box w="70%" margin="auto" borderTop="solid #d3d3d3 1px" >
                        <Box w="100%" textAlign="start" padding="15px" >
                            <Box fontSize="1vw" fontWeight="800" paddingLeft="10px" marginTop="20px">
                                <Text>SELF DRIVE CARS IN MUMBAI</Text>
                            </Box>
                            <Box fontSize="0.8vw" padding="10px">The financial capital of India, Mumbai is a city which never sleeps. Buzzing with activity, it also holds the distinction of being the entertainment hub of the country. With a beach in its backyard and the picturesque Western Ghats a stone’s throw away, the city attracts visitors from all over the word. From the Gateway of India which opens the doors to India’s mysteries, to the ancient caves of Elephanta Island, and from the iconic Stock Exchange to the many studios where Bollywood movies are made, the city offers a multitude of sights and experiences.
                                The downside of life in Mumbai is the difficulty commuting poses. Overloaded public transport and increasing distances add to the stress of living in Mumbai. Whether you are a visitor to this melting-pot of cultures, or a resident of the city, it is important to have a self-drive car at your disposal to make the most of your time. If you do not plan to buy a car of your own, Zoomcar offers the perfect solution by making the process of self- drive car booking in Mumbai convenient and affordable. The Zoomcar app allows you the freedom of booking a car at your fingertips.
                            </Box>

                            <Box fontSize="1vw" fontWeight="800" paddingLeft="10px" marginTop="20px">
                                <Text>CAR ON RENT IN MUMBAI</Text>
                            </Box>
                            <Box fontSize="0.8vw" padding="10px">
                                On many occasions, working professionals and business persons want to commute to different parts of the city in the same day. Usually, they hire a chauffeur driven car and pay extra for the waiting charges. This option, while popular, is also more expensive. It is more economical to opt for a self-drive car rental in Mumbai. You can spend any amount of time at a meeting without having to worry about the waiting charges, and use the car to explore Mumbai after work at your leisure. Zoomcar also provides Mumbai airport taxi service, using which you can pick up one of our cars right at the airport when you land. We have a variety of cars in our fleet including luxury brands which makes it easier to book luxury cars on rent in Mumbai.
                            </Box>

                            <Box fontSize="1vw" fontWeight="800" paddingLeft="10px" marginTop="20px">
                                <Text>CAR RENTAL IN MUMBAI</Text>
                            </Box>
                            <Box fontSize="0.8vw" padding="10px">
                                An ideal way to relax after a stressful week at the office is to go on a long drive from Mumbai to Pune or from Mumbai to Nasik. Enjoy the drive on the wide 6-lane Mumbai – Pune expressway with your loved ones by taking a car on hire in Mumbai. There are many religious sites, parks, and museums in Nasik which makes it an ideal location to unwind.
                            </Box>

                            <Box fontSize="1vw" fontWeight="800" paddingLeft="10px" marginTop="20px">
                                <Text>ABOUT ZOOMCAR</Text>
                            </Box>
                            <Box fontSize="0.8vw" padding="10px">
                                No more worries about petrol mileage, insurance, and car breakdowns! Zoomcar has enabled driving convenience for travellers around the country and is fast expanding its reach to cities including Ahmedabad, Bangalore, Chandigarh, Chennai, Coimbatore, Delhi-NCR, Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai, Mysore, Pune, Siliguri and Vizag. 
                                Self-drive cars from Zoomcar have given customers more control, privacy, and freedom. Book a self-drive car in any city you visit with the Zoomcar app on your phone and feel at home wherever you go. 
                            </Box>

                        </Box>
                    </Box>
                </Box>

                {/* BOTTOM SECTION  */}

                <Box w="100%" height="330px" 
                // border="solid red 1px" 
                bgColor="#fff" >
                    <Box padding="20px" marginTop="40px">
                        <Img boxSize="17%" src="https://www.zoomcar.com/build/6b51f1464b17dbb1d002f16e26572662.png" />
                    </Box>

                    <Box margin="auto" >
                        <Text fontSize="0.9vw">© Copyright 2022 Zoomcar India Private Ltd. All rights reserved</Text>
                    </Box>
                </Box>
        </div>
    )
}

export default Home;

// https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1080,h_675/https://digitaldealer.com/wp-content/uploads/2018/06/Screen-Shot-2018-06-07-at-10.13.29-AM.png