import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Btn from '../Btn/Btn';
import { ModalContact } from '../ModalContact/ModalContact';
import { ContactForm } from '../ContactForm/ContactForm';

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModal = () => {
    onOpen();
    console.log(isOpen);
  };

  return (
    <div>
      Footer <Button onClick={handleModal}>Modal</Button>
      <ModalContact isOpen={isOpen} onClose={onClose}>
        <ContactForm />
      </ModalContact>
    </div>
  );
};

export default Footer;
