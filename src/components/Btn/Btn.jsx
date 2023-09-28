import { Button } from '@chakra-ui/react';

const Btn = ({ text, styles = null, icon = null }) => {
  return (
    <Button
      h={50}
      leftIcon={icon}
      style={{ ...styles }}
      variant="solid"
      p="1.3em 3em"
      fontSize="12px"
      textTransform="uppercase"
      // bgImage={'linear-gradient(145deg, #11998e 0%, #38ef7d 100%)'}
      bgImage={'linear-gradient(145deg, #06c6b6 0%, #93deb0 100%)'}
      border="none"
      borderRadius="45px"
      boxShadow="0px 8px 15px rgba(0, 0, 0, 0.1)"
      transition="all 400ms ease"
      _hover={{
        // backgroundImage: 'linear-gradient(145deg,#38ef7d   0%, #11998e 100%)',
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