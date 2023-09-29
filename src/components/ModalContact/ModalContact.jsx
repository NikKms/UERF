import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Box,
  Heading,
  Center,
  Icon,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import bg from '../../assets/img/calling.jpg';

export const ModalContact = ({ onClose, isOpen, children }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={0}>
          <Flex>
            <Center
              flex="1"
              h="100vh"
              bgImage={bg}
              bgColor="#000"
              position="relative"
            >
              <Box zIndex={99}>
                <Heading color="#fff" mb={30}>
                  Подати заявку
                </Heading>
                {children}
              </Box>
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                background="rgb(9 87 9 / 28%)"
              />
            </Center>

            <Box
              w={110}
              backgroundColor="#fff"
              display="flex"
              alignItems="center"
            >
              <Button
                w={75}
                h={75}
                onClick={onClose}
                borderRadius="50%"
                bgColor="#23b24b"
                color="#fff"
                marginLeft={-37.5}
              >
                <CloseIcon />
              </Button>
            </Box>
          </Flex>
        </ModalBody>
        {/* <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};
