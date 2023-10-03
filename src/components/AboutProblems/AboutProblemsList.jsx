import { Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import { motion } from 'framer-motion';
import bgHero1 from '../../assets/img/1.jpg';
import bgHero2 from '../../assets/img/2.jpg';
import bgHero3 from '../../assets/img/3.jpg';
import bgHero4 from '../../assets/img/4.jpg';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const photoArr = [
  {
    url: bgHero1,
    title: 'Save forest',
    text: 'Ea putant mandamus splendide mei, no ius tamquam iudicabit legendos cum natoque ne.',
  },
  {
    url: bgHero2,
    title: 'Water refine',
    text: 'Ea putant mandamus splendide mei, no ius tamquam iudicabit legendos cum natoque ne.',
  },
  {
    url: bgHero3,
    title: 'save animals',
    text: 'Ea putant mandamus splendide mei, no ius tamquam iudicabit legendos cum natoque ne.',
  },
  {
    url: bgHero4,
    title: 'eco system',
    text: 'Ea putant mandamus splendide mei, no ius tamquam iudicabit legendos cum natoque ne.',
  },
];

const aboutVariants = {
  offscreen: {
    x: -150,
    y: 150,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const AboutProblemsList = () => {
  const { t, i18n } = useTranslation();
  const [arr, setArr] = useState(photoArr);
  const [languageKey, setLanguageKey] = useState(i18n.language);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const newArr = [
      {
        url: bgHero1,
        title: t('aboutPage.solutions.list.forest.title'),
        text: t('aboutPage.solutions.list.forest.text'),
      },
      {
        url: bgHero2,
        title: t('aboutPage.solutions.list.water.title'),
        text: t('aboutPage.solutions.list.water.text'),
      },
      {
        url: bgHero3,
        title: t('aboutPage.solutions.list.animals.title'),
        text: t('aboutPage.solutions.list.animals.text'),
      },
      {
        url: bgHero4,
        title: t('aboutPage.solutions.list.eco.title'),
        text: t('aboutPage.solutions.list.eco.text'),
      },
    ];

    setArr(newArr);
    setLanguageKey(i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, i18n.resolvedLanguage]);

  return (
    <AnimateOnScroll lang={languageKey}>
      <Grid
        as={motion.ul}
        templateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }}
        gap={'2rem'}
      >
        {arr.map(el => (
          <GridItem
            as={motion.li}
            variants={aboutVariants}
            listStyleType={'none'}
            textAlign={'center'}
            key={el.title}
            display={'grid'}
            gap={'1rem'}
          >
            <Image
              as={motion.img}
              src={el.url}
              minH={'200px'}
              objectFit={'cover'}
            />
            <Heading as={'h3'} textTransform={'uppercase'} size={'md'}>
              {el.title}
            </Heading>
            <Text as={'p'} color={'green.700'}>
              {el.text}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </AnimateOnScroll>
  );
};

export default AboutProblemsList;
