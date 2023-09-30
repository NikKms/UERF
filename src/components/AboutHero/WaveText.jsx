import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const WaveText = ({ children, ...props }) => {
  // eslint-disable-next-line react/prop-types
  const letters = children.split('');

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 400,
      },
    },
  };

  return (
    <Heading
      as={motion.h1}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      {...props}
    >
      {letters &&
        letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
    </Heading>
  );
};

export default WaveText;
