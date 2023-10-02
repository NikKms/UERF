import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Img,
  useDisclosure,
} from '@chakra-ui/react';
import imgArr from '../../common/data/sliderBgArr';
import ImgModal from './ImgModal';
import SetGrid from './setGrid';
import WaveText from '../WaveText/WaveText';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutGallery = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = index => {
    setSelectedImageIndex(index);
    onOpen();
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    onClose();
  };

  const showNextImage = () => {
    const nextIndex = (selectedImageIndex + 1) % imgArr.length;
    setSelectedImageIndex(nextIndex);
  };

  return (
    <>
      <Box
        as="section"
        paddingY={'90px'}
        flexDirection={'column'}
        maxW={'full'}
      >
        <Container
          maxW={{ base: '844px', lg: '1100px', xl: '1450px' }}
          px="12px"
        >
          <WaveText
            as={motion.h2}
            fontWeight={400}
            fontSize={'3rem'}
            color="black"
            mb={'2rem'}
            textAlign="center"
            textTransform="capitalize"
          >
            {t('aboutPage.gallery.title')}
          </WaveText>
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={2}
            alignItems="center"
            justifyContent="center"
          >
            {imgArr.map((el, index) => (
              <SetGrid key={index} index={index}>
                <Button
                  variant="unstyled"
                  w={'100%'}
                  h={'100%'}
                  _hover={{
                    bg: 'transparent',
                    transform: 'scale(1.01)',
                    transition: 'transform 0.4s',
                  }}
                  _active={{ bg: 'transparent' }}
                  onClick={() => openModal(index)}
                >
                  <Img
                    src={el}
                    alt={`Image ${index}`}
                    style={{
                      width: '100%',
                      height: '350px',
                      objectFit: 'cover',
                    }}
                  />
                </Button>
              </SetGrid>
            ))}
          </Grid>
        </Container>
      </Box>

      <ImgModal
        isOpen={isOpen}
        onClose={closeModal}
        showNext={showNextImage}
        img={imgArr[selectedImageIndex]}
      />
    </>
  );
};

export default AboutGallery;
