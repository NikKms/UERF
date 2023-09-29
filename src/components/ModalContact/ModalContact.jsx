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
          <Flex
            pr={{ md: '0', lg: '40px' }}
            alignItems={{ lg: 'center' }}
            position={{ sm: 'relative' }}
          >
            <Center
              flex="1"
              h="100vh"
              bgImage={bg}
              bgColor="#000"
              position="relative"
              p={{ sm: '15px' }}
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
            <Button
              w={75}
              h={75}
              position={{ sm: 'absolute', md: 'relative' }}
              top={{ sm: '15px' }}
              right={{ sm: '15px' }}
              onClick={onClose}
              borderRadius="50%"
              bgColor="#23b24b"
              color="#fff"
              ml={{ md: -25 }}
            >
              <CloseIcon />
            </Button>
            {/* 
            <Box
              w={110}
              backgroundColor="#fff"
              display="flex"
              alignItems="center"
            /> */}
          </Flex>
        </ModalBody>
        {/* <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};
