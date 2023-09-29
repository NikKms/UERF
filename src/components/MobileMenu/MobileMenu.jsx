import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import Nav from '../Nav/Nav';
import MobileBtn from './MobileBtn/MobileBtn';
import { useSwipeable } from 'react-swipeable';

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const swipeHandlers = useSwipeable({ onSwipedRight: onClose });

  const btnRef = useRef();
  return (
    <>
      <MobileBtn onClick={onOpen} isOpen={isOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          {...swipeHandlers}
          bg={
            'linear-gradient(90deg, rgba(44,64,55,0.8065727511707808) 10%, rgba(19,136,88,0.6777212105545343) 50%, rgba(137,210,177,0) 400%)'
          }
          pt="17px"
          pr="13px"
        >
          <MobileBtn onClick={onClose} isOpen={isOpen} />

          <DrawerBody display={'flex'} flexDir={'column'}>
            <Nav />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
