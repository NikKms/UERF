import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const AnimateOnScroll = ({ children, variant, key }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
      viewport={{ once: true, amount: window.innerWidth > 767 ? 0.5 : 0.2 }}
      variants={variant}
      key={key}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
