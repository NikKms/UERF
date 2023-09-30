import { Grid, GridItem, Image, Text } from '@chakra-ui/react';

import sun from '../../assets/svg/about-icons/flower-svgrepo-com.svg';
import forest from '../../assets/svg/about-icons/forest-svgrepo-com.svg';
import recycle from '../../assets/svg/about-icons/recycle-svgrepo-com.svg';

import { motion } from 'framer-motion';
import AnimateOnScroll from '../AnimateOnScroll/AnimateOnScroll';

const aboutVariants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.5,
    },
  },
};

const AboutList = () => {
  return (
    <AnimateOnScroll>
      <Grid
        as={'ul'}
        templateColumns={{ base: '1fr', sm: 'repeat(3, 1fr)' }}
        textAlign={'center'}
      >
        <motion.div variants={aboutVariants}>
          <GridItem>
            <Image
              src={sun}
              margin={'0 auto'}
              mb={'12px'}
              width={'100px'}
              height={'100px'}
            />
            <Text mb={'8px'} fontWeight={'semibold'} fontSize={'4xl'}>
              290
            </Text>
            <Text textTransform={'uppercase'}>Working Project</Text>
          </GridItem>
        </motion.div>
        <motion.div className="card" variants={aboutVariants}>
          <GridItem>
            <Image
              src={forest}
              margin={'0 auto'}
              mb={'12px'}
              width={'100px'}
              height={'100px'}
            />
            <Text mb={'8px'} fontWeight={'semibold'} fontSize={'4xl'}>
              990
            </Text>
            <Text textTransform={'uppercase'}>Volunteer</Text>
          </GridItem>
        </motion.div>
        <motion.div className="card" variants={aboutVariants}>
          <GridItem>
            <Image
              src={recycle}
              margin={'0 auto'}
              mb={'12px'}
              width={'100px'}
              height={'100px'}
            />
            <Text mb={'8px'} fontWeight={'semibold'} fontSize={'4xl'}>
              1800
            </Text>
            <Text textTransform={'uppercase'}>Fund Collect</Text>
          </GridItem>
        </motion.div>
      </Grid>
    </AnimateOnScroll>
  );
};

export default AboutList;
