import { Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';
import { motion } from 'framer-motion';
import bgHero1 from '../../assets/img/1.jpg';
import bgHero2 from '../../assets/img/2.jpg';
import bgHero3 from '../../assets/img/3.jpg';
import bgHero4 from '../../assets/img/4.jpg';
import { useTranslation } from 'react-i18next';

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

const photoArr = [
  {
    url: bgHero1,
    title: 'SAVE OUR FOREST',
    text: 'Ea putant mandamus splendide mei, no ius tamquam iudicabit legendos cum natoque ne.',
  },
  {
    url: bgHero2,
    title: 'WATER REFINE',
    text: 'Ea putant mandamus splendide mei, no ius tamquam iudicabit legendos cum natoque ne.',
  },
  {
    url: bgHero3,
    title: 'SAVE ANIMALS',
    text: 'Ea putant mandamus splendide mei, no ius tamquam iudicabit legendos cum natoque ne.',
  },
  {
    url: bgHero4,
    title: 'ECO SYSTEM',
    text: 'Ea putant mandamus splendide mei, no ius tamquam iudicabit legendos cum natoque ne.',
  },
];

const AboutProblemsList = () => {
  const { t } = useTranslation();

  return (
    <AnimateOnScroll>
      <Grid
        as={'ul'}
        templateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }}
        gap={'2rem'}
      >
        {photoArr.map(el => (
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
              whileHover={{ scale: 1.1 }}
              objectFit={'cover'}
            />
            <Heading as={'h3'} textTransform={'uppercase'} size={'md'}>
              {t('aboutPage.solutions.title')}
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
