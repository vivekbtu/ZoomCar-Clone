import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsMap } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { TbCurrentLocation } from "react-icons/tb";
import { VscLocation } from "react-icons/vsc";
import { AuthContext } from "../Context/AuthContextProvider";
import Map from "./Map";

export default function SelectLocation({ openModal, setModalStatus }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openMap, setMapStatus] = useState(false);

  const { changeLocation } = useContext(AuthContext);

  useEffect(() => {
    if (openModal) {
      onOpen();
      setModalStatus(false);
    }
  });

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <BsArrowLeft fontSize="30px" onClick={onClose} />
          </ModalHeader>
          <ModalBody>
            <Box w="100%" p="7" centerContent>
              <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                <Flex
                  bg="white"
                  p="2"
                  alignItems="center"
                  border="1px solid gainsboro"
                  borderRadius="0.5rem"
                  cursor="pointer"
                >
                  <Box bgGradient="linear(to-r, green.50, green.50)">
                    <GoPrimitiveDot color="teal" />
                  </Box>
                  <Input
                    maxWidth="400px"
                    onClick={() => setModalStatus(true)}
                    placeholder="Select your starting point"
                    _focusVisible={false}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        onClose();
                      }
                    }}
                    onChange={(e) => changeLocation(e.target.value)}
                    border="0"
                  />
                </Flex>
                <Button
                  _hover="none"
                  bg="white"
                  leftIcon={<TbCurrentLocation fontSize="40px" />}
                >
                  <Text>Current Location</Text>
                </Button>
                <Button
                  _hover="none"
                  bg="white"
                  leftIcon={<BsMap fontSize="40px" />}
                  onClick={() => setMapStatus(true)}
                >
                  <Text>Select Location on Map</Text>
                </Button>
              </Flex>
              <br />
              <Box w="90%" margin="auto" px="10" py="7" bg="#fbfbfb">
                <Flex w="100%" justifyContent="space-evenly" gap="5">
                  <Flex flexDirection="column" w="50%">
                    <Text px="7" py="2" mb="2" bg="#f5f5f5">
                      RECENTLY SEARCHED LOCATIONS
                    </Text>
                    <Box
                      fontWeight="normal"
                      fontSize="lg"
                      _hover="none"
                      bg="#fbfbfb"
                      display="flex"
                      cursor="pointer"
                    >
                      <VscLocation fontSize="50px" />
                      <Text
                        onClick={() => {
                          changeLocation("Bangalore");
                          onClose();
                        }}
                      >
                        Bangalore International Airport Terminal
                      </Text>
                    </Box>
                  </Flex>
                  <Flex flexDirection="column" w="50%">
                    <Text px="7" py="2" mb="2" bg="#f5f5f5">
                      SUGGESTED PICKUP LOCATIONS
                    </Text>
                    <Box
                      fontWeight="normal"
                      fontSize="lg"
                      _hover="none"
                      bg="#fbfbfb"
                      display="flex"
                      onClick={() => {
                        changeLocation("Bangalore");
                        onClose();
                      }}
                      cursor="pointer"
                    >
                      <VscLocation fontSize="50px" />
                      <Text>Bangalore International Airport Terminal</Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          </ModalBody>
          {/* map component  */}
          <Map openMap={openMap} setMapStatus={setMapStatus} />
          {/*  */}
        </ModalContent>
      </Modal>
    </>
  );
}
