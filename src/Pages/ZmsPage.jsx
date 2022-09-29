import { Box, Button, Container, Flex, FormControl, Grid, GridItem, HStack, Icon, Img, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import Navbar from "../Components/ZmsNavbar";



const hcbgImage = `https://i.pcmag.com/imagery/articles/07Mif8TyNR8M0qD4Qdc1bCJ-2.fit_lim.size_1600x900.v1569484061.jpg`;


function ZmsPage() {

    return (
        <>
            <Box margin="auto">

                


                <div className="ZmsImage"
                    style={{
                        backgroundImage: `url(${hcbgImage})`,
                        backgroundSize: "100% 100vh",
                        height: "100vh",
                        // width:"100%",
                        color: "#f5f5f5",
                        // padding: "300px"
                    }}

                >
                    {/* //////////////// NAVBAR SECTION ////////////////// */}

                    <Navbar/>
                    {/* <Box width="100%" height="70px" margin="auto" border='solid red 1px' >
                        <Flex display="flex" justifyContent="space-around" alignItems="center" textAlign="center">
                            <Box >
                                <Button>Require</Button>
                            </Box>
                            <Box>
                                <Button>Demo</Button>
                            </Box>
                        </Flex>
                    </Box> */}

                    {/* ///////////  BUTTON DIV //////////// */}
                    <Box padding="250px">
                    <Box width="60%" margin="auto" border='solid red 1px' >
                        <Text fontSize="2.5vw" fontWeight="500">Inspiring Profitable Mobility Solutions of Tomorrow</Text>
                    </Box>

                    <Box width="60%" margin="auto">
                        <Text fontSize="1.2vw">Suite of Connected Technology Offerings and Connected Mobility Solutions for Businesses Worldwide</Text>
                    </Box>

                    <Button w="28%" position="-moz-initial" padding="0px 50px 0px 50px" colorScheme='(16,163,16)' size='md' bgColor="#10a310" marginTop="50px">
                        Request Demo
                    </Button>
                    </Box>
                </div>


                {/* //////////////  Green Border   //////////////// */}

                <Box border="solid #10a310 8px" bgColor="#10a310" ></Box>

                <Box marginTop="70px" marginBottom="70px">
                    <Text fontSize="2.4vw" fontWeight="650">Product Offering</Text>
                </Box>

                <Box>
                    <Box width="70%" margin="auto" border='solid red 1px' bgColor="#F5F5F5" borderRadius="8px">
                        <Box width="85%" height="70px" margin="auto" border='solid red 1px' marginTop="-35px" bgColor="#FFFFFF" padding="3px">
                            <Flex gap={2}>
                                <Button w="50%" position="-moz-initial" height="60px" colorScheme='(16,163,16)' size='lg' bgColor="#10a310" fontSize="1.2vw">
                                    Connected Vehicle Solutions
                                </Button>
                                <Button w="50%" position="-moz-initial" height="60px" colorScheme='(16,163,16)' size='lg' bgColor="#FFFFFF" color="black" fontSize="1.2vw">
                                    Yield Management Services
                                </Button>
                            </Flex>
                        </Box>

                        <Box width="55%" margin="auto" border='solid red 1px' marginTop="40px" >
                            <Text color="#666666">All-in-one solution to reduce operating costs over 30% via advanced vehicle monitoring and management systems</Text>
                        </Box>

                        <Box width="95%" margin="auto" border='solid red 1px' marginTop="40px" >
                            <Img width="100%" src="https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_E.43c8d28a91111b0eb44831b1d040bc79.jpg" alt="logo" />
                        </Box>

                        <Box width="13%" border='solid red 1px' marginTop="40px" marginLeft="25px">
                            <Text fontSize="1.8vw" fontWeight="500" color="#666666">FEATURES</Text>
                        </Box>

                        <Box w="95%" margin="auto" marginTop="40px">
                            <SimpleGrid columns={[1, 2, 3, 3]} spacing={5} textAlign="start" >

                                <Box height="120px" margin="auto" border='solid red 1px' padding="10px">
                                    <Box fontWeight="600">Vehicle Tracking & Safety</Box>
                                    <Box marginTop="15px" color="#666666">Geo-fencing, Real time alerts, immobilization to manage 24x7</Box>
                                </Box>

                                <Box height="120px" margin="auto" border='solid red 1px' padding="10px">
                                    <Box fontWeight="600">Driver Score</Box>
                                    <Box marginTop="15px" color="#666666">Improved fuel efficiency and cost benefits from better driving behavior</Box>
                                </Box>

                                <Box height="120px" margin="auto" border='solid red 1px' padding="10px">
                                    <Box fontWeight="600">Vehicle Health Monitoring</Box>
                                    <Box marginTop="15px" color="#666666">Real-time Asset health monitoring systems for reduced downtime</Box>
                                </Box>

                                <Box height="120px" margin="auto" border='solid red 1px' padding="10px">
                                    <Box fontWeight="600">Fuel Management</Box>
                                    <Box marginTop="15px" color="#666666">Real time fuel level monitoring and fuel theft detection mechanisms</Box>
                                </Box>

                                <Box height="120px" margin="auto" border='solid red 1px' padding="10px">
                                    <Box fontWeight="600">Operations Automation</Box>
                                    <Box marginTop="15px" color="#666666">Automate routine operational tasks and increase uptime over 25%</Box>
                                </Box>
                            </SimpleGrid>
                        </Box>

                        <Box width="20%" border='solid red 1px' marginTop="40px" marginLeft="25px" marginBottom="40px">
                            <Button w="100%" position="-moz-initial" padding="0px 60px 0px 60px" colorScheme='(16,163,16)' size='md' bgColor="#10a310">
                                More Details
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box width="100%" height="500px" margin="auto" border='solid red 1px' marginTop="100px" bgColor="#10a310" >
                    <Box marginTop="60px">
                        <Text fontSize="2.4vw" fontWeight="600" color="white">Why Partner with Us?</Text>
                    </Box>

                    <Box width="80%" margin="auto" border='solid red 1px' marginTop="60px" bgColor="#F5F5F5" >
                        <Box w="95%" margin="auto" marginTop="40px" marginBottom="50px">
                            <SimpleGrid columns={[1, 2, 3, 3]} spacing={5} textAlign="start" >

                                <Box height="220px" margin="auto" border='solid red 1px' padding="10px">
                                    <Img boxSize="50px" src="https://www.zoomcar.com/images/icons-timer-new.png" alt="logo" />
                                    <Box marginTop="15px" fontWeight="600">Quick Go-To Market</Box>
                                    <Box marginTop="15px" color="#666666">Quick and easy onboarding with a fast turnaround time of one week</Box>
                                </Box>

                                <Box height="220px" margin="auto" border='solid red 1px' padding="10px">
                                    <Img boxSize="50px" src="https://www.zoomcar.com/images/icons-car-new.png" alt="logo" />
                                    <Box marginTop="15px" fontWeight="600">India’s largest B2C Mobility Platform</Box>
                                    <Box marginTop="15px" color="#666666">Fleet management experience of managing 20,000+ assets</Box>
                                </Box>

                                <Box height="220px" margin="auto" border='solid red 1px' padding="10px">
                                    <Img boxSize="50px" src="https://www.zoomcar.com/images/icons-remote-new.png" alt="logo" />
                                    <Box marginTop="15px" fontWeight="600">Works Across Vehicle Types</Box>
                                    <Box marginTop="15px" color="#666666">Works seamlessly across - 2W, 3W, Cars, Trucks & Electric Vehicles alike</Box>
                                </Box>

                                <Box height="220px" margin="auto" border='solid red 1px' padding="10px">
                                    <Img boxSize="50px" src="https://www.zoomcar.com/images/icons-table-new.png" alt="logo" />
                                    <Box marginTop="15px" fontWeight="600">Advanced Data Science Capabilities</Box>
                                    <Box marginTop="15px" color="#666666">Self-learning algorithms powered by Artificial Intelligence & Machine Learning to predict driver behaviour</Box>
                                </Box>

                                <Box height="220px" margin="auto" border='solid red 1px' padding="10px">
                                    <Img boxSize="50px" src="https://www.zoomcar.com/images/icons-license-new.png" alt="logo" />
                                    <Box marginTop="15px" fontWeight="600">Commitment to Customer Satisfaction</Box>
                                    <Box marginTop="15px" color="#666666">24x7 dedicated assistance and support system</Box>
                                </Box>

                                <Box height="220px" margin="auto" border='solid red 1px' padding="10px">
                                    <Img boxSize="50px" src="https://www.zoomcar.com/images/icons-delivery-green-new.png" alt="logo" />
                                    <Box marginTop="15px" fontWeight="600">Pioneer in Shared subscription</Box>
                                    <Box marginTop="15px" color="#666666">Innovative techniques to enable 2-sided marketplaces for better utilisation & revenue</Box>
                                </Box>

                                <Box height="220px" margin="auto" border='solid red 1px' padding="10px">
                                    <Img boxSize="50px" src="https://www.zoomcar.com/images/icons-setting-green-new.png" alt="logo" />
                                    <Box marginTop="15px" fontWeight="600">Proven Next Gen Technology</Box>
                                    <Box marginTop="15px" color="#666666">Best in class stable and scalable tech solutions</Box>
                                </Box>

                                <Box height="220px" margin="auto" border='solid red 1px' padding="10px">
                                    <Img boxSize="50px" src="https://www.zoomcar.com/images/icons-distance-new.png" alt="logo" />
                                    <Box marginTop="15px" fontWeight="600">Futuristic Products</Box>
                                    <Box marginTop="15px" color="#666666">Always in sync with the evolving business landscape</Box>
                                </Box>

                                <Box height="220px" margin="auto" border='solid red 1px' padding="10px">
                                    <Img boxSize="50px" src="https://www.zoomcar.com/images/icons-office-new.png" alt="logo" />
                                    <Box marginTop="15px" fontWeight="600">Powering Multiple Sectors</Box>
                                    <Box marginTop="15px" color="#666666">Partners range from Government bodies to Global companies across varied geographies</Box>
                                </Box>

                            </SimpleGrid>
                        </Box>
                    </Box>
                </Box>

                <Box width="80%" margin="auto" border='solid red 1px' marginTop="530px" >
                    <Img src="https://www.zoomcar.com/assets/component-images/dashboard@2x.a2445440373cd84df21b0d887b8d389f.png" alt="logo" />
                </Box>

                <Box width="80%" margin="auto" border='solid red 1px' bgColor="#F5F5F5" marginTop="-220px" >
                    <Box marginTop="240px">
                        <Text fontSize="2vw" fontWeight="700">Proven track records</Text>
                    </Box>

                    <Box w="35%" margin="auto" marginTop="20px">
                        <Text color="#666666">Backed by deep learnings and great driving experiences brought to you over 1 billion+ kms spanning over 7 years</Text>
                    </Box>

                    <Box w="40%" margin="auto" marginTop="40px">
                        <SimpleGrid columns={[1, 2, 2, 2]} spacing={5} textAlign="start" >

                            <Box height="260px" margin="auto" border='solid red 1px' padding="10px" bgColor="black">
                                <Img boxSize="70px" src="https://www.zoomcar.com/images/icons-fuel-fuel-type.png" alt="logo" />

                                <Box marginTop="90px" color="white" fontSize="1.5vw" fontWeight="700">30% Fuel Costs Savings</Box>
                            </Box>

                            <Box height="260px" margin="auto" border='solid red 1px' padding="10px" bgColor="black">
                                <Img boxSize="70px" src="https://www.zoomcar.com/images/icons-swap.png" alt="logo" />

                                <Box marginTop="90px" color="white" fontSize="1.5vw" fontWeight="700">20% Reduction in Fleet Downtime</Box>
                            </Box>

                            <Box height="260px" margin="auto" border='solid red 1px' padding="10px" bgColor="black">
                                <Img boxSize="70px" src="https://www.zoomcar.com/images/icons-car-pick-up.png" alt="logo" />

                                <Box marginTop="90px" color="white" fontSize="1.5vw" fontWeight="700">50% Less Accidents & Better Safety</Box>
                            </Box>

                            <Box height="260px" margin="auto" border='solid red 1px' padding="10px" bgColor="black">
                                <Img boxSize="70px" src="https://www.zoomcar.com/images/icons-deposit.png" alt="logo" />

                                <Box marginTop="90px" color="white" fontSize="1.5vw" fontWeight="700">25% Maintenance Cost Reduction</Box>
                            </Box>

                            <Box height="260px" margin="auto" border='solid red 1px' padding="10px" bgColor="black">
                                <Img boxSize="70px" src="https://www.zoomcar.com/images/icons-ruppee.png" alt="logo" />

                                <Box marginTop="90px" color="white" fontSize="1.5vw" fontWeight="700">15% Revenue Uplift</Box>
                            </Box>

                            <Box height="260px" margin="auto" border='solid red 1px' padding="10px" bgColor="black">
                                <Img boxSize="70px" src="https://www.zoomcar.com/images/icons-arrows-arrow-right-top.png" alt="logo" />

                                <Box marginTop="90px" color="white" fontSize="1.2vw" fontWeight="700">Increase in sales funnel conversion and utilisation</Box>
                            </Box>
                        </SimpleGrid>
                    </Box>

                    <Box width="100%" margin="auto" bgColor="white" border='solid red 1px' marginTop="-360px" >

                        <Box margin="auto" marginTop="500px">
                            <Text fontSize="2.5vw" fontWeight="600">Connect With Us</Text>
                        </Box>

                        <Box width="40%" margin="auto" marginTop="10px">
                            <Text fontSize="1.2vw" color="#666666">Leave details for us to help your business become future ready</Text>
                        </Box>

                        <Box width="40%" margin="auto" bgColor="white" border='solid red 1px' marginTop="20px" marginBottom="270px">
                            <Grid templateColumns="repeat(2,1fr)" gap={2} w="full" >

                                <GridItem colSpan={{ base: 2, lg: 1 }} >
                                    <FormControl isRequired padding="5px" position="relative">
                                        <Input
                                            placeholder="Name"
                                            height="60px" />
                                    </FormControl>
                                </GridItem>

                                <GridItem colSpan={{ base: 2, lg: 1 }}>
                                    <FormControl isRequired padding="5px">
                                        <Input
                                            placeholder="Company Name"
                                            
                                            height="60px" />
                                    </FormControl>
                                </GridItem>

                                <GridItem colSpan={{ base: 2, lg: 2 }}>
                                    <FormControl isRequired padding="5px">
                                        <Input
                                            placeholder="Email"
                                            height="60px" />
                                    </FormControl>
                                </GridItem>

                                <GridItem colSpan={{ base: 2, lg: 1 }}>
                                    <FormControl isRequired padding="5px">
                                        <Input
                                            placeholder="Phone Number"
                                            height="60px" />
                                    </FormControl>
                                </GridItem>

                                <GridItem colSpan={{ base: 2, lg: 1 }}>
                                    <FormControl isRequired padding="5px">
                                        <Input
                                            placeholder="Country"
                                            height="60px" />
                                    </FormControl>
                                </GridItem>

                                <GridItem colSpan={{ base: 2, lg: 2 }}>
                                    <FormControl isRequired padding="5px">
                                        <Textarea
                                            placeholder="Mention Requirements" />
                                    </FormControl>
                                </GridItem>

                            </Grid>


                            <Button position="-moz-initial" padding="0px 70px 0px 70px" colorScheme='(16,163,16)' size='md' bgColor="#10a310" marginTop="50px">
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* ///////////// GREEN BORDER ////////////////// */}

                <Box border="solid #10a310 8px" bgColor="#10a310" ></Box>


                <Box width="100%" height="400px" margin="auto" bgColor="black" border='solid red 1px'>
                    <Box marginTop="100px" fontSize="1.1vw">
                        <Text color="white">For more information, connect with us at</Text>
                    </Box>

                    <Box marginTop="10px" fontSize="1.2vw" fontWeight="600">
                        <Text color="white">zms.contact@zoomcar.com</Text>
                    </Box>

                    <Box width="7%" margin="auto" paddingTop="80px">
                        <Img src="https://www.zoomcar.com/assets/component-images/zms-logo-white.2af37707ebe1f0942fd6285bb0fdf3d9.png" />
                    </Box>

                    <Box marginTop="10px" fontSize="1.2vw" >
                        <Text color="#A8A8A8">ⓒ 2020 Zoomcar | All Rights Reserved</Text>
                    </Box>
                </Box>
            </Box>
        </>


    )
}

export default ZmsPage;