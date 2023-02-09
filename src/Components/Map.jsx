import {
  AspectRatio,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function Map({ openMap, setMapStatus }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (openMap) {
      onOpen();
      setMapStatus(false);
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
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
