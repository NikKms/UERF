import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const WaveText = ({ children, ...props }) => {
  const { t, i18n } = useTranslation();
  const [languageKey, setLanguageKey] = useState(i18n.language);

  // eslint-disable-next-line react/prop-types
  const [letters, setLetters] = useState(children.split(''));

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0 },
    },
  };

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const letters = children.split('');
    setLetters(letters);
    setLanguageKey(i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, i18n]);

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
      key={languageKey}
      fontSize={{ base: '2.3rem', sm: '3rem' }}
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
