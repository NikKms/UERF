import { Button } from '@chakra-ui/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const ImgModal = ({ isOpen, onClose, showNext, img }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="6xl">
      <ModalOverlay />
      <ModalContent backgroundColor="transparent" boxShadow="none">
        <ModalBody>
          {img !== undefined && (
            <Box>
              <img
                src={img}
                alt={`Image ${img}`}
                style={{ width: '100%', height: '600px' }}
              />
            </Box>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={onClose}
            _hover={{ bg: 'blue.800' }}
          >
            Close
          </Button>
          <Button
            colorScheme="blue"
            onClick={showNext}
            _hover={{ bg: 'blue.800' }}
          >
            Next
          </Button>{' '}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImgModal;
