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
    <Modal onClose={onClose} isOpen={isOpen} size="3xl" isCentered>
      <ModalOverlay bg="linear-gradient(-45deg, rgb(255 254 10 / 31%), rgb(22 172 223 / 61%))" />
      <ModalContent bg="transparent" boxShadow="none">
        <ModalBody p={0}>
          <ModalCloseButton />
          {/* <Button
            w={75}
            h={75}
            top={{ sm: '15px' }}
            right={{ sm: '15px' }}
            onClick={onClose}
            borderRadius="50%"
            bgColor="#23b24b"
            color="#fff"
          >
            <CloseIcon />
          </Button> */}
          <Flex>
            <Center
              flex="1"
              justifyContent="center"
              alignItems="center"
              p={{ sm: '15px' }}
            >
              <Box zIndex={99}>{children}</Box>
            </Center>

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
