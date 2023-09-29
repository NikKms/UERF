import { Button } from '@chakra-ui/react';

const Btn = ({ text, style = null, icon = null }) => {
  return (
    <Button
      minW={'80px'}
      leftIcon={icon}
      style={{ ...style }}
      variant="solid"
      p="0 15px"
      fontSize="12px"
      textTransform="uppercase"
      bgImage={'linear-gradient(145deg, #06c6b6 0%, #93deb0 100%)'}
      border="none"
      borderRadius="45px"
      boxShadow="0px 8px 15px rgba(0, 0, 0, 0.1)"
      transition="all 400ms ease"
      _hover={{
        backgroundImage: 'linear-gradient(145deg,#93deb0   0%, #06c6b6 100%)',
        boxShadow: '0px 15px 20px rgba(46, 229, 157, 0.4)',
        color: '#fff',
        transform: 'translateY(-7px)',
      }}
      _active={{ transform: ' translateY(-1px)' }}
    >
      {text}
    </Button>
  );
};

export default Btn;
