import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
const AnimateOnScroll = ({ children, variant }) => {
  const ref = useRef(null);

  return (
    <Box
      as={motion.div}
      ref={ref}
      initial="offscreen"
      whileInView="onscreen"
      transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
      viewport={{ once: true, amount: 0.4 }}
      variants={variant}
    >
      {children}
    </Box>
  );
};

export default AnimateOnScroll;
