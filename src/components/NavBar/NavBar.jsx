import { Box, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Btn from '../Btn/Btn';
import { NavBarItems } from '../../common/data/navBarItems';
import './NavBar.css';
import { motion } from 'framer-motion';

const listAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      ease: 'easeOut',
      duration: 0.5,
    },
  }),
};

const NavBar = ({ onClick, flexDir = 'row' }) => {
  return (
    <Flex
      as={motion.ul}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      gap={5}
      listStyleType="none"
      flexDir={flexDir}
    >
      {NavBarItems.map(({ name, path }, index) => (
        <Box
          as={motion.li}
          variants={listAnimation}
          custom={index + 1}
          key={name}
        >
          <NavLink className="navLink" to={path}>
            <Btn
              text={name}
              onClick={onClick}
              style={flexDir === 'column' ? { padding: '0 50px' } : null}
            />
          </NavLink>
        </Box>
      ))}
    </Flex>
  );
};

export default NavBar;
