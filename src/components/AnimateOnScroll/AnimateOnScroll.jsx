import { motion } from 'framer-motion';
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
const AnimateOnScroll = ({ children, variant }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      whileInView="onscreen"
      transition={{ staggerChildren: 0.07, delayChildren: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
      variants={variant}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
