import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';

import { useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import MobileBtn from './MobileBtn/MobileBtn';
import { useSwipeable } from 'react-swipeable';
import LangSelect from '../LangSelect/LangSelect';

const MobileMenu = ({ isOpen, onOpen, onClose }) => {
  const btnRef = useRef();
  const swipeHandlers = useSwipeable({ onSwipedRight: onClose });

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
            'linear-gradient(90deg, rgba(0,0,0, 0) 2%, rgba(19,136,88,0.5) 40%, rgba(137,210,177,0) 200%)'
          }
          pt="17px"
          pr="13px"
        >
          <MobileBtn onClick={onClose} isOpen={isOpen} />

          <DrawerBody display={'flex'} justifyContent={'center'} pt="100px">
            <NavBar onClick={onClose} flexDir={'column'} />
          </DrawerBody>

          <DrawerFooter>
            <LangSelect />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
