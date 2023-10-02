import { useState, useEffect } from 'react';
import { Button, Image } from '@chakra-ui/react';
import arrow from '../../assets/svg/arrow-to-top.svg';

const BtnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollTrigger = 400;
    setIsVisible(scrollY > scrollTrigger);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      colorScheme="teal"
      padding={'16px'}
      variant={isVisible ? 'solid' : 'ghost'}
      position="fixed"
      bottom="4"
      right="4"
      borderRadius={'full'}
      onClick={scrollToTop}
      display={isVisible ? 'flex' : 'none'}
      zIndex={'9'}
    >
      <Image src={arrow} boxSize={'35px'} color={'white'} />
    </Button>
  );
};

export default BtnToTop;
