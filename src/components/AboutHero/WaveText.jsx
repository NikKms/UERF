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
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{ display: 'flex', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {letters &&
        letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
    </motion.h1>
  );
};

export default WaveText;
