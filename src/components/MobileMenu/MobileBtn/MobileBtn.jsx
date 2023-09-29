import './MobileBtn.css';
import { motion } from 'framer-motion';

const buttonAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: 'easeOut',
      duration: 0.2,
    },
  },
};

const MobileBtn = ({ onClick, isOpen }) => {
  return (
    <motion.div
      style={{ marginLeft: 'auto' }}
      initial="hidden"
      whileInView="visible"
      // viewport={{  once: true }}
      variants={buttonAnimation}
    >
      <label className="hamburger">
        <input type="checkbox" checked={isOpen} onChange={onClick} />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </label>
    </motion.div>
  );
};

export default MobileBtn;
