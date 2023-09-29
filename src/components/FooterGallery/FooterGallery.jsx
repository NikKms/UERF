import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Spacer,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import imgArr from "../../common/data/sliderBgArr";

const getRandomImages = (arr, count) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const FooterGallery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const randomImages = getRandomImages(imgArr, 6);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        onOpen();
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        onClose();
    };

    const showNextImage = () => {
        const nextIndex = (selectedImageIndex + 1) % randomImages.length;
        setSelectedImageIndex(nextIndex);
    };

    return (
        <>
            <Box minW={"280px"} alignItems="center" justifyContent="center">
                <Text as="h2" color="white" mb={2} textAlign="center">
                    Gallery
                </Text>
                <Flex flexWrap="wrap" gap={2} alignItems="center" justifyContent="center">
                    {randomImages.map((el, index) => (
                        <Box key={index}>
                            <Button
                                variant="unstyled"
                                _hover={{ bg: "transparent", transform: "scale(1.1)" }}
                                _active={{ bg: "transparent" }}
                                onClick={() => openModal(index)}
                                boxSize="115px"
                            >
                                <img
                                    src={el}
                                    alt={`Image ${index}`}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Button>
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Modal isOpen={isOpen} onClose={closeModal} size="4xl">
                <ModalOverlay />
                <ModalContent backgroundColor="transparent" boxShadow="none">
                    <ModalBody>
                        {selectedImageIndex !== null && (
                            <Box>
                                <img
                                    src={randomImages[selectedImageIndex]}
                                    alt={`Image ${selectedImageIndex}`}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </Box>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={closeModal}
                            _hover={{ bg: "blue.800" }}
                        >
                            Close
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={showNextImage}
                            _hover={{ bg: "blue.800" }}
                        >
                            Next
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default FooterGallery;
