import { Box, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Btn from '../Btn/Btn';
import './NavBar.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavigationItems } from '../../common/data/NavigationItems';
import { useEffect, useState } from 'react';

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
  const { t, i18n } = useTranslation();
  const [languageKey, setLanguageKey] = useState(i18n.language);
  const [navBarItems, setNavBarItems] = useState(NavigationItems);

  useEffect(() => {
    const NavItems = [
      { name: t('nav.home'), path: '/' },
      { name: t('nav.events'), path: '/events' },
      { name: t('nav.about'), path: '/about' },
    ];

    setNavBarItems(NavItems);
    setLanguageKey(i18n.language);
  }, [t, i18n]);
  return (
    <Flex
      as={motion.ul}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      gap={5}
      listStyleType="none"
      flexDir={flexDir}
      key={languageKey}
    >
      {navBarItems.map(({ name, path }, index) => (
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
              style={flexDir === 'column' ? { width: '150px' } : null}
            />
          </NavLink>
        </Box>
      ))}
    </Flex>
  );
};

export default NavBar;
